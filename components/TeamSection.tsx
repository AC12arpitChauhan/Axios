import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

import { coreTeam } from "@/data/team";
import { Section } from "./Section";
import { SectionTitle } from "./ui/Typography";
import { Button } from "./ui/Button";
import { animateReveal } from "@/lib/animations";
import type { TeamMember } from "@/types";

// ─── Types ───────────────────────────────────────────────────────────────────

interface TeamMemberTeaserProps {
  member: TeamMember;
}

// ─── Sub-Component ───────────────────────────────────────────────────────────

/**
 * Individual team member teaser card with grayscale-to-colour hover effect.
 */
const TeamMemberTeaser = ({ member }: TeamMemberTeaserProps) => (
  <div className="group relative aspect-[3/4] overflow-hidden bg-white/5 border border-white/10 transition-all duration-500 team-card justify-center items-center">
    <div className="absolute inset-0">
      {member.img?.startsWith("/") ? (
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
      ) : (
        <div className="w-full h-full bg-white/5 flex items-center justify-center text-4xl text-white/20">
          ?
        </div>
      )}
    </div>

    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="text-azure-400 font-mono text-xs uppercase tracking-wider mt-1">
        {member.role}
      </p>
    </div>
  </div>
);

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Team preview section on the home page showing the core team
 * with a CTA linking to the full roster.
 */
export const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      animateReveal(sectionRef.current, { y: 50, duration: 1 });
    }
  }, []);

  return (
    <div ref={sectionRef}>
      <Section id="team" className="py-20 md:py-32 border-t border-white/5">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <p className="text-azure-400 font-mono text-sm tracking-[0.2em] mb-4 uppercase">
              Leadership
            </p>
            <SectionTitle>
              THE CORE <span className="text-white/50">TEAM</span>
            </SectionTitle>
          </div>

          <Link href="/team">
            <Button variant="outline" className="hidden md:flex">
              View Full Roster <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {coreTeam.map((member, index) => (
            <div
              key={member.id}
              className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] ${
                index === 1 ? "scale-110 z-10" : ""
              } transition-transform duration-200`}
            >
              <TeamMemberTeaser member={member} />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="flex md:hidden justify-center">
          <Link href="/team">
            <Button variant="outline">
              View Full Roster <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};
