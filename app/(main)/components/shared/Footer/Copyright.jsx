import { cn } from "@/lib/utils";

export default function Copyright({ className }) {
  return (
    <p className={cn(`text-center text-gray-500 text-sm mt-8`, className)}>
      © 2025 - LearnFlow. Developed by{" "}
      <span className={cn("text-white font-semibold", className)}>CodeVionix-members</span>. All rights
      reserved by{" "}
      <a
        target="_blank"
        href="https://codevionix.com"
        className="text-blue-600 underline"
      >
        CodeVionix
      </a>
      .
    </p>
  );
}
