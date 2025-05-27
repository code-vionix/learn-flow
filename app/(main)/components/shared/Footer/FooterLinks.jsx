export default function FooterLinks() {
  const footerData = [
    {
      title: "TOP 4 CATEGORY",
      links: [
        { label: "Development", href: "/categories/development" },
        { label: "Finance & Accounting", href: "/categories/finance" },
        { label: "Design", href: "/categories/design" },
        { label: "Business", href: "/categories/business" },
      ],
    },
    {
      title: "QUICK LINKS",
      links: [
        { label: "About", href: "/about" },
        { label: "Become Instructor", href: "/instructor" },
        { label: "Contact", href: "/contact" },
        { label: "Career", href: "/career" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "FAQs", href: "/FAQs" },
        { label: "Terms & Condition", href: "/terms" },
      ],
    },
  ];

  return (
    <>
      {footerData.map((section) => (
        <FooterSection key={section.title} title={section.title} links={section.links} />
      ))}
    </>
  );
}

function FooterSection({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold pb-4">{title}</h4>
      <ul className="text-gray-400 text-sm mt-2 space-y-1">
        {links.map((link) => (
          <FooterLink key={link.label} label={link.label} href={link.href} />
        ))}
      </ul>
    </div>
  );
}

function FooterLink({ label, href }) {
  return (
    <li className="group flex items-center cursor-pointer relative w-fit">
      <a
        href={href}
        className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-primary-500 after:transition-all after:duration-200 after:absolute after:left-0 after:bottom-0 group-hover:after:w-full"
      >
        {label}
      </a>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">
        →
      </span>
    </li>
  );
}
