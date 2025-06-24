import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ targetLink, className, logoStyle }) {
  return (
    <Link href={targetLink} className="contents">
      <h3 className={cn(`text-2xl text-white p-6 font-semibold flex items-center`, className)}>
        <span className="mr-2">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} className={logoStyle} />
        </span>
        LearnFlow
      </h3>
    </Link>
  );
};
