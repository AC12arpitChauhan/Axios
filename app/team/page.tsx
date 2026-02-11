"use client";

import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

import {
  coreTeam,
  leads,
  assistantWebDev,
  assistantAppDev,
  assistantGameDev,
  assistantGenAI,
  assistantDataScience,
  assistantAIML,
  assistantDevOps,
  assistantResearch,
  eventManagementTeam,
  prOutreachTeam,
  socialMediaTeam,
  creativeTeam,
} from "@/data/team";
import { Section } from "@/components/Section";
import { HeroText, SectionTitle } from "@/components/ui/Typography";
import type { TeamMember } from "@/types";

// ─── Types ───────────────────────────────────────────────────────────────────

interface TeamMemberCardProps {
  member: TeamMember;
  /** Whether to use the taller aspect ratio for core team members. */
  isCore?: boolean;
}

interface TeamGroupProps {
  title: string;
  members: TeamMember[];
  isCore?: boolean;
}

// ─── Sub-Components ──────────────────────────────────────────────────────────

/**
 * Team member card with image, overlay gradient, name, role,
 * and social links revealed on hover.
 */
const TeamMemberCard = ({ member, isCore = false }: TeamMemberCardProps) => (
  <div
    className={`group relative overflow-hidden bg-white/5 border border-white/10 ${
      isCore ? "aspect-[3/4]" : "aspect-square"
    } transition-all duration-300 hover:border-azure/50`}
  >
    {/* Photo / placeholder */}
    <div className="absolute inset-0 transition-all duration-500">
      <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/20">
        {member.img?.startsWith("/") ? (
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        ) : (
          <span className="text-4xl">?</span>
        )}
      </div>
    </div>

    {/* Overlay content */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <h3
        className={`font-bold text-white leading-tight ${
          isCore ? "text-2xl" : "text-lg"
        }`}
      >
        {member.name}
      </h3>
      <p className="text-azure-400 font-mono text-xs uppercase tracking-wider mt-1">
        {member.role}
      </p>

      <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
        {member.link && (
          <a
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-azure transition-colors"
            aria-label={`${member.name} on Twitter`}
          >
            <FaTwitter />
          </a>
        )}
        <a
          href="#"
          className="text-white hover:text-azure transition-colors"
          aria-label={`${member.name} on LinkedIn`}
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </div>
);

/**
 * Reusable team group block — renders a title and a responsive
 * grid of `TeamMemberCard` components.
 */
const TeamGroup = ({ title, members, isCore = false }: TeamGroupProps) => (
  <div className="mb-20">
    <SectionTitle className="mb-12">{title}</SectionTitle>
    <div
      className={`flex flex-wrap ${
        isCore ? "justify-center items-center" : "justify-start"
      } gap-6`}
    >
      {members.map((member, index) => (
        <div
          key={member.id}
          className={`w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] ${
            isCore
              ? `lg:w-[calc(25%-18px)] ${index === 1 ? "scale-110 z-10" : ""}`
              : "lg:w-[calc(20%-19.2px)]"
          } transition-transform duration-300`}
        >
          <TeamMemberCard member={member} isCore={isCore} />
        </div>
      ))}
    </div>
  </div>
);

// ─── Page ────────────────────────────────────────────────────────────────────

/**
 * Full team roster page — `/team`.
 *
 * Displays every team category in a consistent grid layout.
 */
export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black-100 pt-36 pb-20">
      <Section>
        {/* Hero heading */}
        <div className="mb-20 pb-40">
          <p className="text-azure-400 font-mono text-sm tracking-[0.2em] mb-6 uppercase">
            The Minds Behind The Machine
          </p>
          <HeroText>
            MEET THE <br />
            <span className="text-white/50">COLLECTIVE</span>
          </HeroText>
        </div>

        {/* Team groups */}
        <TeamGroup title="Core Team" members={coreTeam} isCore />
        <TeamGroup title="Leads" members={leads} />
        <TeamGroup title="Assistant Web Leads" members={assistantWebDev} />
        <TeamGroup title="Assistant App Leads" members={assistantAppDev} />
        <TeamGroup title="Assistant Game Leads" members={assistantGameDev} />
        <TeamGroup title="Assistant GenAI Leads" members={assistantGenAI} />
        <TeamGroup title="Assistant Data Science Leads" members={assistantDataScience} />
        <TeamGroup title="Assistant AI/ML Leads" members={assistantAIML} />
        <TeamGroup title="Assistant DevOps Leads" members={assistantDevOps} />
        <TeamGroup title="Assistant Research Leads" members={assistantResearch} />
        <TeamGroup title="Event Management Team" members={eventManagementTeam} />
        <TeamGroup title="PR & Outreach Team" members={prOutreachTeam} />
        <TeamGroup title="Social Media Team" members={socialMediaTeam} />
        <TeamGroup title="Creative Team" members={creativeTeam} />
      </Section>
    </main>
  );
}
