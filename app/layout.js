import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata = {
  title: "LearnFlow",
  description:
    "A modern LMS platform for creating, managing, and accessing online courses. It includes video lessons, quizzes, assignments, progress tracking, and certification—designed for both instructors and students with a responsive, user-friendly interface.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>{children}</>
        <Toaster position="top-right" expand={false} richColors />
      </body>
    </html>
  );
}
