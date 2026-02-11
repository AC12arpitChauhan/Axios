"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHouse } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Floating top navigation bar that hides/reveals based on scroll direction.
 *
 * - Hash links (`/#section`) trigger smooth-scrolling on the homepage
 *   and full navigation on sub-pages.
 * - Non-hash links use Next.js `<Link>` for client-side navigation.
 */
export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current !== "number") return;

    const direction = current - scrollYProgress.getPrevious()!;

    if (scrollYProgress.get() < 0.05) {
      setVisible(true);
    } else {
      setVisible(direction < 0);
    }
  });

  const linkClasses = cn(
    "relative text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
  );

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed z-[5000] top-4 inset-x-0 mx-auto px-10 py-3 border border-white/10 rounded-full bg-black/20 backdrop-blur-2xl items-center justify-center space-x-8 shadow-input",
          className,
        )}
        aria-label="Main navigation"
      >
        {/* Home link (visible on sub-pages only) */}
        {!isHome && (
          <Link href="/" className={linkClasses}>
            <span className="block sm:hidden">
              <FaHouse />
            </span>
            <span className="hidden sm:block">Home</span>
          </Link>
        )}

        {navItems.map((navItem, idx) => {
          const isHashLink = navItem.link.startsWith("/#");

          if (isHashLink) {
            const targetId = navItem.link.replace("/#", "");

            return (
              <a
                key={`nav-${idx}`}
                href={navItem.link}
                className={linkClasses}
                onClick={(e) => {
                  e.preventDefault();

                  if (!isHome) {
                    window.location.href = navItem.link;
                    return;
                  }

                  const el = document.getElementById(targetId);
                  if (el) {
                    const top =
                      el.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top, behavior: "smooth" });
                    window.history.pushState(null, "", navItem.link);
                  }
                }}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
              </a>
            );
          }

          return (
            <Link key={`nav-${idx}`} href={navItem.link} className={linkClasses}>
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          );
        })}
      </motion.nav>
    </AnimatePresence>
  );
};
