"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaCode,
  FaTrophy,
  FaClock,
  FaUsers,
} from "react-icons/fa6";

import { Section, SectionHeader } from "./Section";
import { Button } from "./ui/Button";
import { animateReveal } from "@/lib/animations";
import type { StatItem } from "@/types";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS: StatItem[] = [
  { icon: FaClock, label: "Duration", value: "36 Hours" },
  { icon: FaUsers, label: "Participants", value: "200+" },
  { icon: FaCode, label: "Projects", value: "45+" },
  { icon: FaTrophy, label: "Prize Pool", value: "₹1L+" },
];

const EVENT_HIGHLIGHTS = [
  "Open to all — freshers and seniors alike",
  "Industry mentors from leading tech companies",
  "Multiple tracks: AI/ML, Web3, IoT, Social Impact",
  "24/7 food, snacks, and energy drinks",
  "Networking with 200+ like-minded developers",
] as const;

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Featured event hero section — large promotional block for a
 * flagship event (e.g. HackXios), with stats, highlights, and CTAs.
 */
const FeaturedEvent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        animateReveal(contentRef.current, { y: 60, duration: 1.2 });
      }

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.05 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <Section className="border-t border-white/10 bg-black-100 overflow-visible">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <p className="text-azure font-mono text-sm tracking-[0.2em] mb-4 uppercase">
            Flagship Event
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.95]">
            <span className="text-azure">Hack</span>
            <span className="text-white/40">Xios</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — content */}
          <div ref={contentRef} className="space-y-10">
            <p className="text-2xl md:text-3xl font-bold text-white leading-snug tracking-tight">
              36 hours. 200+ developers. One mission:{" "}
              <span className="text-azure">build the future.</span>
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              HackXios is Axios&apos;s flagship annual hackathon — the largest
              student-led coding marathon at IIIT Bhopal. Teams compete across
              multiple tracks to create innovative solutions to real-world
              problems, mentored by industry professionals.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-white/10 p-4 text-center hover:border-azure/30 transition-colors duration-300"
                >
                  <stat.icon className="text-azure text-lg mx-auto mb-2" />
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-xs font-mono text-azure uppercase tracking-widest mb-6">
                Event Highlights
              </h3>
              <ul className="space-y-3">
                {EVENT_HIGHLIGHTS.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-azure mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/events/5">
                <Button variant="primary">
                  View Event Details <FaArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline">Browse All Events</Button>
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src="/hackxioseve.png"
                alt="HackXios — Axios Flagship Hackathon"
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-azure text-white px-6 py-4 z-10">
              <p className="text-3xl font-black">2025</p>
              <p className="text-[10px] font-mono uppercase tracking-widest">
                Edition
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FeaturedEvent;
