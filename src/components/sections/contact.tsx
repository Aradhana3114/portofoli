"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { useIntersection } from "@/hooks/use-intersection";

const socialLinks = [
  { label: "LinkedIn", href: `https://linkedin.com/in/${socials.linkedin}`, icon: Linkedin },
  { label: "GitHub", href: `https://github.com/${socials.github}`, icon: Github },
  { label: "Instagram", href: `https://instagram.com/${socials.instagram}`, icon: Instagram },
];

export function Contact() {
  const { ref, isVisible } = useIntersection<HTMLDivElement>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project Collaboration",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "Project Collaboration", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="border-b border-border py-24">
      <div ref={ref} className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-h1 font-display">Let's Start</h2>
          <h2 className="text-h1 font-display">A Project</h2>
          <p className="mx-auto mt-6 max-w-2xl text-body text-foreground/70">
            Interested in working together? Fill out the form or drop me a direct message. I'm available for freelance & full-time roles.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-h3 font-display">Direct Email</h3>
              <a
                href={`mailto:${profile.email}`}
                className="text-h3 font-medium text-foreground/80 transition-colors hover:text-accent-secondary"
              >
                {profile.email}
              </a>
            </div>

            <div>
              <h3 className="mb-4 text-h3 font-display">Social Presence</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-background transition-all hover:border-foreground hover:bg-foreground hover:text-background"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-caption font-semibold text-foreground/70">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-body transition-all focus:border-foreground focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-caption font-semibold text-foreground/70">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-body transition-all focus:border-foreground focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-caption font-semibold text-foreground/70">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-body transition-all focus:border-foreground focus:outline-none"
                >
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-caption font-semibold text-foreground/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-body transition-all focus:border-foreground focus:outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status === "success" && (
                <p className="text-caption text-green-600">Pesan berhasil dikirim!</p>
              )}
              {status === "error" && (
                <p className="text-caption text-red-600">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-foreground bg-foreground px-6 py-4 font-display text-body font-bold uppercase tracking-wider text-background transition-all hover:bg-background hover:text-foreground disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
