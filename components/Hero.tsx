import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateReveal } from "@/lib/animations";

const Hero = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textContainerRef.current) {
        animateReveal(textContainerRef.current, { delay: 0.2 });
    }
  }, []);

  return (
    <div className="pb-20 pt-36 relative w-full overflow-hidden">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="teal"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="green" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10 px-5 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
            
            {/* TEXT CONTENT */}
            <div ref={textContainerRef} className="flex flex-col items-start justify-center">
                <p className="uppercase tracking-widest text-xs text-teal-100 max-w-80 border-b border-white/10 pb-4 mb-8 font-mono">
                    The Development Club of IIIT Bhopal
                </p>

                <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8">
                    DIGITAL <br />
                    <span className="text-teal-400">SOLUTIONS</span> <br />
                    <span className="text-white/40">WITH PRECISION</span>
                </h1>

                <p className="md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl text-white-200 max-w-lg">
                    We are a collective of developers, designers, and innovators shifting the paradigm of collegiate technical societies.
                </p>

                <a href="#about">
                    <MagicButton
                        title="Explore Our Work"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            {/* STATIC LOGO */}
            <div className="flex items-center justify-center lg:justify-end relative h-[40vh] lg:h-[60vh]">
                <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-square flex items-center justify-center">
                    <img 
                        src="/axiosLogo.png" 
                        alt="Axios Logo" 
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
