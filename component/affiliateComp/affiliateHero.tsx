import Link from "next/link";
import React from "react";

const BloFinAffiliate: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* linear Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-orange-600/30 to-yellow-600/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-green-600/20 to-emerald-500/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/4"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Become a FincBloc Affiliate
            </h1>

            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Receive up to 50% commission on the trading fee by simply casting
              your influence. Join the FincBloc Affiliate community now.
            </p>
            <Link href={"https://dash.fincbloc.com/login"}>
              <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 text-base sm:text-lg">
                Become an Affiliate
              </button>
            </Link>
          </div>

          {/* Right Content - Affiliate Card Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Glowing Base Platform */}
              <div className="relative">
                {/* Top Platform */}
                <div className="relative mx-auto w-64 sm:w-72 lg:w-80">
                  {/* Card */}
                  <div className="relative bg-linear-to-br from-zinc-800 to-zinc-900 border-4 border-orange-500 rounded-2xl p-8 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    {/* Avatar */}
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-orange-500">
                        <div className="w-16 h-16 bg-linear-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                          <div className="w-8 h-3 bg-white rounded-full mb-2"></div>
                        </div>
                      </div>
                    </div>

                    {/* Affiliate Badge */}
                    <div className="bg-orange-500 text-white font-bold text-center py-2 px-4 rounded-lg mb-4">
                      AFFILIATE
                    </div>

                    {/* Star Rating */}
                    <div className="flex justify-center gap-2">
                      <div className="w-4 h-4 text-green-400">★</div>
                    </div>
                  </div>

                  {/* Support Beams */}
                  <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-full">
                    <div className="relative h-32">
                      {/* Left Beam */}
                      <div className="absolute left-8 top-0 w-2 h-full bg-linear-to-b from-green-400 to-transparent"></div>
                      {/* Right Beam */}
                      <div className="absolute right-8 top-0 w-2 h-full bg-linear-to-b from-green-400 to-transparent"></div>

                      {/* Corner Supports */}
                      <div className="absolute left-4 bottom-0 w-12 h-12 border-2 border-zinc-600 bg-zinc-800"></div>
                      <div className="absolute right-4 bottom-0 w-12 h-12 border-2 border-zinc-600 bg-zinc-800"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-12 h-12 border-2 border-zinc-600 bg-zinc-800"></div>
                    </div>
                  </div>

                  {/* Base Platform */}
                  <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-zinc-700 border-2 border-zinc-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent"></div>
    </div>
  );
};

export default BloFinAffiliate;
