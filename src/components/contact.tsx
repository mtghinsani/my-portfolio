"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from "./social-icons";
import SectionWrapper, { SectionHeading } from "./section-wrapper";
import { personalInfo, socialLinks } from "@/lib/data";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Contact() {

    const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    toast.success("Message sent successfully!", {
    description: "Thanks for reaching out! I'll get back to you soon.",
    });

    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    toast.error("Failed to send message.", {
    description: "Please try again later.",
    });
  }
};

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        label="Contact"
        title="Let's Build Something"
        description="Got an idea? I'd love to hear about it. Let's connect."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass flex flex-col justify-between rounded-2xl p-8"
        >
          <div>
            <motion.h3 variants={item} className="text-2xl font-bold">
              Get in Touch
            </motion.h3>
            <motion.p variants={item} className="mt-3 text-muted">
              I&apos;m always excited to discuss new projects, creative ideas, or
              opportunities to be part of your vision. Whether you have a
              question or just want to say hi, my inbox is open.
            </motion.p>
          </div>

          <motion.div variants={item} className="mt-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group mb-8 flex items-center gap-3 text-foreground transition-colors hover:text-[#00e5ff]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00e5ff12]">
                <Mail size={18} className="text-[#00e5ff]" />
              </div>
              <span className="font-medium">{personalInfo.email}</span>
            </a>
          </motion.div>

          <motion.div variants={item} className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || Mail;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ffffff08] bg-[#ffffff05] text-muted transition-all duration-300 hover:border-[#00e5ff30] hover:bg-[#00e5ff10] hover:text-[#00e5ff]"
                  aria-label={link.name}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Contact form placeholder */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass rounded-2xl p-8"
        >
          <form
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >
            <motion.div variants={item}>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-muted"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Your name"
                className="w-full rounded-xl border border-[#ffffff08] bg-[#ffffff05] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 transition-colors focus:border-[#00e5ff40] focus:outline-none focus:ring-1 focus:ring-[#00e5ff30]"
              />
            </motion.div>

            <motion.div variants={item}>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-muted"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="your@email.com"
                className="w-full rounded-xl border border-[#ffffff08] bg-[#ffffff05] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 transition-colors focus:border-[#00e5ff40] focus:outline-none focus:ring-1 focus:ring-[#00e5ff30]"
              />
            </motion.div>

            <motion.div variants={item}>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-[#ffffff08] bg-[#ffffff05] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 transition-colors focus:border-[#00e5ff40] focus:outline-none focus:ring-1 focus:ring-[#00e5ff30]"
              />
            </motion.div>

            <motion.div variants={item}>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#a855f7] px-6 py-3.5 text-sm font-semibold text-[#050510] transition-all duration-300 hover:shadow-[0_0_30px_#00e5ff30]"
              >
                Send Message
                <Send
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
