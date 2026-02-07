import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading slide in from left
      gsap.from(headingRef.current, {
        opacity: 0,
        x: -60,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Domain cards staggered entrance
      const cards = gridRef.current?.querySelectorAll(".domain-card");
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        });

        // Add hover effects
        cards.forEach((card) => {
          const element = card as HTMLElement;
          
          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              y: -10,
              scale: 1.03,
              duration: 0.4,
              ease: "power2.out",
            });

            // Animate the image inside
            const img = element.querySelector("img");
            if (img) {
              gsap.to(img, {
                scale: 1.1,
                rotation: 5,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          });

          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });

            const img = element.querySelector("img");
            if (img) {
              gsap.to(img, {
                scale: 1,
                rotation: 0,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          });
        });
      }
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-20 w-full">
      <h1 ref={headingRef} className="heading">
        Our Technical <span className="text-purple">Domains</span>
      </h1>

      <div
        ref={gridRef}
        className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10"
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
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 domain-card"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
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
