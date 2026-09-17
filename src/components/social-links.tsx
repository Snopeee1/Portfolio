import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

export function SocialLinks() {
  return (
    <nav className="contact-socials" aria-label="Social profiles">
      {profile.socialLinks.map(link => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
          aria-label={`${link.platform}${link.platform === "GitHub" ? `: ${link.label}` : " profile"} (opens in a new tab)`}
          title={`${link.platform}${link.platform === "GitHub" ? ` · ${link.label}` : ""}`}>
          <span className={`social-icon social-icon-${link.platform.toLowerCase()}`} aria-hidden="true">
            {link.platform === "LinkedIn" ? <FaLinkedin /> : <FaGithub />}
          </span>
          <span>{link.label}</span>
        </a>
      ))}
    </nav>
  );
}
