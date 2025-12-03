"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import GoogleTranslate from "./GoogleTranslate";

interface SubMenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href?: string;
  icon?: string;
  submenu?: SubMenuItem[];
}

const NavHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { label: "About us", href: "/about" },
    {
      label: "Spot",
      submenu: [{ label: "Convert", href: "/convert" }],
    },
    {
      label: "Copy Trading",
      submenu: [
        { label: "Buy Crypto", href: "/buy-crypto" },
        { label: "Trading Bots", href: "/bots" },
        { label: "Copy Trading", href: "/copy-trading" },
      ],
    },
    {
      label: "More",
      submenu: [
        { label: "Affiliates programs", href: "/affiliates" },
        { label: "Referral", href: "/referral" },
      ],
    },
  ];

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <header className="bg-black text-white border-b border-gray-800 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-linear-to-r from-orange-500 to-yellow-500 rounded-lg p-1.5">
                <div className="w-5 h-5 bg-black rounded"></div>
              </div>
              <span className="text-xl font-bold">FincBloc</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 mx-8 grow">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="flex items-center space-x-1 text-sm hover:text-orange-500 transition-colors py-4">
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-gray-900 rounded-lg shadow-xl border border-gray-800 py-2 min-w-[200px]">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm hover:bg-gray-800 hover:text-orange-500 transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          {/* Right Side Actions */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Language Switcher */}
            <div className="min-w-[120px]">
              <GoogleTranslate />
            </div>

            {/* Auth Buttons */}
            <Link href="https://dash.fincbloc.com/login">
              <button className="hidden md:block px-5 py-2 text-sm hover:bg-gray-800 rounded-lg transition-colors font-medium">
                Log in
              </button>
            </Link>

            <Link href="https://dash.fincbloc.com/register">
              <button className="hidden md:block px-5 py-2 text-sm bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors font-medium shadow-lg shadow-orange-500/20">
                Sign up
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-black">
          <div className="px-4 py-4 space-y-1">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="flex items-center justify-between w-full px-4 py-3 text-sm hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeSubmenu === item.label && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-gray-400 hover:text-orange-500 hover:bg-gray-800 rounded-lg transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-sm hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile Language Switcher */}
            <div className="px-4 py-3">
              <GoogleTranslate />
            </div>

            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-2 border-t border-gray-800 mt-4">
              <Link href="https://dash.fincbloc.com/login">
                <button className="w-full px-4 py-3 text-sm hover:bg-gray-800 rounded-lg transition-colors text-left font-medium">
                  Log in
                </button>
              </Link>
              <Link href="https://dash.fincbloc.com/register">
                <button className="w-full px-4 py-3 text-sm bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors font-medium">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavHeader;
