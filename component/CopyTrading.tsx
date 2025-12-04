"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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
        <motion.polyline
          points={points}
          fill="none"
          stroke="rgb(34, 197, 94)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
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
    <section className="bg-[#0f0f0f] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Copy Trades. Easy. Smart
          </h2>
          <motion.button
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Carousel */}
        <div className="relative group">
          {/* Left Arrow */}
          <motion.button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-900/90 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 -ml-5 backdrop-blur-sm"
            aria-label="Scroll left"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Scrollable Container */}
          <motion.div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {traders.map((trader, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="shrink-0 w-[280px] bg-linear-to from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
              >
                {/* Trader Info */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-linear-to from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {trader.avatar}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{trader.name}</h3>
                    <p className="text-sm text-gray-500">
                      {trader.followers} / {trader.totalFollowers}
                    </p>
                  </div>
                </div>

                {/* ROI */}
                <motion.div
                  className="mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-xs text-gray-500 mb-1">300 ROI</p>
                  <motion.p
                    className="text-3xl font-bold text-white"
                    whileHover={{ scale: 1.05, color: "#f97316" }}
                    transition={{ duration: 0.2 }}
                  >
                    {trader.roi}
                  </motion.p>
                </motion.div>

                {/* PnL */}
                <motion.div
                  className="flex items-center gap-1 mb-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-xs text-gray-500">PnL</span>
                  <span className="text-sm text-green-500 font-semibold">
                    {trader.pnl}
                  </span>
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <TrendingUp className="w-3 h-3 text-green-500" />
                  </motion.div>
                </motion.div>

                {/* Chart */}
                <div className="mb-4 -mx-2">
                  {renderChart(trader.chartData)}
                </div>

                {/* Copy Button */}
                <Link href={"https://dash.fincbloc.com/register"}>
                  <motion.button
                    className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#f97316",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Copy
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Arrow */}
          <motion.button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-900/90 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 -mr-5 backdrop-blur-sm"
            aria-label="Scroll right"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
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
