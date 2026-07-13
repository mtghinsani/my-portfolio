"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import SectionWrapper, { SectionHeading } from "./section-wrapper";
import { experiences } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        label="Experience"
        title="My Professional Journey"
        description="Key roles and experiences that have shaped my career."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-[#00e5ff40] via-[#a855f740] to-transparent md:block" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              variants={item}
              className="relative md:pl-14"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 top-6 hidden h-4 w-4 rounded-full border-2 border-[#00e5ff] bg-[#050510] md:block">
                <div className="absolute inset-0 animate-pulse-glow rounded-full bg-[#00e5ff] opacity-40 blur-sm" />
              </div>

              <motion.div
                whileHover={{ y: -2, scale: 1.005 }}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:border-[#00e5ff15] hover:shadow-[0_4px_30px_#00000020]"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00e5ff12]">
                    <Briefcase size={16} className="text-[#00e5ff]" />
                  </div>
                  <span className="rounded-full bg-[#ffffff08] px-3 py-1 font-mono text-xs text-muted">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm font-medium text-[#00e5ff]">
                  {exp.company}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 flex-shrink-0 text-[#a855f7]"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
