import { readFile, mkdir, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";

const base = process.env.PORTFOLIO_URL || "http://127.0.0.1:3000";
const source = await readFile(new URL("../src/data/portfolio.ts", import.meta.url), "utf8");
const slugs = [...source.matchAll(/slug: "([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(slugs).size, slugs.length, "Project slugs must be unique");
const routes = ["/", "/work", ...slugs.map(slug => `/work/${slug}`)];
const pages = new Map();
for (const route of routes) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, `${route} must return 200`);
  const html = await response.text();
  assert.match(html, /<h1[ >]/, `${route} must have a main heading`);
  assert.ok(!/capstone|class activit|student directory/i.test(html), `${route} contains excluded content`);
  assert.ok(!html.includes("This page could not be found"), `${route} contains a 404`);
  pages.set(route, html);
}
let internalLinks = 0;
for (const [route, html] of pages) {
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    assert.ok(href && href !== "#", `${route} contains a placeholder link`);
    const url = new URL(href, new URL(route, base));
    if (url.origin !== base) continue;
    const target = pages.get(url.pathname);
    assert.ok(target, `${route} links to missing internal route ${url.pathname}`);
    if (url.hash) assert.ok(target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${route} links to missing anchor ${url.hash}`);
    internalLinks++;
  }
}
const notFound = await fetch(new URL("/work/not-a-real-project", base));
assert.equal(notFound.status, 404, "Unknown projects should return 404");
const images = ["/profile/junry-gallego-crossed-arms.png", "/profile/junry-gallego-closeup.png", "/projects/petmate-home.svg", "/projects/petmate-appointments.svg", ...new Set([...source.matchAll(/image: "([^"]+)"/g)].map(match => match[1]))];
for (const image of images) assert.equal((await fetch(new URL(image, base), { method: "HEAD" })).status, 200, `Missing image ${image}`);
const report = { checkedAt: new Date().toISOString(), routes: routes.length, projects: slugs.length, internalLinks, images: images.length, unknownProject404: true, excludedContentAbsent: true, status: "passed" };
await mkdir(new URL("../qa-results/", import.meta.url), { recursive: true });
await writeFile(new URL("../qa-results/routes.json", import.meta.url), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
