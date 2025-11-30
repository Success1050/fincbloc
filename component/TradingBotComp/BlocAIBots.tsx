"use client";

import Link from "next/link";
import React from "react";

export default function FincBlocAIBots() {
  const bots = [
    {
      pair: "SOLUSDT",
      trend: "Volatile Trend - Balanced",
      type: "Futures Grid | Neutral 10X",
      backtested: "+486.88%",
      profitPerGrid: "29.90% - 34.74%",
      priceRange: "112.21 - 160.23",
      url: "https://dash.fincbloc.com/register",
      gridQuantity: "11",
      stats: [
        { label: "Backtested APR", value: "+486.88%", isGreen: true },
        { label: "Profit per Grid", value: "29.90% - 34.74%" },
      ],
      details: [
        { label: "Price Range", value: "112.21 - 160.23" },
        { label: "Grid Quantity", value: "11" },
      ],
    },
    {
      pair: "DOGEUSDT",
      trend: "Bearish Trend - Moderate",
      type: "Futures Grid | Sell 5X",
      typeColor: "text-red-500",
      backtested: "+386.94%",
      profitPerGrid: "9.99% - 15.60%",
      url: "https://dash.fincbloc.com/register",
      priceRange: "0.11403 - 0.18381",
      gridQuantity: "19",
      stats: [
        { label: "Backtested APR", value: "+386.94%", isGreen: true },
        { label: "Profit per Grid", value: "9.99% - 15.60%" },
      ],
      details: [
        { label: "Price Range", value: "0.11403 - 0.18381" },
        { label: "Grid Quantity", value: "19" },
      ],
    },
    {
      pair: "ETHUSDT",
      trend: "Bullish Trend - Moderate",
      type: "Futures DCA | Buy 4X",
      typeColor: "text-green-500",
      backtested: "+39.71%",
      url: "https://dash.fincbloc.com/register",
      priceSteps: "1.98%",
      maxSafety: "9",
      takeProfit: "2.66%",
      stats: [
        { label: "Backtested APR", value: "+39.71%", isGreen: true },
        { label: "Price Steps", value: "1.98%" },
      ],
      details: [
        { label: "Max Safety Orders", value: "9" },
        { label: "Take Profit per Cycle", value: "2.66%" },
      ],
    },
    {
      pair: "SUIUSDT",
      trend: "Bullish Trend - Moderate",
      type: "Futures DCA | Buy 2X",
      typeColor: "text-green-500",
      backtested: "+12.58%",
      url: "https://dash.fincbloc.com/register",
      priceSteps: "1.62%",
      maxSafety: "9",
      takeProfit: "3.73%",
      stats: [
        { label: "Backtested APR", value: "+12.58%", isGreen: true },
        { label: "Price Steps", value: "1.62%" },
      ],
      details: [
        { label: "Max Safety Orders", value: "9" },
        { label: "Take Profit per Cycle", value: "3.73%" },
      ],
    },
    {
      pair: "XRPUSDT",
      trend: "Bullish Trend - Aggressive",
      type: "Futures DCA | Buy 7X",
      typeColor: "text-green-500",
      backtested: "+190.16%",
      url: "https://dash.fincbloc.com/register",
      priceSteps: "0.81%",
      maxSafety: "9",
      takeProfit: "4.56%",
      stats: [
        { label: "Backtested APR", value: "+190.16%", isGreen: true },
        { label: "Price Steps", value: "0.81%" },
      ],
      details: [
        { label: "Max Safety Orders", value: "9" },
        { label: "Take Profit per Cycle", value: "4.56%" },
      ],
    },
    {
      pair: "BTCUSDT",
      trend: "Bearish Trend - Aggressive",
      type: "Futures DCA | Sell 7X",
      typeColor: "text-red-500",
      backtested: "+271.44%",
      priceSteps: "0.56%",
      maxSafety: "9",
      url: "https://dash.fincbloc.com/register",
      takeProfit: "4.54%",
      stats: [
        { label: "Backtested APR", value: "+271.44%", isGreen: true },
        { label: "Price Steps", value: "0.56%" },
      ],
      details: [
        { label: "Max Safety Orders", value: "9" },
        { label: "Take Profit per Cycle", value: "4.54%" },
      ],
    },
  ];

  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            AI Bots
          </h2>
        </div>

        {/* Bots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bots.map((bot, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:border-neutral-700 transition-all"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {bot.pair}
                  </h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {bot.trend}
                  </span>
                </div>
                <p className={`text-sm ${bot.typeColor || "text-gray-400"}`}>
                  {bot.type}
                </p>
              </div>

              {/* Stats */}
              <div className="space-y-4 mb-6">
                {bot.stats.map((stat, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{stat.label}</span>
                    <span
                      className={`text-lg font-bold ${
                        stat.isGreen ? "text-green-500" : "text-white"
                      }`}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                {bot.details.map((detail, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {detail.label}
                    </span>
                    <span className="text-sm text-white font-medium">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Create Button */}
              <Link href={bot.url}>
                <button className="w-full bg-neutral-800 hover:bg-orange-500 text-white text-base font-semibold py-3 rounded-lg transition-colors">
                  Create Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
