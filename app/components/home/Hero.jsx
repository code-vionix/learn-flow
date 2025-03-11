import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-stone-100 overflow-hidden mx-auto">
      <div className="relative z-10">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="sm:text-center lg:text-left lg:w-1/2 pl-36">
              <h1 className="text-3xl font-bold text-gray-700 sm:text-7xl">
                Learn with expert
                <span className="block text-primary-500">anytime anywhere</span>
              </h1>
              <p className="mt-3 text-sm text-gray-600 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Our mission is to help people find the best online courses and
                learn from experts anytime, anywhere.
              </p>
              <div className="mt-6 sm:mt-8">
                <Button className="bg-primary-500 text-white px-8 py-3 text-sm  hover:bg-primary-600 transition">
                  Create Account
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 hero-image relative">
              <Image
                width={1400}
                height={1000}
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Students learning"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
