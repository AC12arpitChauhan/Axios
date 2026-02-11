import React from "react";

import type { ButtonVariant } from "@/types";

// ─── Types ───────────────────────────────────────────────────────────────────

interface MagicButtonProps {
  /** Button label text. */
  title: string;
  /** Icon element rendered beside the title. */
  icon: React.ReactNode;
  /** Side on which the icon is placed relative to the title. */
  position: "left" | "right";
  /** Optional click handler. */
  handleClick?: () => void;
  /** Additional CSS classes for the inner span. */
  otherClasses?: string;
}

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Animated button with a spinning conic-gradient border effect.
 *
 * @see https://ui.aceternity.com/components/tailwindcss-buttons
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: MagicButtonProps) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
