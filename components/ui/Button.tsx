import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
}

export const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-azure text-white hover:bg-azure-600",
    outline: "border border-white/20 text-white hover:bg-white/5",
    ghost: "text-muted-foreground hover:text-white",
  };

  return (
    <button
      className={cn(
        "px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-200 flex items-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
