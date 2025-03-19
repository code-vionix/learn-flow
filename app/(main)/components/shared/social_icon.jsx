import {
    Facebook,
    Globe,
    Instagram,
    Star,
    Twitter,
    Users,
    Youtube,
} from "lucide-react";
import Image from "next/image";
import whatsapp from "@/public/whatsapp.png";

export default function SocialIcon() {
    return (
        <div className="flex gap-4 mt-4 self-end">
            <a href="#" className="p-3 bg-gray-100 hover:bg-primay-500">
                <Facebook className="h-4 w-4 text-black" />
            </a>
            <a href="#" className="p-3 bg-gray-100 hover:bg-primary-500">
                <Twitter className="h-4 w-4 text-black" />
            </a>
            <a href="#" className="p-3 bg-gray-100 hover:bg-primary-500">
                <Instagram className="h-4 w-4 text-black" />
            </a>
            <a href="#" className="p-3 bg-gray-100 hover:bg-primary-500">
                <Youtube className="h-4 w-4 text-black" />
            </a>
            <a href="https://wa.me/" className="p-3 bg-gray-100 hover:bg-primary-500">
                <Image
                    src={whatsapp}
                    alt="WhatsApp"
                    width={16}  // Set width for the image
                    height={16} // Set height for the image
                    className="object-contain"
                />
            </a>
        </div>
    );
}
