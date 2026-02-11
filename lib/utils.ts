import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names using `clsx` and `tailwind-merge`.
 *
 * This utility ensures that conflicting Tailwind classes are resolved
 * correctly (e.g., `px-4` and `px-8` → only `px-8` is kept).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
