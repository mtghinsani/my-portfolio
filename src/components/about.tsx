"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Sparkles } from "lucide-react";
import SectionWrapper, { SectionHeading } from "./section-wrapper";
import { personalInfo } from "@/lib/data";

const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies", value: "15+" },
  { label: "GitHub Contributions", value: "500+" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="About Me"
        title="Turning Ideas Into Digital Reality"
        description="Get to know me beyond the code."
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Bio card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass rounded-2xl p-8"
        >
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00e5ff] to-[#a855f7]">
              <Sparkles size={18} className="text-[#050510]" />
            </div>
            <h3 className="text-lg font-semibold">Who I Am</h3>
          </motion.div>

          <motion.p
            variants={item}
            className="leading-relaxed text-muted"
          >
            {personalInfo.longBio}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#00e5ff]" />
              {personalInfo.location}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[#a855f7]" />
              Student @ Telkom University
            </div>
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="glass group cursor-default rounded-2xl p-6 text-center transition-colors hover:bg-[#ffffff12]"
            >
              <div className="gradient-text text-3xl font-bold md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
