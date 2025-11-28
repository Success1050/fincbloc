"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

interface Trader {
  name: string;
  avatar: string;
  followers: string;
  totalFollowers: number;
  roi: string;
  roiValue: number;
  pnl: string;
  pnlUp: boolean;
  chartData: number[];
}

const CopyTradingCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const traders: Trader[] = [
    {
      name: "Ziutson Trader",
      avatar: "👹",
      followers: "202",
      totalFollowers: 500,
      roi: "2959.54%",
      roiValue: 2959.54,
      pnl: "15,937.25",
      pnlUp: true,
      chartData: [20, 25, 22, 30, 35, 40, 38, 45, 50, 55, 60, 70, 80],
    },
    {
      name: "WaveOpa X",
      avatar: "🌊",
      followers: "15",
      totalFollowers: 500,
      roi: "1081.74%",
      roiValue: 1081.74,
      pnl: "158.58",
      pnlUp: true,
      chartData: [20, 20, 20, 20, 22, 25, 40, 55, 70],
    },
    {
      name: "OMZ.....",
      avatar: "🐺",
      followers: "7",
      totalFollowers: 500,
      roi: "965.17%",
      roiValue: 965.17,
      pnl: "84.83",
      pnlUp: true,
      chartData: [20, 22, 21, 23, 25, 24, 26, 40, 55, 70, 72],
    },
    {
      name: "01x",
      avatar: "👤",
      followers: "10",
      totalFollowers: 500,
      roi: "923.82%",
      roiValue: 923.82,
      pnl: "41.81",
      pnlUp: true,
      chartData: [20, 22, 25, 30, 28, 35, 45, 60, 70, 65, 50, 45, 55],
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const renderChart = (data: number[]) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    const width = 240;
    const height = 80;
    const points = data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / range) * height;
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <svg width={width} height={height} className="w-full h-20">
        <polyline
          points={points}
          fill="none"
          stroke="rgb(34, 197, 94)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points={points}
          fill="url(#gradient)"
          opacity="0.2"
          stroke="none"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  return (
    <section className="bg-black text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Copy Trades. Easy. Smart
          </h2>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-900/90 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 -ml-5 backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {traders.map((trader, index) => (
              <div
                key={index}
                className="shrink-0 w-[280px] bg-linear-to from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
              >
                {/* Trader Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-linear-to from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl">
                    {trader.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{trader.name}</h3>
                    <p className="text-sm text-gray-500">
                      {trader.followers} / {trader.totalFollowers}
                    </p>
                  </div>
                </div>

                {/* ROI */}
                <div className="mb-2">
                  <p className="text-xs text-gray-500 mb-1">300 ROI</p>
                  <p className="text-3xl font-bold text-white">{trader.roi}</p>
                </div>

                {/* PnL */}
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-xs text-gray-500">PnL</span>
                  <span className="text-sm text-green-500 font-semibold">
                    {trader.pnl}
                  </span>
                  <TrendingUp className="w-3 h-3 text-green-500" />
                </div>

                {/* Chart */}
                <div className="mb-4 -mx-2">
                  {renderChart(trader.chartData)}
                </div>

                {/* Copy Button */}
                <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors">
                  Copy
                </button>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-900/90 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 -mr-5 backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CopyTradingCarousel;
