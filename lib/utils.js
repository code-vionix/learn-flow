import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function nameToColor(name, opacity = 0.3) {
  if (typeof name !== "string") {
    return `rgba(200, 200, 200, ${opacity})`; // fallback gray color
  }

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const r = (hash >> 16) & 255;
  const g = (hash >> 8) & 255;
  const b = hash & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
