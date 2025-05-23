import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/dashboard">
      <h3 className="text-2xl text-white p-6 font-semibold flex items-center">
        <span className="mr-2">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        </span>
        E-tutor
      </h3>
    </Link>
  );
};

export default Logo;
