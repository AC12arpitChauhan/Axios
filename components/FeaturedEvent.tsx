"use client";

import React, { useRef, useEffect } from "react";
import { Section, SectionHeader } from "./Section";
import { Button } from "./ui/Button";
import { FaArrowRight, FaCode, FaTrophy, FaClock, FaUsers } from "react-icons/fa6";
import { animateReveal } from "@/lib/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: FaClock, label: "Duration", value: "36 Hours" },
  { icon: FaUsers, label: "Hackers", value: "200+" },
  { icon: FaTrophy, label: "Prize Pool", value: "₹1L+" },
  { icon: FaCode, label: "Tracks", value: "4+" },
];

const tracks = ["AI / ML", "Web3", "IoT", "Social Impact"];

const FeaturedEvent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        animateReveal(sectionRef.current, { y: 30, duration: 1.2 });
      }

      // Animate image panel
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.1, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate content side
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll(".animate-in");
        gsap.fromTo(
          elements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate stats
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll(".stat-item");
        gsap.fromTo(
          statItems,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <Section className="bg-black-100">
        <SectionHeader
          title="Featured Case Study"
          subtitle="HackXios 2025 — The ultimate hackathon experience by Axios at Niimack 2025."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10">
          {/* ── IMAGE / VISUAL SIDE ── */}
          <div
            ref={imageRef}
            className="relative min-h-[400px] lg:min-h-[600px] bg-neutral-900 border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden group"
          >
            {/* Event Poster Image */}
            <Image
              src="/hackxioseve.png"
              alt="HackXios 2025 — The Ultimate Hackathon by Axios"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

            {/* Event badge — top left */}
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <span className="px-3 py-1.5 bg-azure/20 border border-azure/40 text-azure font-mono text-xs tracking-widest uppercase backdrop-blur-sm">
                Jan 2025
              </span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/70 font-mono text-xs tracking-wider uppercase backdrop-blur-sm">
                Hackathon
              </span>
            </div>

            {/* Bottom info strip */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-azure font-mono text-sm tracking-widest uppercase mb-2">
                    36 Hours • 200+ Hackers
                  </p>
                  <h4 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight">
                    HackXios
                  </h4>
                </div>
                {/* Animated pulse dot */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-azure opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-azure" />
                  </span>
                  <span className="text-azure/70 font-mono text-xs uppercase tracking-wider">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── CONTENT SIDE ── */}
          <div
            ref={contentRef}
            className="flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-20 relative"
          >
            {/* Corner label */}
            <div className="absolute top-0 right-0 p-4 border-l border-b border-white/10">
              <span className="font-mono text-xs text-muted-foreground">
                01 / CASE STUDY
              </span>
            </div>

            {/* Title */}
            <h3 className="animate-in text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight uppercase">
              A <span className="text-azure">36-Hour</span> Showdown
              <br />
              <span className="text-white/40">of Innovation</span>
            </h3>

            {/* Description */}
            <p className="animate-in text-muted-foreground text-lg mb-6 leading-relaxed">
              HackXios 2025 was a thrilling coding marathon where teams
              competed to build innovative solutions across multiple tracks.
              From sleepless nights to breakthrough ideas, developers battled
              it out for 36 hours straight — with mentorship from industry
              professionals and endless energy drinks.
            </p>

            {/* Tracks */}
            <div className="animate-in flex flex-wrap gap-2 mb-8">
              {tracks.map((track) => (
                <span
                  key={track}
                  className="px-4 py-1.5 border border-azure/20 bg-azure/5 text-azure text-xs font-mono tracking-wider uppercase hover:bg-azure/10 hover:border-azure/40 transition-colors duration-300 cursor-default"
                >
                  {track}
                </span>
              ))}
            </div>

            {/* Highlights list */}
            <ul className="animate-in mb-10 space-y-3">
              <li className="flex items-center gap-4 text-white font-medium">
                <span className="w-2 h-2 bg-azure flex-shrink-0" />
                ₹1L+ Prize Pool
              </li>
              <li className="flex items-center gap-4 text-white font-medium">
                <span className="w-2 h-2 bg-azure flex-shrink-0" />
                Industry Mentors & Expert Judges
              </li>
              <li className="flex items-center gap-4 text-white font-medium">
                <span className="w-2 h-2 bg-azure flex-shrink-0" />
                Groundbreaking Projects Deployed
              </li>
              <li className="flex items-center gap-4 text-white font-medium">
                <span className="w-2 h-2 bg-azure flex-shrink-0" />
                Held at IIIT Bhopal Campus
              </li>
            </ul>

            {/* CTA */}
            <div className="animate-in">
              <Link href="/events/5">
                <Button variant="outline" className="self-start group/btn">
                  View Event Details{" "}
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border-x border-b border-white/10"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`stat-item group p-6 md:p-8 flex flex-col items-center text-center relative transition-colors duration-500 hover:bg-white/[0.03] ${
                index < stats.length - 1
                  ? "border-r border-white/10"
                  : ""
              } ${index < 2 ? "border-b md:border-b-0 border-white/10" : ""}`}
            >
              <stat.icon className="text-azure text-xl mb-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
                {stat.value}
              </span>
              <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                {stat.label}
              </span>
              {/* Hover glow */}
              <div className="absolute inset-0 bg-azure/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default FeaturedEvent;
