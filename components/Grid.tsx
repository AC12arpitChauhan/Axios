import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

gsap.registerPlugin(ScrollTrigger);

/**
 * Grid section — bento-style mosaic layout of cards
 * with staggered scroll-triggered entrance animations.
 */
const Grid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll(".bento-item");
      if (!items) return;

      // Set initial hidden state
      gsap.set(items, {
        opacity: 0,
        y: 60,
        scale: 0.96,
      });

      // Staggered reveal on scroll
      gsap.to(items, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        stagger: {
          each: 0.12,
          from: "start",
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Subtle parallax effect on grid items
      items.forEach((item) => {
        gsap.to(item, {
          y: -15,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative">
      <BentoGrid className="w-full py-20" ref={gridRef}>
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
