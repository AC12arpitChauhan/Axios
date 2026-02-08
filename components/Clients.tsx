"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const companiesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade in
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

      // Cards container entrance
      gsap.from(cardsContainerRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Company logos staggered entrance
      const logos = companiesContainerRef.current?.querySelectorAll(".company-logo");
      if (logos) {
        gsap.from(logos, {
          opacity: 0,
          y: 30,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: companiesContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Add hover animations
        logos.forEach((logo) => {
          const element = logo as HTMLElement;
          
          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              y: -8,
              scale: 1.1,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <h1 ref={headingRef} className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          ref={cardsContainerRef}
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div
          ref={companiesContainerRef}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10"
        >
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2 company-logo">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
