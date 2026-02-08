import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple timeline with popup animations
      const tl = gsap.timeline({
        defaults: { ease: "back.out(1.7)" },
      });

      // Grid subtle fade in
      if (gridRef.current) {
        tl.fromTo(
          gridRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
        );
      }

      // Logo popup
      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            clearProps: "all",
          },
          "-=0.2",
        );
      }

      // Title popup
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.25,
            clearProps: "all",
          },
          "-=0.15",
        );
      }

      // Subtitle popup
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.25,
            clearProps: "all",
          },
          "-=0.15",
        );
      }

      // Button popup
      if (buttonRef.current) {
        tl.fromTo(
          buttonRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.25,
            clearProps: "all",
          },
          "-=0.15",
        );
      }

      // Simple button hover
      const button = buttonRef.current;
      if (button) {
        const handleMouseEnter = () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        };

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup
        return () => {
          button.removeEventListener("mouseenter", handleMouseEnter);
          button.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pb-20 pt-36">
      {/** Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#2463EB"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#93BBFB"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#DBEAFE"
        />
      </div>

      {/** Grid background */}
      <div
        ref={gridRef}
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"
        style={{ opacity: 0 }}
      >
        {/* Radial gradient */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Logo */}
          <img
            ref={logoRef}
            src="/axiosLogo.png"
            alt="Axios Logo"
            className="w-32 h-32 md:w-40 md:h-40 mb-8 object-contain"
            style={{ opacity: 0, transform: "scale(0)" }}
          />

          {/* Title */}
          <div ref={titleRef} style={{ opacity: 0, transform: "scale(0)" }}>
            <TextGenerateEffect
              words="Building Digital Solutions with Precision"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
          </div>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
            style={{ opacity: 0, transform: "scale(0)" }}
          >
            We're Axios — the Development Club of IIIT Bhopal.
          </p>

          {/* Button */}
          <div ref={buttonRef} style={{ opacity: 0, transform: "scale(0)" }}>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
