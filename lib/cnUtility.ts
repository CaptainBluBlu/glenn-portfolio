import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// This is a standard utility function for combining Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
