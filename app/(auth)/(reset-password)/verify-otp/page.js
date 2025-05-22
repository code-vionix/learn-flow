import loginImage from "@/public/images/Illustrations (1).png";
import Image from "next/image";
import { OtpVerificationForm } from "./components/verify-otp_Form";

export default function VerifyOtp() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row ">
      {/* Left side  */}
      <div className="bg-[#EBEBFF] flex items-center justify-center w-2/5">
        <Image
          src={loginImage}
          alt="Illustration of person at computer desk"
          width={600}
          height={600}
          priority
          className="w-full h-auto max-w-md "
        />
      </div>

      {/* Right side - Form */}
      <OtpVerificationForm />
    </div>
  );
}
