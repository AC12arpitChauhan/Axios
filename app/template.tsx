"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

// ─── Constants ───────────────────────────────────────────────────────────────

/** Animation variants for page transition elements. */
const transitionVariants = {
  initial: "initial" as const,
  animate: "enter" as const,
  exit: "exit" as const,
};

// ─── Template ────────────────────────────────────────────────────────────────

interface TemplateProps {
  children: ReactNode;
}

/**
 * Page-level template that wraps every route with transition overlay layers.
 *
 * - `banner-1`: Fade overlay (controlled via JS opacity)
 * - `banner-2`: Circular clip-path reveal overlay
 *
 * Both banners are `pointer-events-none` to avoid blocking interaction.
 */
export default function Template({ children }: TemplateProps) {
  return (
    <div className="relative">
      <div
        className="h-screen w-screen fixed top-0 left-0 z-[100] pointer-events-none bg-black-100"
        id="banner-1"
        style={{
          opacity: 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      {children}

      <div
        className="h-screen w-screen fixed top-0 left-0 z-[100] pointer-events-none bg-teal-500"
        id="banner-2"
        style={{
          clipPath: "circle(0% at 50% 50%)",
          transition: "clip-path 0.5s ease-in-out",
        }}
      />
    </div>
  );
}
