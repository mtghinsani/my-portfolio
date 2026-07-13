"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from "./social-icons";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-[#ffffff06] bg-[#05051080] backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-12 lg:px-20">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold"
          >
            <span className="gradient-text">teguh</span>
            <span className="text-foreground">.dev</span>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || Mail;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#ffffff08] bg-[#ffffff04] text-muted transition-all duration-300 hover:border-[#00e5ff25] hover:bg-[#00e5ff08] hover:text-[#00e5ff]"
                  aria-label={link.name}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </motion.div>

          {/* Navigation links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (name) => (
                <a
                  key={name}
                  href={`#${name.toLowerCase()}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {name}
                </a>
              )
            )}
          </motion.nav>

          {/* Divider */}
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-[#ffffff10] to-transparent" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 text-xs text-muted"
          >
            &copy; {currentYear} {personalInfo.name}. Built with
            <Heart size={12} className="text-[#00e5ff]" fill="currentColor" />
            using Next.js &amp; Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
