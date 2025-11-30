import Link from "next/link";
import React from "react";

export default function FincBlocCopyTrading() {
  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8">
              Copy Trading
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12">
              Meet and Copy the Top Traders.
            </p>

            {/* Log in Button */}
            <Link href={"https://dash.fincbloc.com/login"}>
              <button className="px-8 sm:px-10 py-4 bg-neutral-800 hover:bg-neutral-700 text-white text-lg font-semibold rounded-lg transition-colors flex items-center gap-3 group">
                Log in
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Beginner's Guide Badge */}
              <div className="absolute top-0 right-0 z-10 bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span className="text-white text-sm font-medium">
                  Beginner's Guide
                </span>
              </div>

              {/* Main Illustration */}
              <img
                src="/copyTradingImages/56.png"
                alt="Copy Trading Illustration"
                className="w-full max-w-md lg:max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
