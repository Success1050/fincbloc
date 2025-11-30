// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "About",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Notice", href: "/privacy" },
        { label: "Risk Warning", href: "/risk" },
        {
          label: "FincBloc Wallet",
          href: "https://web3.fincbloc.com/support",
          badge: "NEW",
        },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Buy Crypto", href: "/buy-crypto" },
        { label: "Trading Bots", href: "/bots" },
        { label: "Copy Trading", href: "/copy-trading" },
      ],
    },

    {
      title: "Service",
      links: [
        { label: "Affiliates", href: "/affiliates" },
        { label: "Referral", href: "/referral" },
        { label: "Market Data", href: "/market-data" },
        { label: "Proof of Reserves", href: "/proof-of-reserves" },
        { label: "APIs", href: "/api" },
        { label: "VIP Program", href: "/vip" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-black px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {/* Logo and Copyright */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="mb-4 text-2xl font-bold text-white">FincBloc</h3>
            <p className="text-sm text-gray-400">© 2023-2025 FINCBLOC.COM</p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="mb-4 text-base font-semibold text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                      {link.badge && (
                        <span className="rounded bg-orange-500 px-2 py-0.5 text-xs font-semibold text-black">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
