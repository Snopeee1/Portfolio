import Image from "next/image";
import { toolLogos } from "@/data/tool-logos";

export function hasToolLogo(name: string) {
  return Boolean(toolLogos[name]);
}

export function ToolLogo({ name, size = 20 }: { name: string; size?: number }) {
  const src = toolLogos[name];
  if (!src) return null;
  return <Image className="tool-logo" src={src} alt="" aria-hidden="true" width={size} height={size} unoptimized />;
}

export function ToolBadge({ name }: { name: string }) {
  return <span className="tool-badge"><ToolLogo name={name} /><span>{name}</span></span>;
}
