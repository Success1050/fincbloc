import React from "react";

export default function FincBlocStats() {
  const stats = [
    {
      value: "300+",
      label: "Top Ecosystem Partners",
    },
    {
      value: "100,000+",
      label: "Community Members",
    },
    {
      value: "150+",
      label: "Official Partners",
    },
  ];

  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Stat Value */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6">
                {stat.value}
              </h2>

              {/* Stat Label */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
