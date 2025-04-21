import { AuthProvider } from "@/components/AuthProvider";
import { CourseProvider } from "@/povider/CourseProvider";
import { Suspense } from "react";
import "../globals.css";
import Footer from "./components/shared/Footer/Footer";
import Navbars from "./components/shared/Navbars";
import Navigation from "./components/shared/Navigation";

export default function MainLayout({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        <Navbars />
        <Navigation />
        <CourseProvider>
          <main>{children}</main>
        </CourseProvider>
        <Footer />
      </AuthProvider>
    </Suspense>
  );
}
