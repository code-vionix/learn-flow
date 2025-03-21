import { Quote } from "lucide-react";
import React from "react";
import Link from "next/link";


function Testimonial() {

  const users =[
    {
      id:'1',
      name:"Sundar Pichai",
      employer:"Chief Chairman of ",
      company:"Google",
      message:" Eduguard fit us like a glove. Their team curates fresh, up-to-datecourses from their marketplace and makes them available to customers."
    },
    {
      id:'2',
      name:"Satya Nadella",
      employer:"CEO of ",
      company:"Microsoft",
      message:"Edugaurd responds to the needs of the business in an agile and global manner. It’s truly the best solution for our employees and their careers."
    },
    {
      id:'3',
      name:"Ted Sarandos",
      employer:"Chief Executive Officer of ",
      company:"Netflix",
      message:"In total, it was a big success, I would get emails about what a fantastic resource it was."
    }
  ]

  return (
    <div className="w-full justify-center items-center m-auto mx-auto py-10 flex  gap-6    ">
     {
      users.map(user=>{
       return (
          <div key={user.id} className="flex flex-col items-center justify-center gap-8">
          <div className="w-[424px]  bg-gray-50 relative  ">
            <div className="p-6 text-center ">
              <div className="w-full h-12">
                {" "}
                <Quote className="rotate-180 text-primary-500 " />
              </div>
              <span className="text-base font-normal text-gray-900 text-center">
               {user.message}
              </span>
              <div className="w-full mb-0 h-12 flex items-end justify-end">
                <Quote className="text-primary-500 " />
              </div>
            </div>
            <div className="h-6 w-6 bg-gray-50 rotate-45 absolute bottom-[-12px] left-1/2"></div>
          </div>
          <div className="flex flex-col items-center">
            <h1>{user.name}</h1>
            <p>
              {user.employer} <Link className="text-blue-600 font-medium" href={" #"}> {user.company}</Link>
            </p>
          </div>
        </div>
        )
      })
     }

    </div>
  );
}

export default Testimonial;
