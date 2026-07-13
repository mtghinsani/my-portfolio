"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./social-icons";
import SectionWrapper, { SectionHeading } from "./section-wrapper";
import { projects } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="Projects"
        title="Featured Work"
        description="A selection of projects I've built with passion and precision."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            whileHover={{ y: -6 }}
            className="glass group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:border-[#00e5ff20] hover:shadow-[0_8px_40px_#00e5ff08]"
          >
            {/* Image placeholder */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#0d0d1a] to-[#12122a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-bold text-muted/30">
                  {project.title.slice(0, 2)}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05051090] to-transparent" />

              {project.featured && (
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-[#00e5ff20] bg-[#05051090] px-2.5 py-1 text-[10px] font-medium text-[#00e5ff] backdrop-blur-md">
                  <Star size={10} fill="currentColor" />
                  Featured
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#05051080] opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffffff20] bg-[#05051090] text-foreground transition-colors hover:border-[#00e5ff40] hover:text-[#00e5ff]"
                  aria-label={`View ${project.title} source code`}
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffffff20] bg-[#05051090] text-foreground transition-colors hover:border-[#00e5ff40] hover:text-[#00e5ff]"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[#ffffff08] bg-[#ffffff05] px-2 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
