import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-32 overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
};

export const SectionHeader = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) => {
  return (
    <div className={cn("mb-16 md:mb-24 flex flex-col gap-4", className)}>
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-medium">
          {subtitle}
        </p>
      )}
      <div className="w-full h-[1px] bg-border mt-8" />
    </div>
  );
};
