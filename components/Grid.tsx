import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Grid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll(".bento-item");

      if (items) {
        // Set initial hidden state
        gsap.set(items, { opacity: 0, y: 60, scale: 0.9 });

        // Fast and snappy entrance animation - appears on page load
        const tl = gsap.timeline({
          delay: 2, // Starts after Hero (0.8s) + Experience (1.3s + 0.5s) = ~2.6s, so delay: 2s is good
        });

        // Quick staggered entrance with punch
        tl.to(items, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: {
            amount: 0.3,
            from: "start",
            ease: "power2.out",
          },
          ease: "back.out(2)",
        });

        // Fast, snappy hover animations
        items.forEach((item) => {
          const element = item as HTMLElement;

          element.addEventListener("mouseenter", () => {
            // Quick card lift
            gsap.to(element, {
              y: -15,
              scale: 1.04,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
              duration: 0.3,
              ease: "power2.out",
            });

            // Fast image zoom
            const img = element.querySelector("img");
            if (img) {
              gsap.to(img, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out",
              });
            }

            // Quick text animations
            const title = element.querySelector("h3, h2, h1");
            const description = element.querySelector("p");

            if (title) {
              gsap.to(title, {
                y: -4,
                duration: 0.25,
                ease: "power2.out",
              });
            }

            if (description) {
              gsap.to(description, {
                y: -2,
                duration: 0.25,
                ease: "power2.out",
              });
            }
          });

          element.addEventListener("mouseleave", () => {
            // Snappy reset
            gsap.to(element, {
              y: 0,
              scale: 1,
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
              duration: 0.3,
              ease: "power2.out",
            });

            const img = element.querySelector("img");
            if (img) {
              gsap.to(img, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }

            const title = element.querySelector("h3, h2, h1");
            const description = element.querySelector("p");

            if (title) {
              gsap.to(title, {
                y: 0,
                duration: 0.25,
                ease: "power2.out",
              });
            }

            if (description) {
              gsap.to(description, {
                y: 0,
                duration: 0.25,
                ease: "power2.out",
              });
            }
          });

          // Faster floating animation
          const randomDelay = Math.random() * 1 + 2; // Add 2s to start after entrance animation
          const randomDuration = 2 + Math.random() * 1;

          gsap.to(element, {
            y: -6,
            duration: randomDuration,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: randomDelay,
          });
        });
      }
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20">
      <div ref={gridRef}>
        <BentoGrid className="w-full py-20">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
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
      </div>
    </section>
  );
};

export default Grid;
