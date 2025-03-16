import Navbars from "@/app/(main)/components/shared/Navbars";
import Navigation from "@/app/(main)/components/shared/Navigation";
import ProfileTop from "./_components/ProfileTop";
import InstructorCoursePage from "./_components/CoursePage";
import Footer from "@/app/(main)/components/shared/Footer";

export default function InstructorProfile(){
    return (
        <>
        <Navbars/>
        <Navigation/>
        <ProfileTop/>
        <InstructorCoursePage/>
        <Footer/>
        </>
    );
}