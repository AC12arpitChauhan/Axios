import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { Section, SectionHeader } from "./Section";
import type { Project } from "@/types";

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    title: "Axios Design System",
    category: "Open Source",
    description: "A comprehensive React component library for internal tools.",
    stack: ["React", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Campus Connect",
    category: "Web App",
    description: "Centralized platform for student resources and event management.",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    link: "#",
  },
  {
    title: "EcoTrack",
    category: "Mobile App",
    description: "Sustainability tracking application built for the Green Initiative.",
    stack: ["React Native", "Firebase"],
    link: "#",
  },
  {
    title: "Algorithmic Trading Bot",
    category: "FinTech",
    description: "High-frequency trading bot analyzing crypto market trends.",
    stack: ["Python", "Pandas", "AWS"],
    link: "#",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Projects section — displays a grid of selected club works
 * with tech stack tags and hover-revealed action icons.
 */
const Projects = () => {
  return (
    <Section className="bg-black-100">
      <SectionHeader
        title="Selected Works"
        subtitle="Engineering solutions that solve real problems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group border border-white/10 p-8 hover:border-azure/50 transition-colors duration-300 flex flex-col justify-between min-h-[300px] relative overflow-hidden bg-neutral-900/20"
          >
            {/* Hover action icons */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-4 z-10">
              <FaGithub className="text-white hover:text-azure cursor-pointer text-xl" />
              <FaExternalLinkAlt className="text-white hover:text-azure cursor-pointer text-sm" />
            </div>

            <div>
              <span className="text-azure font-mono text-xs tracking-widest uppercase mb-4 block">
                {project.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:translate-x-2 transition-transform duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-white/10 text-xs font-mono text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Hover background effect */}
            <div className="absolute inset-0 bg-azure/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
