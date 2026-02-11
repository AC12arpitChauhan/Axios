import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

gsap.registerPlugin(ScrollTrigger);

/**
 * Experience section — domain cards with animated moving-border wrappers,
 * entrance animations triggered on scroll.
 */
const Experience = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading slide-in from left
      gsap.from(headingRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Cards staggered entrance
      const cards = gridRef.current?.querySelectorAll(".exp-card");
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 60,
          rotateX: 15,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-20 w-full" id="experience">
      <h1 ref={headingRef} className="heading">
        Our{" "}
        <span className="text-purple">Technical Domains</span>
      </h1>

      <div
        ref={gridRef}
        className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 px-5 md:px-10 max-w-7xl mx-auto"
      >
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="text-black dark:text-white border-neutral-200 dark:border-slate-800 exp-card"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h2 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h2>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
