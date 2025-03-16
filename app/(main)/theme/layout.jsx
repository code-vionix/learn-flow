import { Inter } from "next/font/google";

import Navbar from "../../../components/navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shadcn/ui Component Library",
  description: "A component library built with shadcn/ui and Next.js",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
