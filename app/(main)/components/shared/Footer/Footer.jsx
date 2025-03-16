import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterDownload from "./FooterDownload";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between mt-12">
          <FooterBrand />
          <div className="w-4/6 flex justify-between">
            <FooterLinks />
            <FooterDownload />
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
