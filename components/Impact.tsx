import React from "react";

import { Section } from "./Section";
import type { ImpactStat } from "@/types";

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS: ImpactStat[] = [
  {
    value: "500+",
    label: "Students Impacted",
    description: "Across 3 major hackathons and 10+ workshops.",
  },
  {
    value: "10+",
    label: "Technical Workshops",
    description: "From React.js to Cloud Engineering.",
  },
  {
    value: "$4k+",
    label: "Sponsorship Raised",
    description: "Trusted by industry leaders like AWS and Polygon.",
  },
  {
    value: "3",
    label: "Major Hackathons",
    description: "Orchestrating the largest student-led events.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Impact section — showcases key metrics and accomplishments
 * in a responsive grid layout.
 */
const Impact = () => {
  return (
    <Section className="border-t border-white/10 bg-black-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-start group">
            <h3 className="text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-4 group-hover:text-azure transition-colors duration-300">
              {stat.value}
            </h3>
            <div className="h-[1px] w-12 bg-white/20 mb-6 group-hover:w-full transition-all duration-500" />
            <p className="text-xl font-bold uppercase tracking-wider text-white mb-2">
              {stat.label}
            </p>
            <p className="text-muted-foreground font-medium max-w-[200px]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Impact;
