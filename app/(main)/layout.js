import { CourseProvider } from "@/povider/CourseProvider";
import "../globals.css";
import Navbars from "./components/shared/Navbars";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbars />
      <Navigation />
      <CourseProvider>
        <main>{children}</main>
      </CourseProvider>
      <Footer />
    </>
  );
}
