import { companies } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { Section } from "./Section";

const Sponsors = () => {
  return (
    <Section id="testimonials" className="py-20 md:py-32 overflow-hidden border-t border-white/5 relative">
      <div className="flex flex-col items-center w-full px-5 z-10 relative">
        <div className="flex flex-col md:flex-row items-end justify-between w-full mb-20 gap-8 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase max-w-2xl leading-none">
                Trusted by <br/> <span className="text-azure-400">Industry Leaders</span>
            </h1>
            <p className="text-white/50 max-w-md text-right md:text-left text-lg leading-relaxed">
                We partner with trailblazing companies to bring world-class opportunities, resources, and mentorship to our community.
            </p>
        </div>

        <div className="flex flex-col items-center w-full -mx-5 md:-mx-10 lg:-mx-20">
          <InfiniteMovingCards
            items={companies}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </Section>
  );
};

export default Sponsors;
