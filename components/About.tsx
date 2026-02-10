"use client";

import React, { useEffect, useRef } from "react";
import { Section } from "./Section";
import { animateReveal } from "@/lib/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const domains = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building production-grade applications with modern frameworks. From React & Next.js to backend architecture — we ship real products.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Crafting native and cross-platform mobile experiences that solve real campus and community problems at scale.",
    tags: ["React Native", "Flutter", "Kotlin"],
  },
  {
    number: "03",
    title: "AI / ML",
    description:
      "Exploring the frontier of artificial intelligence — building models, fine-tuning LLMs, and deploying intelligent systems.",
    tags: ["Python", "TensorFlow", "LLMs", "Computer Vision"],
  },
  {
    number: "04",
    title: "Cloud & DevOps",
    description:
      "Infrastructure as code, CI/CD pipelines, and cloud-native architectures. We don't just build — we deploy and scale.",
    tags: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    number: "05",
    title: "Open Source",
    description:
      "Contributing to the global developer ecosystem. We believe in building in public and giving back to the community.",
    tags: ["GitHub", "OSS", "Community"],
  },
  {
    number: "06",
    title: "Competitive Programming",
    description:
      "Sharpening problem-solving skills through algorithmic challenges, contests, and peer-to-peer learning sessions.",
    tags: ["DSA", "Codeforces", "LeetCode"],
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const domainsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate the mission block
      if (missionRef.current) {
        gsap.fromTo(
          missionRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: missionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate domain cards with stagger
      if (domainsRef.current) {
        const cards = domainsRef.current.querySelectorAll(".domain-card");
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: domainsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate the expanding line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate the quote
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 85%",
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
      <Section id="about" className="bg-black-100 border-t border-white/10">
        {/* ── HEADING ── */}
        <div ref={headingRef} className="mb-16 md:mb-24">
          <p className="text-azure font-mono text-sm tracking-[0.2em] mb-6 uppercase">
            Who We Are
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.95]">
            We Build{" "}
            <span className="text-azure">What&apos;s</span>
            <br />
            <span className="text-white/40">Next.</span>
          </h2>
        </div>

        {/* ── MISSION BLOCK ── */}
        <div
          ref={missionRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 md:mb-32"
        >
          {/* Left: Big editorial text */}
          <div className="lg:col-span-7">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight">
              Axios is the{" "}
              <span className="text-azure">premier development club</span> of
              IIIT Bhopal — a high-performance collective of engineers,
              designers, and builders who refuse to settle for ordinary.
            </p>
          </div>

          {/* Right: Supporting details */}
          <div className="lg:col-span-5 flex flex-col justify-end gap-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded with the conviction that students can ship
              production-grade software, we operate at the intersection of
              education and engineering — bridging the gap between classroom
              theory and real-world impact.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We don&apos;t just learn technologies — we deploy them. Every
              member of Axios contributes to live projects, open-source
              initiatives, and large-scale events that push the boundaries of
              what a college club can achieve.
            </p>
          </div>
        </div>

        {/* ── EXPANDING LINE ── */}
        <div
          ref={lineRef}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-azure/60 to-transparent mb-20 md:mb-32 origin-left"
        />

        {/* ── DOMAINS HEADER ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="text-azure font-mono text-sm tracking-[0.2em] mb-4 uppercase">
              Our Domains
            </p>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
              What We <span className="text-white/40">Master</span>
            </h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            Six verticals. One mission. We go deep, not wide.
          </p>
        </div>

        {/* ── DOMAIN CARDS GRID ── */}
        <div
          ref={domainsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10"
        >
          {domains.map((domain, index) => (
            <div
              key={index}
              className={`domain-card group p-8 md:p-10 flex flex-col justify-between min-h-[280px] relative overflow-hidden transition-colors duration-500 hover:bg-white/[0.03] ${
                // Add right border to all except last in row, and bottom border to all except last row
                index % 3 !== 2 ? "lg:border-r border-white/10" : ""
              } ${index % 2 !== 1 ? "md:border-r lg:border-r-0 border-white/10" : ""} ${
                index < domains.length - 3 ? "lg:border-b border-white/10" : ""
              } ${index < domains.length - 2 ? "md:border-b lg:border-b-0 border-white/10" : ""} ${
                index < domains.length - 1 ? "border-b md:border-b-0 border-white/10" : ""
              }`}
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-azure font-mono text-lg tracking-wider">
                  {domain.number}
                </span>
                {/* Decorative corner */}
                <div className="w-3 h-3 border-t border-r border-white/10 group-hover:border-azure/50 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {domain.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {domain.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {domain.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-white/10 text-xs font-mono text-white/50 group-hover:text-white/70 group-hover:border-white/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-azure/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* ── PHILOSOPHY QUOTE ── */}
        <div ref={quoteRef} className="mt-20 md:mt-32 border border-white/10 p-8 md:p-16 relative">
          <div className="absolute top-0 left-0 p-4 border-r border-b border-white/10">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Philosophy
            </span>
          </div>

          <div className="mt-4 md:mt-0">
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-4xl">
              &ldquo;We don&apos;t wait for the{" "}
              <span className="text-azure">future</span> — we{" "}
              <span className="relative inline-block">
                <span className="relative z-10">build</span>
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-azure/30" />
              </span>{" "}
              it.&rdquo;
            </blockquote>
            <p className="mt-8 text-muted-foreground font-mono text-sm tracking-wider uppercase">
              — The Axios Manifesto
            </p>
          </div>

          {/* Decorative grid pattern in corner */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-grid-white/[0.03] opacity-50" />
        </div>
      </Section>
    </div>
  );
};

export default About;
