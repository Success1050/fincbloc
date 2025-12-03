"use client";

import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
              FincBloc - Where Small Trades
              <br />
              Grow Giant
            </h1>

            {/* Email Signup Form */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-2xl">
              <input
                type="text"
                placeholder="Email / Phone"
                className="flex-1 px-6 py-4 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-white placeholder-gray-500"
              />

              <Link href={"https://dash.fincbloc.com/login"}>
                <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 whitespace-nowrap">
                  <span className="text-xl">🎁</span>
                  <span>Sign up</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Visual - Abstract Wave/Whale */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Main glowing effect */}
              <div className="absolute top-1/4 left-1/4 w-3/4 h-96">
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/30 via-orange-600/20 to-transparent rounded-full blur-3xl"></div>
              </div>

              {/* Abstract wave shapes */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Upper wave */}
                <path
                  d="M100 250 Q 200 150, 350 200 Q 450 230, 550 180"
                  stroke="url(#gradient1)"
                  strokeWidth="4"
                  fill="none"
                  opacity="0.7"
                  strokeLinecap="round"
                />

                {/* Middle wave */}
                <path
                  d="M50 300 Q 180 200, 320 260 Q 460 300, 580 240"
                  stroke="url(#gradient2)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.5"
                  strokeLinecap="round"
                />

                {/* Lower subtle wave */}
                <path
                  d="M80 350 Q 200 280, 340 320 Q 480 350, 600 300"
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                  strokeLinecap="round"
                />

                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                    <stop offset="40%" stopColor="#f97316" stopOpacity="1" />
                    <stop offset="100%" stopColor="#fb923c" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#fb923c" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#fdba74" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient
                    id="gradient3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ea580c" stopOpacity="0" />
                    <stop offset="50%" stopColor="#fb923c" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Animated whale character */}
              <div className="absolute bottom-20 right-24 text-7xl animate-float drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                🐋
              </div>

              {/* Additional glow effect around whale */}
              <div className="absolute bottom-20 right-24 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-900/50 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(-5deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
