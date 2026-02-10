"use client";

import { events } from "@/data/events";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Button } from "@/components/ui/Button";
import {
  FaCalendar,
  FaMapPin,
  FaArrowLeft,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa6";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

// Helper to find event by ID
const getEvent = (id: string) => {
  return events.find((e) => e.id === parseInt(id));
};

// Get adjacent events for navigation
const getAdjacentEvents = (id: number) => {
  const currentIndex = events.findIndex((e) => e.id === id);
  const prev = currentIndex > 0 ? events[currentIndex - 1] : null;
  const next =
    currentIndex < events.length - 1 ? events[currentIndex + 1] : null;
  return { prev, next };
};

export default function EventPage({ params }: { params: { id: string } }) {
  const event = getEvent(params.id);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!event) return;

    const ctx = gsap.context(() => {
      // Hero image reveal
      gsap.fromTo(
        heroRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out" }
      );

      // Content stagger in from left
      const contentChildren = contentRef.current?.children;
      if (contentChildren) {
        gsap.fromTo(
          contentChildren,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            delay: 0.4,
            ease: "power3.out",
          }
        );
      }

      // Sidebar slide in from right
      const sidebarChildren = sidebarRef.current?.children;
      if (sidebarChildren) {
        gsap.fromTo(
          sidebarChildren,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.6,
            ease: "power3.out",
          }
        );
      }

      // Bottom nav fade in
      if (navLinksRef.current) {
        gsap.fromTo(
          navLinksRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 1, ease: "power3.out" }
        );
      }
    });

    return () => ctx.revert();
  }, [event]);

  if (!event) {
    notFound();
  }

  const { prev, next } = getAdjacentEvents(event.id);

  const metaItems = [
    { icon: FaCalendar, label: "Date", value: event.date },
    { icon: FaMapPin, label: "Location", value: event.location },
    { icon: FaUsers, label: "Attendees", value: event.attendees },
  ];

  return (
    <main className="min-h-screen bg-black-100 text-white relative overflow-hidden">
      <FloatingNav navItems={navItems} />

      {/* ──── Hero Section ──── */}
      <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        {/* Image */}
        <div ref={heroRef} className="absolute inset-0">
          <img
            src={event.img}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-black-100/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black-100/80 via-transparent to-transparent" />

        {/* Grid texture overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

        {/* Back button */}
        <div className="absolute top-24 left-0 right-0 z-20 max-w-[1400px] mx-auto px-4 md:px-8">
          <Link
            href="/#events"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-mono uppercase tracking-widest transition-colors duration-300 group"
          >
            <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Events
          </Link>
        </div>

        {/* Event number badge */}
        <div className="absolute top-24 right-0 z-20 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
          <div className="flex justify-end">
            <span className="font-mono text-xs text-white/30 tracking-widest">
              {String(event.id).padStart(2, "0")} / {String(events.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Title anchored to bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20 max-w-[1400px] mx-auto px-4 md:px-8 pb-10 md:pb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-foreground max-w-4xl">
            {event.title}
          </h1>
        </div>
      </section>

      {/* ──── Metadata Bar ──── */}
      <section className="w-full border-y border-white/10 bg-black-100 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {metaItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 py-5 md:py-6 px-2 md:px-6"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-azure/30 bg-azure/5 flex-shrink-0">
                <item.icon className="text-azure text-sm" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm md:text-base font-semibold text-white">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──── Content Area ──── */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Main Content */}
          <div ref={contentRef} className="lg:col-span-2 space-y-10">
            {/* Description highlight */}
            <div className="border-l-2 border-azure pl-6 md:pl-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 leading-relaxed">
                {event.des}
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Details */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-azure mb-6">
                Event Details
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-[1.8] font-medium">
                {event.details}
              </p>
            </div>

            {/* Decorative grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="h-1 bg-azure/20" />
              <div className="h-1 bg-azure/10" />
              <div className="h-1 bg-azure/5" />
            </div>
          </div>

          {/* Sidebar */}
          <div ref={sidebarRef} className="space-y-6">
            {/* Quick Info Card */}
            <div className="border border-white/10 bg-neutral-900/30 p-6 md:p-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6">
                Quick Info
              </h3>
              <div className="space-y-5">
                {metaItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-azure mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share / CTA Card */}
            <div className="border border-white/10 bg-neutral-900/30 p-6 md:p-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
                Organized By
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-azure/10 border border-azure/30 flex items-center justify-center text-azure font-black text-lg">
                  Ax
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Axios</p>
                  <p className="text-xs text-white/50">
                    The Dev Club @ IIIT Bhopal
                  </p>
                </div>
              </div>
              <a href="mailto:axios.iiitbhopal@gmail.com">
                <Button variant="outline" className="w-full justify-center text-xs">
                  Contact Us
                </Button>
              </a>
            </div>

            {/* Tags / Category Card */}
            <div className="border border-white/10 bg-neutral-900/30 p-6 md:p-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 border border-azure/20 bg-azure/5 text-azure text-xs font-mono uppercase tracking-wider">
                  Tech Event
                </span>
                <span className="px-3 py-1.5 border border-white/10 text-white/60 text-xs font-mono uppercase tracking-wider">
                  Axios
                </span>
                <span className="px-3 py-1.5 border border-white/10 text-white/60 text-xs font-mono uppercase tracking-wider">
                  IIIT Bhopal
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Previous / Next Navigation ──── */}
      <section
        ref={navLinksRef}
        className="border-t border-white/10 bg-black-100"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Previous */}
          {prev ? (
            <Link
              href={`/events/${prev.id}`}
              className="group flex items-center gap-6 p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <FaArrowLeft className="text-white/30 group-hover:text-azure group-hover:-translate-x-1 transition-all duration-300 text-lg flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">
                  Previous Event
                </p>
                <p className="text-lg md:text-xl font-bold text-white/70 group-hover:text-white transition-colors truncate">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="p-8 md:p-12" />
          )}

          {/* Next */}
          {next ? (
            <Link
              href={`/events/${next.id}`}
              className="group flex items-center justify-end gap-6 p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-300 text-right"
            >
              <div className="min-w-0">
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">
                  Next Event
                </p>
                <p className="text-lg md:text-xl font-bold text-white/70 group-hover:text-white transition-colors truncate">
                  {next.title}
                </p>
              </div>
              <FaArrowRight className="text-white/30 group-hover:text-azure group-hover:translate-x-1 transition-all duration-300 text-lg flex-shrink-0" />
            </Link>
          ) : (
            <div className="p-8 md:p-12" />
          )}
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
