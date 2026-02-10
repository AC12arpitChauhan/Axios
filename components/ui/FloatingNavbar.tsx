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
import { cn } from "@/lib/utils";
import { FaHouse } from "react-icons/fa6";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed z-[5000] top-4 inset-x-0 mx-auto px-10 py-3 border border-white/10 rounded-full bg-black/20 backdrop-blur-2xl items-center justify-center space-x-8 shadow-input",
          className
        )}
      >
        {/* Show Home link when not on the homepage */}
        {!isHome && (
          <Link
            href="/"
            className={cn(
              "relative text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            )}
          >
            <span className="block sm:hidden"><FaHouse /></span>
            <span className="hidden sm:block">Home</span>
          </Link>
        )}

        {navItems.map((navItem: any, idx: number) => {
          const isHashLink = navItem.link.startsWith("/#");
          const linkClasses = cn(
            "relative text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          );

          if (isHashLink) {
            // Use native <a> for hash links to avoid Next.js re-navigation & animation replay
            const targetId = navItem.link.replace("/#", "");
            return (
              <a
                key={`link=${idx}`}
                href={navItem.link}
                className={linkClasses}
                onClick={(e) => {
                  e.preventDefault();
                  // If not on homepage, navigate to homepage with hash
                  if (!isHome) {
                    window.location.href = navItem.link;
                    return;
                  }
                  const el = document.getElementById(targetId);
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY;
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
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={linkClasses}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
