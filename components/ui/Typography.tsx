import React from "react";
import { cn } from "@/lib/utils";

export const HeroText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const BodyText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-base md:text-lg text-muted-foreground leading-relaxed font-medium",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Label = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "text-sm font-bold uppercase tracking-wider text-accent",
        className
      )}
    >
      {children}
    </span>
  );
};

export const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-3xl md:text-5xl font-bold tracking-tight text-white mb-8",
        className
      )}
    >
      {children}
    </h2>
  );
};
