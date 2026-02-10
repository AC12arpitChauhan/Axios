"use client";

import React from "react";
import { events } from "@/data/events";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const EventMarquee = () => {
  // Duplicate events for seamless looping
  const duplicatedEvents = [...events, ...events];

  return (
    <section id="events" className="relative w-full py-16 md:py-24 bg-black-100 overflow-hidden">
      {/* Section Label */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-12 md:mb-16 flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-azure animate-pulse" />
            <span className="font-mono text-xs text-azure uppercase tracking-[0.3em]">
              Event Highlights
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            What We&apos;ve <span className="text-azure">Built</span>
          </h2>
          <div className="w-full h-[1px] bg-border mt-4" />
        </div>
        <Link
          href="/events"
          className="hidden md:flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-azure transition-colors duration-300 uppercase tracking-wider group"
        >
          View All
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Top border line */}
      <div className="w-full h-[1px] bg-white/10 mb-1" />

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black-100 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {duplicatedEvents.map((event, index) => (
            <Link
              href={`/events/${event.id}`}
              key={`${event.id}-${index}`}
              className="group flex-shrink-0 w-[340px] md:w-[420px] mx-[1px] border border-white/[0.07] bg-black-100 hover:bg-white/[0.03] transition-all duration-500 relative overflow-hidden"
            >
              {/* Card Top Accent Bar */}
              <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-azure via-blue-400 to-azure transition-all duration-700 ease-out" />

              {/* Event Image */}
              <div className="relative h-[180px] md:h-[220px] overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-black-100/50 to-transparent" />

                {/* Index badge */}
                <div className="absolute top-3 left-3 bg-black/80 border border-white/10 px-2 py-1">
                  <span className="font-mono text-[10px] text-azure tracking-widest">
                    {String(event.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Date badge */}
                <div className="absolute top-3 right-3 bg-black/80 border border-white/10 px-2 py-1">
                  <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
                    {event.date}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 md:p-6 flex flex-col gap-3">
                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-azure transition-colors duration-300 leading-tight line-clamp-2">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {event.des}
                </p>

                {/* Meta row */}
                <div className="flex items-center gap-4 mt-2 pt-3 border-t border-white/[0.07]">
                  <div className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-[10px] text-azure/60" />
                    <span className="font-mono text-[10px] text-muted-foreground tracking-wide truncate max-w-[100px]">
                      {event.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaUsers className="text-[10px] text-azure/60" />
                    <span className="font-mono text-[10px] text-muted-foreground tracking-wide">
                      {event.attendees}
                    </span>
                  </div>
                </div>

                {/* CTA row */}
                <div className="flex items-center gap-2 mt-1 text-azure/0 group-hover:text-azure transition-all duration-500">
                  <span className="text-xs font-mono uppercase tracking-wider">
                    View Details
                  </span>
                  <FaArrowRight className="text-[10px] -translate-x-2 group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom border line */}
      <div className="w-full h-[1px] bg-white/10 mt-1" />

      {/* Mobile "View All" link */}
      <div className="md:hidden max-w-[1400px] mx-auto px-4 mt-8">
        <Link
          href="/events"
          className="flex items-center justify-center gap-2 text-sm font-mono text-muted-foreground hover:text-azure transition-colors duration-300 uppercase tracking-wider border border-white/10 py-3 hover:border-azure/30"
        >
          View All Events
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </section>
  );
};

export default EventMarquee;
