import React from "react";

import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Teams from "./components/Teams";
import JoinTeam from "./components/JoinTeam";
import OurPerkBenefit from "./components/OurPerkBenefit";
import TrustedCompanies from "../components/home/TrustedCompanies";
import OurGallery from "../about/_components/OurGallery";
import OpenPosition from "./components/OpenPosition";

function CareerPage() {
  return (
    <div>
      <CustomBreadcrumb title="Career" />
      <Teams />
      <JoinTeam/>
      <OurPerkBenefit/>
      <OurGallery isButton ={false} />
      <TrustedCompanies smHeading={"We just keep going with "} />
      <OpenPosition/>
      
    </div>
  );
}

export default CareerPage;
