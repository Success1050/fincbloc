import React from "react";

export default function FincBlocValues() {
  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* User-Focused Card */}
          <div className="relative bg-linear-to-br from-black to-[#221200] border border-neutral-800 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden">
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-10 md:mb-12">
                User-Focused
              </h2>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-white font-light">
                  Your security is our foundation.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white font-light">
                  Your needs guide our actions.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white font-light">
                  Your experience defines our quality.
                </p>
              </div>
            </div>

            {/* Image positioned at bottom right */}
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <img
                src="/29.png"
                alt="User focused illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Humility Card */}
          <div className="relative bg-linear-to-br from-[#221200] to-black border border-neutral-800 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden">
            {/* Image positioned at top right */}
            <div className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-16 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <img
                src="/30.png"
                alt="Humility illustration"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content positioned at bottom */}
            <div className="relative z-10 mt-48 sm:mt-56 md:mt-64 lg:mt-72">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-10 md:mb-12">
                Humility
              </h2>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-white font-light">
                  We seek feedback to grow.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white font-light">
                  We learn from the best.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white font-light">
                  We win as one team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
