/* eslint-disable @next/next/no-img-element */
const companies = [
  {
    id: 1,
    name: "Netflix",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netflix/netflix-original.svg",
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
      "https://logos-world.net/wp-content/uploads/2020/07/Lenovo-Logo.png",
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
      "https://logos-world.net/wp-content/uploads/2020/09/Verizon-Logo.png",
  },
  {
    id: 7,
    name: "Lexmark",
    imageUrl:
      "https://logos-world.net/wp-content/uploads/2021/08/Lexmark-Logo.png",
  },
  {
    id: 8,
    name: "Microsoft",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
  },
];

export default function TrustedCompanies() {
  return (
    <section className="w-full py-20 px-4 md:px-20 lg:px-[300px] bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-24">
        <div className="max-w-[424px] text-center lg:text-left">
          <h3 className="text-2xl font-semibold text-[#1D2026] leading-tight tracking-tight mb-4">
            6.3k Trusted Companies
          </h3>
          <p className="text-sm text-[#6E7485] max-w-[312px]">
            Nullam egestas tellus at enim ornare tristique. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="w-[160px] h-[80px] bg-white shadow-md flex items-center justify-center p-4 rounded-lg"
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
    </section>
  );
}
