import React from "react";
import { Section, SectionHeader } from "./Section";
import { Button } from "./ui/Button";
import { FaArrowRight } from "react-icons/fa6";

const steps = [
  { number: "01", title: "Application", desc: "Submit your portfolio and GitHub profile." },
  { number: "02", title: "Task Phase", desc: "Prove your skills in a 48-hour challenge." },
  { number: "03", title: "Interview", desc: "Technical discussion with the core team." },
  { number: "04", title: "Induction", desc: "Welcome to the elite developer community." },
];

const Join = () => {
  return (
    <Section className="bg-black-100 border-t border-white/10">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="lg:w-1/3">
             <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8">
                 Join the<br />
                 <span className="text-azure">Ranks</span>
             </h2>
             <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                 Axios is not just a club; it&apos;s a high-performance team. We recruit the most dedicated, passionate, and skilled developers. Use the button to start your journey.
             </p>
             <Button variant="primary" className="w-full md:w-auto justify-center">
                 Apply Now <FaArrowRight />
             </Button>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
             {steps.map((step, index) => (
                 <div key={index} className="border border-white/10 p-8 hover:bg-white/5 transition-colors duration-300">
                     <span className="text-azure font-mono text-xl mb-4 block">{step.number}</span>
                     <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                     <p className="text-muted-foreground">{step.desc}</p>
                 </div>
             ))}
        </div>

      </div>
    </Section>
  );
};

export default Join;
