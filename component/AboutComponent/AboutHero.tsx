import React from 'react';

export default function FincBlocHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/video/about-us.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-sm flex items-center justify-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-orange-500 rounded-sm transform -rotate-12" />
            </div>
            <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              FincBloc
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-10 leading-tight">
          Welcome to FincBloc
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-4">
          Experience next-gen trading, earn with power strategies, and stay in full control of your crypto.
        </p>

        {/* Optional CTA Button */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}