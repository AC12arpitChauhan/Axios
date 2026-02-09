import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const splitTextToSpans = (text: string) => {
  return text.split("").map((char, index) => ({
    char: char === " " ? "\u00A0" : char,
    key: index,
  }));
};

export const animateTextSplit = (
  element: HTMLElement,
  options: { delay?: number; duration?: number; stagger?: number } = {}
) => {
  const chars = element.querySelectorAll(".char");
  return gsap.fromTo(
    chars,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: options.stagger || 0.05,
      duration: options.duration || 1,
      delay: options.delay || 0,
      ease: "power4.out",
    }
  );
};

export const animateReveal = (
    element: HTMLElement,
    options: { delay?: number; duration?: number; y?: number } = {}
  ) => {
    return gsap.fromTo(
      element,
      { y: options.y || 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: options.duration || 1,
        delay: options.delay || 0,
        ease: "power3.out",
      }
    );
  };
