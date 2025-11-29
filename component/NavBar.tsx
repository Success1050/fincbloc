"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X, Bell, Download, Globe } from "lucide-react";
import Link from "next/link";

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
    // {
    //   label: "Buy Crypto",
    //   submenu: [
    //     { label: "Credit/Debit Card", href: "#" },
    //     { label: "P2P Trading", href: "#" },
    //     { label: "Bank Transfer", href: "#" },
    //     { label: "Third Party", href: "#" },
    //   ],
    // },
    { label: "Markets", href: "#" },
    {
      label: "Spot",
      submenu: [
        { label: "Spot Trading", href: "#" },
        { label: "Margin Trading", href: "#" },
        { label: "Convert", href: "#" },
      ],
    },
    {
      label: "🔥 Futures",
      icon: "🔥",
      submenu: [
        { label: "USDT-M Futures", href: "#" },
        { label: "Coin-M Futures", href: "#" },
        { label: "Copy Trading", href: "#" },
        { label: "Trading Bots", href: "#" },
      ],
    },
    {
      label: "Copy Trading",
      submenu: [
        { label: "Explore Traders", href: "#" },
        { label: "Become a Trader", href: "#" },
        { label: "Leaderboard", href: "#" },
      ],
    },
    { label: "Earn", href: "#" },
    { label: "Rewards Hub", href: "#" },
    {
      label: "More",
      submenu: [
        { label: "API", href: "#" },
        { label: "Affiliate Program", href: "#" },
        { label: "Institutional", href: "#" },
        { label: "Learn", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
  ];

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-linear-to-r from-orange-500 to-yellow-500 rounded-lg p-1.5">
                <div className="w-5 h-5 bg-black rounded"></div>
              </div>
              <span className="text-xl font-bold">FincBloc</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
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
          <div className="flex items-center space-x-3">
            <button className="hidden md:flex p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="hidden md:flex p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Download className="w-5 h-5" />
            </button>
            <button className="hidden md:flex p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Globe className="w-5 h-5" />
            </button>
            <button className="hidden md:block px-4 py-2 text-sm hover:bg-gray-800 rounded-lg transition-colors">
              Log in
            </button>
            <button className="hidden md:block px-4 py-2 text-sm bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors font-medium">
              Sign up
            </button>

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
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
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

            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-2 border-t border-gray-800 mt-4">
              <button className="w-full px-4 py-3 text-sm hover:bg-gray-800 rounded-lg transition-colors text-left">
                Log in
              </button>
              <button className="w-full px-4 py-3 text-sm bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors font-medium">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavHeader;
