import Link from "next/link";
import React from "react";

export default function FincBlocTradingBots() {
  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20 md:mb-24">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8">
              FincBloc Trading Bots
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12">
              Access smart bots and maximize your earnings with FincBloc trading
              bots.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"https://dash.fincbloc.com/register"}>
                <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg transition-colors">
                  Trade Now
                </button>
              </Link>
              <Link href={"https://dash.fincbloc.com/register"}>
                <button className="px-8 py-4 bg-transparent border-2 border-white hover:border-orange-500 text-white hover:text-orange-500 text-lg font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
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
                  Tutorial
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/botImages/54.png"
              alt="Trading Bot Illustration"
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>

        {/* Match With Trading Bot Section */}
        <div className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Left Side */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="shrink-0">
                <img
                  src="/botImages/55.png"
                  alt="Bot Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Match With the Right Trading Bot
              </h2>
            </div>

            {/* Right Side - Dropdown Button */}

            <Link href={"https://dash.fincbloc.com/register"}>
              <button className="shrink-0 px-6 py-3 bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-base sm:text-lg font-semibold rounded-lg transition-colors flex items-center gap-2">
                Try Easy Bot
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
