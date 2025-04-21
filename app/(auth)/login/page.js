import loginImage from "@/public/images/Illustrations (1).png";
import Image from "next/image";
import LoginForm from "../_components/LoginForm";
import SocialLogin from "../_components/SocialLogin";

export default function LoginPage() {
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
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Sign in to your account
          </h1>

          <div className="space-y-6">
            <LoginForm />
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
