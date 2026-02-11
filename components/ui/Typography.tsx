import React from "react";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// ─── HeroText ────────────────────────────────────────────────────────────────

/** Used for the primary page heading (hero / above-the-fold). */
export const HeroText = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={cn(
        "text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground",
        className,
      )}
    >
      {children}
    </h1>
  );
};

// ─── BodyText ────────────────────────────────────────────────────────────────

/** Default body-copy paragraph with muted colour and relaxed leading. */
export const BodyText = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-base md:text-lg text-muted-foreground leading-relaxed font-medium",
        className,
      )}
    >
      {children}
    </p>
  );
};

// ─── Label ───────────────────────────────────────────────────────────────────

/** Small uppercase label (section badges, categories, etc.). */
export const Label = ({ children, className }: TypographyProps) => {
  return (
    <span
      className={cn(
        "text-sm font-bold uppercase tracking-wider text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
};

// ─── SectionTitle ────────────────────────────────────────────────────────────

/** Section-level heading (h2) for content blocks. */
export const SectionTitle = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={cn(
        "text-3xl md:text-5xl font-bold tracking-tight text-white mb-8",
        className,
      )}
    >
      {children}
    </h2>
  );
};
