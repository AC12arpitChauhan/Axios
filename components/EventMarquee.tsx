"use client";

import React from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import { events } from "@/data/events";
import type { Event } from "@/types";

// ─── Types ───────────────────────────────────────────────────────────────────

interface EventCardProps {
  event: Event;
}

// ─── Sub-Component ───────────────────────────────────────────────────────────

/**
 * Individual event card for the horizontal marquee.
 */
const EventCard = ({ event }: EventCardProps) => (
  <Link
    href={`/events/${event.id}`}
    className="group relative flex-shrink-0 w-[350px] md:w-[450px] border border-white/[0.07] bg-black-100 overflow-hidden hover:border-azure/30 transition-all duration-500"
  >
    {/* Top accent bar */}
    <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-azure via-blue-400 to-azure transition-all duration-700 ease-out" />

    {/* Image */}
    <div className="relative h-[200px] md:h-[240px] overflow-hidden">
      <img
        src={event.img}
        alt={event.title}
        className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-black-100/30 to-transparent" />

      {/* Index badge */}
      <div className="absolute top-3 left-3 bg-black/70 border border-white/10 px-2.5 py-1 backdrop-blur-sm">
        <span className="font-mono text-[10px] text-azure tracking-[0.25em] font-bold">
          {String(event.id).padStart(2, "0")}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="flex items-center gap-1.5">
          <FaCalendarAlt className="text-[9px] text-azure/60" />
          <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider">
            {event.date}
          </span>
        </div>
        <span className="w-[3px] h-[3px] bg-white/20" />
        <div className="flex items-center gap-1.5">
          <FaMapMarkerAlt className="text-[9px] text-azure/60" />
          <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider">
            {event.location}
          </span>
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-azure transition-colors duration-300 leading-tight mb-3 uppercase tracking-tight">
        {event.title}
      </h3>

      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
        {event.des}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
        <div className="flex items-center gap-1.5">
          <FaUsers className="text-[9px] text-azure/50" />
          <span className="font-mono text-[10px] text-white/40">
            {event.attendees}
          </span>
        </div>
        <div className="flex items-center gap-2 text-azure/50 group-hover:text-azure transition-colors duration-300">
          <span className="text-[10px] font-mono uppercase tracking-widest">
            View
          </span>
          <FaArrowRight className="text-[8px] -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </div>
      </div>
    </div>
  </Link>
);

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Horizontally-scrolling event marquee section.
 *
 * Duplicates events for seamless infinite looping via CSS animation.
 */
const EventMarquee = () => {
  const duplicatedEvents = [...events, ...events];

  return (
    <section
      id="events"
      className="relative w-full py-16 md:py-24 bg-black-100 overflow-hidden"
    >
      {/* Section label */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-12 md:mb-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 bg-azure" />
          <span className="font-mono text-xs text-azure uppercase tracking-[0.3em]">
            Past Events
          </span>
          <div className="w-16 h-px bg-white/10" />
        </div>

        <Link
          href="/events"
          className="group flex items-center gap-2 text-white/40 hover:text-azure transition-colors duration-300"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            View All
          </span>
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black-100 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
          {duplicatedEvents.map((event, index) => (
            <EventCard key={`${event.id}-${index}`} event={event} />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-12 md:mt-16">
        <div className="h-px bg-white/[0.07]" />
      </div>
    </section>
  );
};

export default EventMarquee;
