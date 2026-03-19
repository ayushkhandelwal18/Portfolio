import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind CSS classes cleanly.
 * Automatically resolves conflicts (like pr-4 and px-2).
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
