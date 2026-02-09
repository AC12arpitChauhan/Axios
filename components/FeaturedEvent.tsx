import React, { useRef, useEffect } from "react";
import { Section, SectionHeader } from "./Section";
import { Button } from "./ui/Button";
import { FaArrowRight } from "react-icons/fa6";
import { animateReveal } from "@/lib/animations";

const FeaturedEvent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
        animateReveal(sectionRef.current, { y: 30, duration: 1.2 });
    }
  }, []);

  return (
    <div ref={sectionRef}>
      <Section className="bg-black-100">
        <SectionHeader
          title="Featured Case Study"
          subtitle="Hack-Bhopal 2.0: The largest student developer gathering in Central India."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10">
          {/* Image / Visual Side */}
          <div className="relative min-h-[400px] lg:min-h-[600px] bg-neutral-900 border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden group">
              {/* Placeholder for Event Image */}
              <div className="absolute inset-0 bg-grid-white/[0.05]" />
              <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-9xl font-black text-white/5 rotate-90 select-none">
                      HB 2.0
                    </h3>
              </div>
              
              <div className="absolute bottom-8 left-8 p-4 bg-black border border-white/10">
                  <span className="text-azure font-mono text-sm tracking-widest uppercase">
                      36 Hours • 500+ Devs
                  </span>
              </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 relative">
              <div className="absolute top-0 right-0 p-4 border-l border-b border-white/10">
                  <span className="font-mono text-xs text-muted-foreground">01 / CASE STUDY</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Orchestrating a <span className="text-azure">Technical Revolution</span>
              </h3>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  We didn&apos;t just organize a hackathon; we built an ecosystem. Hack-Bhopal 2.0 brought together the brightest minds to solve real-world problems. With support from mlh and major tech giants, we set a new standard for collegiate events.
              </p>

              <ul className="mb-12 space-y-4">
                  <li className="flex items-center gap-4 text-white font-medium">
                      <span className="w-2 h-2 bg-azure" /> $4000+ Prize Pool
                  </li>
                  <li className="flex items-center gap-4 text-white font-medium">
                      <span className="w-2 h-2 bg-azure" /> 15+ Industry Mentors
                  </li>
                  <li className="flex items-center gap-4 text-white font-medium">
                      <span className="w-2 h-2 bg-azure" /> 50+ Projects Deployed
                  </li>
              </ul>

              <Button variant="outline" className="self-start">
                  Read Full Case Study <FaArrowRight className="ml-2" />
              </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FeaturedEvent;
