import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import React from "react";
import Contact from "./components/Contact";
import Breanches from "./components/Breanches";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import GoogleMapComponent from "./components/GoogleMapComponent";

function ContactPage() {
  return (
    <>
      <CustomBreadcrumb title="Contact" />
      <Contact/>
      <Breanches/>
      <div className="w-full px-2 py-5 sm:px-8 md:px-16 xl:px-40 2xl:px-72 md:py-20 bg-gray-50">
        <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 text-center">Contact Us</h1>
        <div className="flex-col  px-2 flex lg:flex-row justify-center items-center md:gap-32 mt-5 lg:mt-10">
          <ContactInfo/>
          <ContactForm/>
        </div>
        
      </div>
      <div>
        <GoogleMapComponent/>
      </div>
    </>
  );
}

export default ContactPage;
