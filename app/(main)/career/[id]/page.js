import React from "react";
import JobHeading from "./components/JobHeading";
import JobInfo from "./components/JobInfo";
import JobReqermentAndBenefit from "./components/JobRequirementAndBenefit";
import JobNature from "./components/JobNature";
import Button from "./components/Button";
import ApplyButton from "./components/Button";

function page() {
  const positions = [
    {
      id: 1,
      jobTitle: "Product Designer (UI/UX Designer)",
      location: "Tokyo, Japan",
      type: "Full Time",
      vacancy: "01 Vacancy",
      deadline: "30 June, 2021",
      address: "1702 Olympic Boulevard Santa Monica, CA 90404",
      contact: ["career.eduguard@gamil.com", "(219) 555-0114"],
      about:
        "Sed lacinia accumsan eros in pretium. Praesent vitae eros condimentum, elementum nisl quis, vestibulum nulla. Aenean quis nibh ullamcorper, suscipit magna et, pretium nisi. Sed sed egestas mi. Donec viverra efficitur ipsum, ut cursus risus fringilla id. ",
      requirements: [
        "Vestibulum hendrerit facilisis libero, pretium condimentum ipsum vulputate at.",
        "Quisque varius auctor augue id blandit. ",
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "Ut ut magna condimentum, pharetra est nec, lacinia nulla.",
        "Aliquam tempus mollis sem eget ullamcorper. ",
        "Donec non orci eget lorem laoreet ullamcorper et et magna. ",
        "Donec non orci eget lorem laoreet ullamcorper et et magna. ",
        "Nam bibendum tristique nibh id tristique.",
        "Vestibulum lorem libero, rutrum vitae tincidunt quis, sodales quis neque.",
      ],
      benefits: [
        "Nulla facilisi. Integer non euismod neque. ",
        "Suspendisse a ligula posuere, convallis dui et, commodo nisl.",
        "Suspendisse a ligula posuere, convallis dui et, commodo nisl aliquam iaculis tristique nulla. ",
        "Donec dolor nunc, ultrices ac imperdiet eu, dignissim ut purus",
        "Mauris et tellus in mauris commodo varius nec sit amet urna.",
        "Integer bibendum, tellus luctus laoreet pulvinar.",
        "Donec dolor nunc, ultrices ac imperdiet eu, dignissim ut purus. Aliquam erat volutpat. ",
      ],
      salary: "Based on Skills [20K - 40K (USD) and Other Benefits",

      officeHours:
        " 9 AM to 5 PM (Sat-Thurs) 6 days (We will consider remote as well)",
      jobLocation: " 1702 Olympic Boulevard, Santa Monica, CA 90404",
    },
  ];
  return (
    <div>
      <JobHeading positions={positions} />
      <div className="flex flex-col items-center justify-center gap-5 px-2 py-5 sm:px-8 md:px-16 lg:px-32  xl:px-60 2xl:px-72 lg:gap-10  lg:py-10">
        <JobInfo
          heading={"Who we are"}
          text={
            "Sed lacinia accumsan eros in pretium. Praesent vitae eros condimentum, elementum nisl quis, vestibulum nulla. Aenean quis nibh ullamcorper, suscipit magna et, pretium nisi. Sed sed egestas mi. Donec viverra efficitur ipsum, ut cursus risus fringilla id. "
          }
        />
        <JobReqermentAndBenefit
          heading={"Requerments"}
          requirementAndBenefit={positions.requirements}
        />
        <JobReqermentAndBenefit
          isBenefit={true}
          heading={"Benefits"}
          requirementAndBenefit={positions.requirements}
        />
        <JobInfo
          heading={"Salary"}
          text={"Based on Skills [20K - 40K (USD) and Other Benefits"}
        />
        <JobNature
          jobLocation={"1702 Olympic Boulevard, Santa Monica, CA 90404"}
          jobType={"Full Time"}
          officeHours={
            " 9 AM to 5 PM (Sat-Thurs) 6 days (We will consider remote as well)"
          }
          heading={"Job Nature"}
        />

        <ApplyButton />
      </div>
    </div>
  );
}

export default page;
