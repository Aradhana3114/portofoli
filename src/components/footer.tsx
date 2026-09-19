import { Github, Linkedin, Instagram } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

const socialLinks = [
  { label: "GitHub", href: `https://github.com/${socials.github}`, icon: Github },
  { label: "LinkedIn", href: `https://linkedin.com/in/${socials.linkedin}`, icon: Linkedin },
  { label: "Instagram", href: `https://instagram.com/${socials.instagram}`, icon: Instagram },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted py-12">
      <div className="container-editorial">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:text-left">
          <div>
            <p className="text-body font-medium text-foreground">
              © {currentYear} {profile.name}. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground/60 transition-all hover:border-foreground hover:text-foreground"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
