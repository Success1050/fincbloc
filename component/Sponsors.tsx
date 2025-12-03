// components/InfiniteLogoScroll.tsx
"use client";

import React from "react";
import Image from "next/image";

interface Logo {
  id: number;
  name: string;
  src: string;
}

const InfiniteLogoScroll: React.FC = () => {
  const logos: Logo[] = [
    { id: 1, name: "Fireblocks", src: "/10.png" },
    { id: 2, name: "Chainalysis", src: "/11.png" },
    { id: 3, name: "TradingView", src: "/12.png" },
    { id: 4, name: "VerifyVASP", src: "/13.png" },
    { id: 5, name: "Company 5", src: "/14.png" },
    { id: 6, name: "Company 6", src: "/15.png" },
    { id: 7, name: "Company 7", src: "/16.png" },
    { id: 8, name: "Company 8", src: "/17.png" },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#0f0f0f] py-8 md:py-12">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-black to-transparent md:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-black to-transparent md:w-32" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex shrink-0 items-center justify-around gap-12 px-6 md:gap-16 md:px-8">
            {logos.map((logo) => (
              <div
                key={`first-${logo.id}`}
                className="relative flex h-12 w-40 shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 md:h-16 md:w-48"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 items-center justify-around gap-12 px-6 md:gap-16 md:px-8">
            {logos.map((logo) => (
              <div
                key={`second-${logo.id}`}
                className="relative flex h-12 w-40 shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 md:h-16 md:w-48"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 5s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default InfiniteLogoScroll;
