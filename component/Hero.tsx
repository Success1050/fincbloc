"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
              FincBloc - Where Whales
              <br />
              are Made
            </h1>

            {/* Email Signup Form */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-2xl">
              <input
                type="text"
                placeholder="Email / Phone"
                className="flex-1 px-6 py-4 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-white placeholder-gray-500"
              />
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 whitespace-nowrap">
                <span className="text-xl">🎁</span>
                <span>Sign up</span>
              </button>
            </div>

            {/* Social Login and App Download */}
            <div className="flex flex-wrap items-start gap-8 md:gap-12">
              <div>
                <p className="text-gray-500 text-sm mb-3">Or Continue With</p>
                <div className="flex gap-3">
                  {/* Google */}
                  <button className="w-12 h-12 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors border border-gray-800">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </button>

                  {/* Apple */}
                  <button className="w-12 h-12 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors border border-gray-800">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-3">Download App</p>
                <button className="w-12 h-12 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors border border-gray-800">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual - Abstract Wave/Whale */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Main glowing effect */}
              <div className="absolute top-1/4 left-1/4 w-3/4 h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-orange-600/20 to-transparent rounded-full blur-3xl"></div>
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
