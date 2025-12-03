"use client";

import React from "react";
import { Shield, Check } from "lucide-react";

const SecuritySection: React.FC = () => {
  const partners = [
    { name: "Fireblocks", icon: "🔺" },
    { name: "Chainalysis", icon: "🔗" },
    { name: "ISO 27001", icon: "✓", isBadge: true },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="text-orange-500">FincBloc</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-leading security and trusted partnerships
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Card - Security Info */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-10">
            {/* Partners Row */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`${
                    partner.isBadge
                      ? "bg-blue-900/30 border-2 border-blue-500 w-20 h-20 rounded-full flex items-center justify-center"
                      : "bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-full"
                  }`}
                >
                  {partner.isBadge ? (
                    <div className="text-center">
                      <div className="text-blue-400 text-xs font-semibold">
                        ISO
                      </div>
                      <div className="text-white text-xs font-bold">27001</div>
                      <div className="text-blue-400 text-[8px]">Certified</div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-black font-semibold">
                      <span className="text-lg">{partner.icon}</span>
                      <span>{partner.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Security Message */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                YOUR <span className="text-gray-400">ASSETS</span>, YOUR
                <br />
                <span className="text-gray-400">PRIVACY PROTECTED</span>
                <br />
                BY <span className="text-gray-400">MULTI-</span>LAYER
                <br />
                SECURITY
              </h3>

              <p className="text-orange-500 text-lg font-medium">
                Top-tier partners. Top-level asset protection.
              </p>

              {/* Key Chain Illustration */}
              <div className="relative mt-12 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Key ring */}
                  <div className="w-16 h-20 border-4 border-gray-600 rounded-full relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-4 border-gray-600 rounded-full bg-black"></div>
                  </div>

                  {/* Keys hanging */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                    {/* Key 1 */}
                    <div className="w-6 h-16 bg-gradient-to-b from-orange-600 to-orange-800 rounded-sm relative">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
                      <div className="absolute bottom-1 left-0 right-0 h-3 bg-orange-900"></div>
                    </div>

                    {/* FincBloc Tag */}
                    <div className="w-12 h-16 bg-gradient-to-br from-orange-500 to-orange-700 transform rotate-12 flex items-center justify-center text-black font-bold text-xs rounded-sm shadow-lg">
                      <div className="text-center">
                        <Shield className="w-5 h-5 mx-auto mb-1" />
                        <div className="text-[8px]">FincBloc</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Lock & Shield Visual */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-10 flex items-center justify-center relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent"></div>

            {/* Main Lock & Shield */}
            <div className="relative z-10">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Shield background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-56 bg-gradient-to-br from-gray-800 to-black rounded-t-full border-4 border-gray-700 relative">
                    {/* Shield details */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-orange-900/30 to-transparent rounded-full"></div>
                  </div>
                </div>

                {/* Lock */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    {/* Lock body */}
                    <div className="w-32 h-24 bg-gradient-to-br from-gray-900 to-black border-4 border-orange-500 rounded-xl flex items-center justify-center shadow-2xl">
                      {/* Fingerprint icon */}
                      <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-orange-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 10v4M12 17h.01M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Lock shackle */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-16 border-t-4 border-l-4 border-r-4 border-orange-500 rounded-t-full"></div>
                  </div>
                </div>

                {/* Check mark ribbon */}
                <div className="absolute top-8 right-4 w-20 h-24 bg-gradient-to-br from-orange-500 to-orange-600 transform rotate-12 rounded-lg flex items-center justify-center shadow-xl z-30">
                  <Check className="w-12 h-12 text-white stroke-[3]" />
                </div>

                {/* Decorative orange ribbon wave */}
                <div className="absolute bottom-0 right-0 w-40 h-2 bg-gradient-to-r from-transparent via-orange-500 to-orange-600 transform -rotate-12 blur-sm"></div>
                <div className="absolute bottom-4 right-8 w-32 h-3 bg-gradient-to-r from-orange-500 to-orange-600 transform rotate-6 rounded-full"></div>
              </div>
            </div>

            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
