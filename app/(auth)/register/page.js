import loginImage from "@/public/images/Illustrations.png";
import Image from "next/image";
import SignUpForm from "../_components/SignUpForm";
import SocialLogin from "../_components/SocialLogin";

function RegistationPage() {
  return (
    <div className="flex h-full">
      <div className="bg-[#EBEBFF] flex items-center justify-center w-2/5">
        <Image
          src={loginImage}
          alt="Illustration of person at computer desk"
          width={600}
          height={600}
          priority
          className="w-full h-auto max-w-md"
        />
      </div>
      <div className="flex items-center justify-center w-3/5 px-16">
        <div className="w-full max-w-xl">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Sign in to your account
          </h1>
          <div className="space-y-6">
            <SignUpForm />
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistationPage;
