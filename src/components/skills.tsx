"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionWrapper, { SectionHeading } from "./section-wrapper";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

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

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="Skills"
        title="My Technical Arsenal"
        description="Technologies and tools I use to bring ideas to life."
      />

      {/* Category tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-wrap justify-center gap-3"
      >
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={cn(
                "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300",
                activeCategory === i
                  ? "border-[#00e5ff30] bg-[#00e5ff12] text-[#00e5ff] shadow-[0_0_20px_#00e5ff10]"
                  : "border-[#ffffff08] bg-[#ffffff05] text-muted hover:border-[#ffffff15] hover:text-foreground"
              )}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{cat.title}</span>
              <span className="sm:hidden">{cat.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Skills display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid gap-4 sm:grid-cols-2"
        >
          {skillCategories[activeCategory].skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ y: -2, scale: 1.01 }}
              className="glass group rounded-xl p-5 transition-colors hover:bg-[#ffffff10]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="font-mono text-xs text-muted">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-[#ffffff08]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "h-full rounded-full",
                    skillCategories[activeCategory].color === "cyan"
                      ? "bg-gradient-to-r from-[#00e5ff] to-[#00b8cc]"
                      : "bg-gradient-to-r from-[#a855f7] to-[#7c3aed]"
                  )}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Additional note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="flex items-center justify-center gap-2 text-sm text-muted">
          <ChevronRight size={14} className="text-[#00e5ff]" />
          Always learning — currently exploring Rust and WebAssembly
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
