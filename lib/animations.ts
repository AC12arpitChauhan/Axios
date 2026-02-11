import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type {
  AnimateRevealOptions,
  AnimateTextSplitOptions,
  SplitChar,
} from "@/types";

gsap.registerPlugin(ScrollTrigger);

/**
 * Splits a text string into an array of character objects,
 * replacing spaces with non-breaking spaces for layout purposes.
 */
export const splitTextToSpans = (text: string): SplitChar[] => {
  return text.split("").map((char, index) => ({
    char: char === " " ? "\u00A0" : char,
    key: index,
  }));
};

/**
 * Animates individual character spans within a container element.
 *
 * Expects the target element to contain children with the `.char` class.
 */
export const animateTextSplit = (
  element: HTMLElement,
  options: AnimateTextSplitOptions = {},
): gsap.core.Tween => {
  const chars = element.querySelectorAll(".char");

  return gsap.fromTo(
    chars,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: options.stagger ?? 0.05,
      duration: options.duration ?? 1,
      delay: options.delay ?? 0,
      ease: "power4.out",
    },
  );
};

/**
 * Reveals an element with a slide-up and fade-in animation.
 *
 * Commonly used as a scroll-triggered entrance animation.
 */
export const animateReveal = (
  element: HTMLElement,
  options: AnimateRevealOptions = {},
): gsap.core.Tween => {
  return gsap.fromTo(
    element,
    { y: options.y ?? 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: options.duration ?? 1,
      delay: options.delay ?? 0,
      ease: "power3.out",
    },
  );
};
