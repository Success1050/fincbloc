import React from "react";

export default function FincBlocFeatures() {
  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 sm:mb-16 md:mb-20">
          What Sets FincBloc Apart?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Card 1 - Fireblocks */}
            <div className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 min-h-[280px] sm:min-h-[320px] flex flex-col">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
                Powered by Fireblocks, Chainalysia
                <br />
                and ISO27001 Certified
              </h3>

              <div className="flex-1 flex items-center justify-center mt-4">
                <img
                  src="/32.png"
                  alt="Security keys"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
                />
              </div>
            </div>

            {/* Card 2 - Top 3 Exchanges */}
            <div className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 min-h-[280px] sm:min-h-[320px] flex flex-col">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
                Among Top 3 Exchanges in Mobile
                <br />
                App Efficiency
              </h3>

              <div className="flex-1 flex items-center justify-center mt-4">
                <img
                  src="31.png"
                  alt="Podium ranking"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Card 3 - Seamless Solutions */}
            <div className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 min-h-[200px] sm:min-h-[220px] flex flex-col">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
                Seamless, Flexible Solutions
              </h3>

              <div className="flex-1 flex items-center justify-end">
                <img
                  src="/33.png"
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                />
              </div>
            </div>

            {/* Card 4 - TOKEN2049 */}
            <div className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 min-h-[280px] sm:min-h-[320px] flex flex-col">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
                Title Sponsor of TOKEN2049
              </h3>

              <div className="flex-1 flex items-center justify-center mt-4">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                    <span className="text-white">FincBloc</span>
                    <span className="text-gray-400"> | TOKEN</span>
                    <span className="text-white">2049</span>
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base md:text-lg tracking-widest">
                    TITLE SPONSOR
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Two Small Cards */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Card 5 - External Broker Partners */}
              <div className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-6 sm:p-8 md:p-10 min-h-[200px] sm:min-h-[220px] flex flex-col">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
                  30+ External
                  <br />
                  Broker
                  <br />
                  Partners
                </h3>

                <div className="flex-1 flex items-end justify-center">
                  <img
                    src="/34.png"
                    alt="Broker partners"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain opacity-70"
                  />
                </div>
              </div>

              {/* Card 6 - Low-Latency Performance */}
              <div className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-6 sm:p-8 md:p-10 min-h-[200px] sm:min-h-[220px] flex flex-col">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Low-Latency
                  <br />
                  Performance
                </h3>

                <div className="flex-1 flex items-end justify-center">
                  <img
                    src="/35.png"
                    alt="Performance"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
