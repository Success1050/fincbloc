"use client";

import React, { useState } from "react";

export default function FincBlocCreateBot() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Bullish", "Bearish", "Slicing Bots", "Sideways"];

  const allBots = [
    {
      id: 1,
      name: "Futures Grid",
      isNew: true,
      icon: "📊",
      features: ["Profit from market swings", "Ideal for volatile markets"],
      category: ["All", "Bullish", "Bearish"],
    },
    {
      id: 2,
      name: "Futures DCA",
      isNew: true,
      icon: "💹",
      features: [
        "Recover quickly from losses",
        "Enter low, exit high in stages",
      ],
      category: ["All", "Bullish"],
    },
    {
      id: 3,
      name: "Signal Bot",
      isNew: false,
      icon: "📡",
      features: ["Trade with low-latency signals automatically"],
      category: ["All", "Slicing Bots"],
    },
    {
      id: 4,
      name: "TWAP",
      isNew: false,
      icon: "⏱️",
      features: ["Place scheduled orders to reduce slippage."],
      category: ["All", "Sideways"],
    },
  ];

  const filteredBots =
    activeTab === "All"
      ? allBots
      : allBots.filter((bot) => bot.category.includes(activeTab));

  return (
    <div className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 sm:mb-12">
          Create My Bot
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-6 sm:gap-8 mb-8 sm:mb-12 border-b border-neutral-800">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-base sm:text-lg md:text-xl font-medium transition-colors relative ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
              )}
            </button>
          ))}
        </div>

        {/* Bot Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredBots.map((bot) => (
            <div
              key={bot.id}
              className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:border-neutral-700 transition-all cursor-pointer group"
            >
              {/* Icon and Title */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{bot.icon}</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                      {bot.name}
                    </h3>
                  </div>
                </div>
                {bot.isNew && (
                  <span className="px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded">
                    NEW
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2">
                {bot.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-400 text-sm flex items-start gap-2"
                  >
                    <span className="text-gray-600 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredBots.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No bots available in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
