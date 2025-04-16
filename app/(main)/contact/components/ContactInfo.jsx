import React from "react";

function ContactInfo() {
  return (
    <div className="text-center md:text-start md:w-[33.5rem]  ">
      <h3 className="text-lg lg:text-2xl font-normal text-gray-900 mb-7">
        Will you be in Los Angeles or any other branches any time soon? Stop by
        the office! We&apos;d love to meet.
      </h3>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between text-justify gap-6 border-b-2 pb-4">
          <h2 className="text-base font-medium text-primary-500 ">ADDRESS</h2>
          <p className="text-base font-normal text-gray-900 text-center ">
            1702 Olympic Boulevard <br /> Santa Monica, CA 90404
          </p>
        </div>
        <div className="flex justify-between text-justify gap-8 border-b-2 pb-4">
          <h2 className="text-base font-medium text-primary-500 ">
            PHONE NUMBER
          </h2>
          <p className="text-base font-normal text-gray-900 text-center ">
            <span>(480) 555-0103</span> <br />
            <span>(219) 555-0114</span>
          </p>
        </div>
        <div className="flex justify-between text-justify gap-8 border-b-2 pb-4">
          <h2 className="text-base font-medium text-primary-500 ">
            EMAIL ADDRESS
          </h2>
          <p className="text-base font-normal text-gray-900 text-center ">
            <span>help.eduguard@gmail.com</span> <br />
            <span>career.eduguard@gamil.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
