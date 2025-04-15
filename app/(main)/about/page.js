import TrustedCompanies from "../components/home/TrustedCompanies.jsx";
import CustomBreadcrumb from "@/components/CustomBreadcrumb.jsx";
import InstructorDisplayInfo from "../instructor/_component/InstructorDisplayInfo.jsx";
import AboutUs from "./_components/AboutUs.jsx";
import OurMission from "./_components/OurMission.jsx";
import OurGallery from "./_components/OurGallery.jsx";
import Testimonial from "./_components/Testimonial.jsx";

function AboutPage() {
  return (
    <div>
      <CustomBreadcrumb title={"About"} />

      <div className="px-2 py-2 sm:px-8 md:px-32 xl:px-40 2xl:px-72  " >
        <AboutUs />
        <div className="mt-0">
        {/* <TrustedCompanies smHeading={"We just keep going with "} /> */}
        </div>
        {/* <InstructorDisplayInfo color={"bg-white"} /> */}
      </div>
      <div className="bg-primary-100">
        <OurMission />
      </div>
      <OurGallery/>
      <Testimonial/>
    </div>
  );
}

export default AboutPage;
