import { FaLocationArrow } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade in
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Text fade in
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Button entrance
      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 20,
        duration: 0.6,
        delay: 0.4,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Social media icons
      const socialIcons = socialRef.current?.querySelectorAll("a");
      if (socialIcons) {
        gsap.from(socialIcons, {
          opacity: 0,
          scale: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Add hover animations
        socialIcons.forEach((icon) => {
          icon.addEventListener("mouseenter", () => {
            gsap.to(icon, {
              scale: 1.2,
              rotation: 10,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          icon.addEventListener("mouseleave", () => {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }

      // Address slide in
      gsap.from(addressRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: addressRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-80 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 ref={headingRef} className="heading lg:max-w-[45vw]">
          Ready to dive into tech with us?
        </h1>
        <p
          ref={textRef}
          className="text-white-200 md:mt-10 my-5 text-center"
        >
          Join Axios and be part of a community that builds, learns, and
          innovates together at IIIT Bhopal.
        </p>
        <a ref={buttonRef} href="mailto:axios.iiitbhopal@gmail.com">
          <MagicButton
            title="Mail Us"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p
          ref={addressRef}
          className="md:text-base text-sm md:font-normal font-light"
        >
          Address: Link Road Number 3, Near Kali Mata Mandir, Bhopal, MP, IND
          462003
        </p>

        <div ref={socialRef} className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
