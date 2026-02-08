import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

gsap.registerPlugin(ScrollTrigger);

const Approach = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Cards staggered entrance
      const cards =
        cardsContainerRef.current?.querySelectorAll(".approach-card");
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 70,
          scale: 0.9,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, cardsContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-20">
      <h1 ref={headingRef} className="heading">
        Our <span className="text-purple">Vision, Mission and Goal</span>
      </h1>
      <div
        ref={cardsContainerRef}
        className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4"
      >
        <Card
          title="Our Vision"
          des="To cultivate a thriving tech culture at IIIT Bhopal by inspiring innovation, collaboration, and continuous learning among students."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Our Mission"
          des="To provide hands-on exposure in real-world tech domains like Web, App, AI/ML, and more through events, mentorship, and community projects."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Our Goal"
          des="To empower every student to explore their technical potential, build impactful projects, and become confident future engineers."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  children,
  des,
}: {
  title: string;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [hoverCount, setHoverCount] = React.useState(0);

  return (
    <div
      className="approach-card max-w-sm w-full mx-auto lg:h-[35rem] group/card"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => {
        setHovered(true);
        setHoverCount((prev) => prev + 1);
      }}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className="border border-black/[0.2] dark:border-white/[0.2] w-full h-full 
            rounded-3xl p-8 relative overflow-hidden flex items-center justify-center"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            {/* Corner Icons */}
            <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

            {/* Front Content - Hidden when hovered */}
            <div
              className="relative z-20 px-10 pointer-events-none transition-opacity duration-300"
              style={{ opacity: hovered ? 0 : 1 }}
            >
              <h2 className="text-white text-center text-4xl font-bold">
                {title}
              </h2>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div
            className="border border-black/[0.2] dark:border-white/[0.2] w-full h-full 
            rounded-3xl p-8 relative overflow-hidden flex items-center justify-center"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            {/* Corner Icons */}
            <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

            {/* Canvas Reveal Effect */}
            <AnimatePresence mode="wait">
              {hovered && (
                <motion.div
                  key={`canvas-${hoverCount}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="h-full w-full absolute inset-0"
                >
                  {children}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Back Content */}
            <div className="relative z-20 px-10 pointer-events-none">
              <h2 className="text-white text-center text-3xl font-bold mb-4">
                {title}
              </h2>
              <p className="text-sm text-center" style={{ color: "#E4ECFF" }}>
                {des}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
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
