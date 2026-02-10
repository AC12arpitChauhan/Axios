"use client";

import React, { useEffect, useRef, useState } from "react";
import { events } from "@/data/events";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCalendar,
  FaMapPin,
  FaUsers,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

// ─── Timeline Dot ─────────────────────────────────────────────
const TimelineDot = ({ index, total }: { index: number; total: number }) => (
  <div className="hidden lg:flex flex-col items-center gap-0 absolute -left-[52px] top-0 h-full">
    <div className="w-3 h-3 border-2 border-azure bg-black-100 z-10 mt-8 group-hover:bg-azure transition-colors duration-500" />
    {index < total - 1 && (
      <div className="w-[1px] flex-1 bg-gradient-to-b from-azure/40 via-white/10 to-transparent" />
    )}
  </div>
);

// ─── Event Card ───────────────────────────────────────────────
const EventCard = ({
  event,
  index,
  total,
}: {
  event: (typeof events)[0];
  index: number;
  total: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="group relative pl-0 lg:pl-12">
      <TimelineDot index={index} total={total} />

      <Link
        href={`/events/${event.id}`}
        className={`block border border-white/[0.07] bg-black-100 hover:bg-white/[0.02] transition-all duration-500 overflow-hidden event-card`}
      >
        {/* Top accent bar */}
        <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-azure via-blue-400 to-azure transition-all duration-700 ease-out" />

        <div
          className={`grid grid-cols-1 ${
            isEven ? "md:grid-cols-[1.2fr_1fr]" : "md:grid-cols-[1fr_1.2fr]"
          }`}
        >
          {/* Image Section */}
          <div
            className={`relative h-[240px] md:h-[320px] overflow-hidden ${
              !isEven ? "md:order-2" : ""
            }`}
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-black-100/40 to-transparent" />
            <div
              className={`absolute inset-0 bg-gradient-to-${
                isEven ? "r" : "l"
              } from-transparent via-transparent to-black-100/60 hidden md:block`}
            />

            {/* Index badge */}
            <div className="absolute top-4 left-4 bg-black/70 border border-white/10 px-3 py-1.5 backdrop-blur-sm">
              <span className="font-mono text-xs text-azure tracking-[0.25em] font-bold">
                {String(event.id).padStart(2, "0")}
              </span>
            </div>

            {/* Attendees badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/70 border border-white/10 px-3 py-1.5 backdrop-blur-sm">
              <FaUsers className="text-[10px] text-azure" />
              <span className="font-mono text-[11px] text-white/80 tracking-wide">
                {event.attendees}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`p-6 md:p-10 flex flex-col justify-center ${
              !isEven ? "md:order-1" : ""
            }`}
          >
            {/* Date & Location */}
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <div className="flex items-center gap-2">
                <FaCalendar className="text-[10px] text-azure/70" />
                <span className="font-mono text-[11px] text-white/50 uppercase tracking-wider">
                  {event.date}
                </span>
              </div>
              <span className="w-1 h-1 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <FaMapPin className="text-[10px] text-azure/70" />
                <span className="font-mono text-[11px] text-white/50 uppercase tracking-wider">
                  {event.location}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-azure transition-colors duration-300 leading-tight tracking-tight mb-4 uppercase">
              {event.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 line-clamp-3">
              {event.des}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.07] mb-5" />

            {/* CTA */}
            <div className="flex items-center gap-3 text-azure/60 group-hover:text-azure transition-all duration-500">
              <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold">
                Read More
              </span>
              <FaArrowRight className="text-xs -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="flex-1 h-px bg-azure/0 group-hover:bg-azure/20 transition-all duration-700" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

// ─── Stats Bar ────────────────────────────────────────────────
const StatsBar = () => {
  const totalAttendees = events.reduce((acc, e) => {
    const num = parseInt(e.attendees.replace(/[^0-9]/g, ""));
    return acc + (isNaN(num) ? 0 : num);
  }, 0);

  const stats = [
    { value: `${events.length}`, label: "Events Hosted" },
    { value: `${totalAttendees}+`, label: "Total Attendees" },
    { value: "8+", label: "Tech Domains" },
    { value: "2024–25", label: "Academic Year" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border border-white/[0.07]">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`flex flex-col items-center justify-center py-8 md:py-10 ${
            i < stats.length - 1 ? "border-r border-white/[0.07]" : ""
          } ${i < 2 ? "border-b md:border-b-0 border-white/[0.07]" : ""}`}
        >
          <span className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
            {stat.value}
          </span>
          <span className="font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.2em]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

// ─── Main Events Page ─────────────────────────────────────────
export default function EventsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: "power4.out" }
        );
      }

      // Hero subtitle/breadcrumb fade
      const heroMeta = heroRef.current?.querySelectorAll(".hero-meta");
      if (heroMeta) {
        gsap.fromTo(
          heroMeta,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.5,
            ease: "power3.out",
          }
        );
      }

      // Cards: scroll-triggered stagger reveal
      const cards = cardsContainerRef.current?.querySelectorAll(".event-card");
      if (cards) {
        cards.forEach((card, i) => {
          gsap.fromTo(
            card.closest(".group") || card,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-black-100 text-white relative overflow-clip">
      <FloatingNav navItems={navItems} />

      {/* ──── Hero Section ──── */}
      <section
        ref={heroRef}
        className="relative w-full pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
      >
        {/* Background texture */}
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-azure/[0.03] via-transparent to-transparent pointer-events-none" />

        {/* Decorative large background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="text-[15vw] md:text-[12vw] font-black text-white/[0.015] uppercase tracking-tighter whitespace-nowrap">
            EVENTS
          </span>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="hero-meta flex items-center gap-3 mb-8">
            <Link
              href="/"
              className="font-mono text-xs text-white/40 uppercase tracking-[0.2em] hover:text-azure transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-white/20">/</span>
            <span className="font-mono text-xs text-azure uppercase tracking-[0.2em]">
              Events
            </span>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8"
          >
            Our <br />
            <span className="text-azure">Events</span>
          </h1>

          {/* Subtitle */}
          <div className="hero-meta flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-medium">
              From hackathons to hands-on workshops, we craft experiences that transform students into builders. Explore every event Axios has orchestrated.
            </p>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-azure animate-pulse" />
              <span className="font-mono text-xs text-white/40 uppercase tracking-[0.2em]">
                {events.length} Events
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="hero-meta w-full h-px bg-white/10 mt-10" />
        </div>
      </section>

      {/* ──── Stats Bar ──── */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <StatsBar />
      </section>

      {/* ──── Events Timeline Grid ──── */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-24 md:pb-32">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-azure" />
            <span className="font-mono text-xs text-azure uppercase tracking-[0.3em]">
              All Events
            </span>
          </div>
          <div className="flex-1 h-px bg-white/[0.07]" />
          <span className="font-mono text-xs text-white/30 uppercase tracking-wider">
            Newest First
          </span>
        </div>

        {/* Cards */}
        <div ref={cardsContainerRef} className="relative lg:ml-12">
          {/* Timeline vertical line */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-azure/30 via-white/10 to-transparent" />

          <div className="flex flex-col gap-6 md:gap-8">
            {[...events].reverse().map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                total={events.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ──── Bottom CTA Section ──── */}
      <section className="border-t border-white/10 bg-black-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-azure/5 blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="font-mono text-xs text-azure uppercase tracking-[0.3em] mb-6">
              Want to be part of the next event?
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              Let&apos;s Build{" "}
              <span className="text-azure">Together</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-10 leading-relaxed">
              Join Axios and help us create unforgettable experiences that empower the next generation of developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="px-8 py-4 bg-azure text-white text-sm font-bold uppercase tracking-widest hover:bg-azure-600 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Back to Home
                <FaArrowRight className="text-xs" />
              </Link>
              <a
                href="mailto:axios.iiitbhopal@gmail.com"
                className="px-8 py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Footer Bar ──── */}
      <section className="border-t border-white/10 bg-black-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 flex items-center justify-between">
          <p className="text-xs font-mono text-white/30 tracking-wider">
            Axios IIIT Bhopal © 2026
          </p>
          <Link
            href="/"
            className="text-xs font-mono uppercase tracking-widest text-white/30 hover:text-azure transition-colors"
          >
            Home
          </Link>
        </div>
      </section>
    </main>
  );
}
