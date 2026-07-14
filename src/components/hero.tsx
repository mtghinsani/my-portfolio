"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { personalInfo, typingTexts } from "@/lib/data";
import Image from "next/image";

function TypingAnimation() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => setCharIndex(charIndex + 1), 80);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => setCharIndex(charIndex - 1), 40);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
    }
  }, [charIndex, isDeleting, textIndex]);

  return (
    <span className="gradient-text font-mono">
      {typingTexts[textIndex].slice(0, charIndex)}
      <span className="animate-pulse text-[#00e5ff]">|</span>
    </span>
  );
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen items-center px-6 pt-16 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Text content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-center lg:text-left"
        >
          <motion.div variants={item}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00e5ff20] bg-[#00e5ff08] px-4 py-1.5 text-xs text-[#00e5ff]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00e5ff]" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div variants={item} className="mt-4 text-2xl font-medium md:text-3xl">
            <TypingAnimation />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-base text-muted leading-relaxed md:text-lg"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={personalInfo.resumeUrl}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-[#00e5ff30] bg-[#00e5ff08] px-7 py-3.5 text-sm font-medium text-[#00e5ff] transition-all duration-300 hover:border-[#00e5ff60] hover:bg-[#00e5ff18] hover:shadow-[0_0_30px_#00e5ff15]"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#a855f7] px-7 py-3.5 text-sm font-medium text-[#050510] transition-all duration-300 hover:shadow-[0_0_30px_#00e5ff30]"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-shrink-0"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-2 animate-pulse-glow rounded-full bg-gradient-to-r from-[#00e5ff30] to-[#a855f730] blur-xl" />

            {/* Avatar placeholder */}
            <div className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border-2 border-[#ffffff12] bg-gradient-to-br from-[#0d0d1a] to-[#12122a] md:h-72 md:w-72 lg:h-80 lg:w-80">
              <Image
                src="/images/myself.png"
                alt="Muhammad Teguh Insani"
                width={320}
                height={320}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-4 rounded-xl border border-[#ffffff10] bg-[#0d0d1ae0] px-3 py-1.5 text-xs font-medium backdrop-blur-md md:-right-6"
            >
              <span className="mr-1">🚀</span> Open to Work
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-2 -left-4 rounded-xl border border-[#ffffff10] bg-[#0d0d1ae0] px-3 py-1.5 text-xs font-medium backdrop-blur-md md:-left-6"
            >
              <span className="mr-1">⚡</span> JKT, Indonesia
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
