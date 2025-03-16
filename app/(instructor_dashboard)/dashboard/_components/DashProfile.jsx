import Image from "next/image";
import React from "react";

const DashProfile = () => {
  return (
    <div>
      <Image
        src="/profile.jpg"
        alt="Logo"
        width={240}
        height={240}
        className="object-cover rounded-full w-12 h-12"
      />
    </div>
  );
};

export default DashProfile;
