"use client";

import { useState } from "react";
import AccountSettings from "./AccountSettings";
import Notification from "./Notification";
import Password from "./Password";
import SocialProfile from "./SocialProfile";

function InstructorDetails() {
  const [instructorInfo, setInstructorInfo] = useState({});


  return (
    <div className="m-auto p-6 flex flex-col gap-6">
      <AccountSettings />
      <SocialProfile setInstructorInfo={setInstructorInfo} />
      <div className="grid grid-cols-2 gap-6 mt-6">
        <Notification setInstructorInfo={setInstructorInfo} />
        <Password setInstructorInfo={setInstructorInfo} />
      </div>
    </div>
  );
}

export default InstructorDetails;
