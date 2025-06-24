/* eslint-disable @next/next/no-img-element */
const companies = [
  {
    id: 1,
    name: "Netflix",
    imageUrl:
      "/images/Netflix.png",
  },
  {
    id: 2,
    name: "YouTube",
    imageUrl: "https://www.youtube.com/img/desktop/yt_1200.png",
  },
  {
    id: 3,
    name: "Google",
    imageUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    id: 4,
    name: "Lenovo",
    imageUrl:
      "/images/Lenovo.png",
  },
  {
    id: 5,
    name: "Slack",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  },
  {
    id: 6,
    name: "Verizon",
    imageUrl:
      "/images/Verizon.png",
  },
  {
    id: 7,
    name: "Lexmark",
    imageUrl:
      "/images/Lexmark.png",
  },
  {
    id: 8,
    name: "Microsoft",
    imageUrl:
      "/images/Microsoft.png",
  },
];

export default function TrustedCompanies({ smHeading = "" }) {
  return (
    <div className=" flex h-[384px]  mx-auto items-center justify-center gap-4 bg-white">
      <div className="w-2/6 text-center ">
        <h3 className="text-2xl font-semibold text-[#1D2026] leading-tight tracking-tight mb-4">
          {smHeading + "6.3k Trusted Companies"}
        </h3>
        <p className="text-sm text-[#6E7485] ">
          Nullam egestas tellus at enim ornare tristique. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 w-4/6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="w-[calc(25%-12px)] h-[100px] bg-white shadow-md flex items-center justify-center p-4"
          >
            <img
              src={company.imageUrl}
              alt={company.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
