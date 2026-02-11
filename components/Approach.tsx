import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import type { ApproachCardProps } from "@/types";

gsap.registerPlugin(ScrollTrigger);

// ─── Constants ───────────────────────────────────────────────────────────────

const APPROACH_PHASES = [
  {
    title: "Planning & Strategy",
    des: "We collaboratively brainstorm and refine ideas. Our team analyses requirements and creates comprehensive roadmaps to ensure every project begins with a rock-solid foundation.",
    animationSpeed: 5.1,
    containerClassName: "bg-emerald-900",
    colors: [
      [0, 255, 255],
      [236, 72, 153],
    ],
  },
  {
    title: "Development & Progress",
    des: "Once the plan is set, we move into building. We use agile sprints, code reviews, and iterative builds to transform ideas into functional, beautiful products — fast.",
    animationSpeed: 3,
    containerClassName: "bg-black",
    colors: [[125, 211, 252]],
    dotSize: 2,
  },
  {
    title: "Launch & Iterate",
    des: "The final stage: deployment and beyond. We never ship and forget. We use analytics, user feedback, and continuous integration to improve every product we launch.",
    animationSpeed: 3,
    containerClassName: "bg-sky-600",
    colors: [[236, 72, 153], [232, 121, 249]],
  },
] as const;

// ─── Sub-Component ───────────────────────────────────────────────────────────

/**
 * Approach card with a canvas-reveal hover effect.
 *
 * Renders a title, icon, and animated background.
 * On hover, the effect recedes to reveal the description.
 */
const ApproachCard = ({
  title,
  icon,
  des,
  children,
}: ApproachCardProps & { icon: React.ReactNode }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      {/* Corner icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        {/* Icon collapses on hover */}
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>

        {/* Title */}
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>

        {/* Description */}
        <h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#e4ecff" }}
        >
          {des}
        </h2>
      </div>
    </div>
  );
};

// ─── Icon ────────────────────────────────────────────────────────────────────

const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

// ─── Approach Icons ──────────────────────────────────────────────────────────

const AcesIcon = () => (
  <svg
    width="66"
    height="65"
    viewBox="0 0 66 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white"
  >
    <path
      d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
      stroke="currentColor"
      strokeWidth="15"
      strokeMiterlimit="3.86874"
      strokeLinecap="round"
    />
  </svg>
);

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Approach section — three-phase methodology presented
 * as interactive canvas-reveal cards.
 */
const Approach = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Cards scale + fade
      const cards = cardsContainerRef.current?.querySelectorAll(".approach-card-wrapper");
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          scale: 0.9,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-20">
      <h1 ref={headingRef} className="heading">
        Our <span className="text-purple">Approach</span>
      </h1>

      <div
        ref={cardsContainerRef}
        className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 px-5 md:px-10 max-w-7xl mx-auto"
      >
        {APPROACH_PHASES.map((phase) => (
          <div key={phase.title} className="approach-card-wrapper flex-1 w-full">
            <ApproachCard
              title={phase.title}
              des={phase.des}
              icon={<AcesIcon />}
            >
              <CanvasRevealEffect
                animationSpeed={phase.animationSpeed}
                containerClassName={phase.containerClassName}
                colors={phase.colors.map((c) => [...c]) as number[][]}
                dotSize={"dotSize" in phase ? (phase.dotSize as number) : undefined}
              />
            </ApproachCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
