import React from "react";
import { cn } from "@/lib/utils";
import type { ButtonVariant } from "@/types";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** Visual style variant of the button. @default "primary" */
  variant?: ButtonVariant;
}

// ─── Variant Styles ──────────────────────────────────────────────────────────

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-azure text-white hover:bg-azure-600",
  outline: "border border-white/20 text-white hover:bg-white/5",
  ghost: "text-muted-foreground hover:text-white",
};

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Reusable button with three visual variants.
 *
 * Extends native `<button>` props so it supports `onClick`, `disabled`, etc.
 */
export const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-200 flex items-center gap-2",
        VARIANT_CLASSES[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
