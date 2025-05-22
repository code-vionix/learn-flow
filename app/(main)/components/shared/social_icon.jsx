import whatsapp from "@/public/whatsapp.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function SocialIcon({ profile }) {
  return (
    <div className="flex gap-4 mt-4 self-end">
      <a
        target="_blank"
        href={profile?.facebook || "#"}
        className="p-3 bg-gray-100 hover:bg-primay-500"
      >
        <Facebook className="h-4 w-4 text-black" />
      </a>
      <a
        target="_blank"
        href={profile?.twitter || "#"}
        className="p-3 bg-gray-100 hover:bg-primary-500"
      >
        <Twitter className="h-4 w-4 text-black" />
      </a>
      <a
        target="_blank"
        href={profile?.instagram || "#"}
        className="p-3 bg-gray-100 hover:bg-primary-500"
      >
        <Instagram className="h-4 w-4 text-black" />
      </a>
      <a
        target="_blank"
        href={profile?.youtube || "#"}
        className="p-3 bg-gray-100 hover:bg-primary-500"
      >
        <Youtube className="h-4 w-4 text-black" />
      </a>
      <a
        target="_blank"
        href={profile?.whatsapp || "#"}
        className="p-3 bg-gray-100 hover:bg-primary-500"
      >
        <Image
          src={whatsapp}
          alt="WhatsApp"
          width={16} // Set width for the image
          height={16} // Set height for the image
          className="object-contain"
        />
      </a>
    </div>
  );
}
