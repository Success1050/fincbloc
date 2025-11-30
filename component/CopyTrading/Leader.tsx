"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function FincBlocLeaderboard() {
  const [activeTab, setActiveTab] = useState("Leaderboard");

  const topROITraders = [
    {
      name: "Ziutson Trader",
      avatar: "/images/trader1.jpg",
      rank: "21D",
      total: "500",
      roi30d: "2486.17%",
      pnl: "+15,049.00",
      mdd30d: "49.96%",
      aum: "187,942",
      url: "https://dash.fincbloc.com/login",
      sharpe: "100.29",
      chart: "up",
    },
    {
      name: "WaveOps X",
      avatar: "/images/trader2.jpg",
      rank: "29",
      total: "500",
      roi30d: "1050.08%",
      pnl: "+154.22",
      url: "https://dash.fincbloc.com/login",
      mdd30d: "2.23%",
      aum: "5,665",
      sharpe: "3.38",
      chart: "up",
    },
    {
      name: "VEXON",
      avatar: "/images/trader3.jpg",
      rank: "9",
      total: "500",
      roi30d: "965.17%",
      url: "https://dash.fincbloc.com/login",
      pnl: "+84.03",
      mdd30d: "13.38%",
      aum: "1,317",
      sharpe: "3.42",
      chart: "up",
    },
  ];

  const topPrudentTraders = [
    {
      name: "Gdron",
      avatar: "/images/trader4.jpg",
      rank: "3",
      total: "300",
      roi30d: "630.66%",
      pnl: "+18.92",
      url: "https://dash.fincbloc.com/login",
      mdd30d: "0.00%",
      aum: "778",
      sharpe: "9.14",
      chart: "up",
    },
    {
      name: "sekon",
      avatar: "/images/trader5.jpg",
      rank: "1",
      total: "200",
      roi30d: "245.82%",
      pnl: "+7.37",
      url: "https://dash.fincbloc.com/login",
      mdd30d: "0.00%",
      aum: "100",
      sharpe: "10.08",
      chart: "up",
    },
    {
      name: "MAK2006",
      avatar: "/images/trader6.jpg",
      rank: "0",
      total: "200",
      roi30d: "112.14%",
      pnl: "+44.63",
      url: "https://dash.fincbloc.com/login",
      mdd30d: "0.00%",
      aum: "0",
      sharpe: "0.53",
      chart: "up",
    },
  ];

  return (
    <div className="w-full bg-[#0f0f0f] py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-6 mb-12 border-b border-neutral-800">
          <button
            onClick={() => setActiveTab("Leaderboard")}
            className={`pb-4 text-lg font-medium transition-colors relative flex items-center gap-2 ${
              activeTab === "Leaderboard"
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <span className="text-xl">🔥</span>
            Leaderboard
            {activeTab === "Leaderboard" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("All Traders")}
            className={`pb-4 text-lg font-medium transition-colors relative ${
              activeTab === "All Traders"
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            All Traders
            {activeTab === "All Traders" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
            )}
          </button>
        </div>

        {/* Top ROI Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Top ROI
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Traders that have earned the highest ROI in the last 30 days.
              </p>
            </div>
            <button className="text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-1 text-sm sm:text-base font-semibold">
              More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topROITraders.map((trader, index) => (
              <TraderCard key={index} trader={trader} />
            ))}
          </div>
        </div>

        {/* Top Prudent Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Top Prudent
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Traders that have made the lowest Maximum Drawdown in the last
                30 days.
              </p>
            </div>
            <button className="text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-1 text-sm sm:text-base font-semibold">
              More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPrudentTraders.map((trader, index) => (
              <TraderCard key={index} trader={trader} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TraderCard({ trader }: { trader: any }) {
  return (
    <div className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold">
          {trader.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">{trader.name}</h3>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
            <span>{trader.rank}</span>
            <span>/</span>
            <span>{trader.total}</span>
          </div>
        </div>
      </div>

      {/* ROI */}
      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-1">30D ROI</p>
        <div className="flex items-end justify-between">
          <p className="text-2xl sm:text-3xl font-bold text-green-500">
            {trader.roi30d}
          </p>
          {/* Mini Chart */}
          <svg
            className="w-24 h-12"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,45 20,40 40,35 60,25 80,20 100,10"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />
          </svg>
        </div>
        <p className="text-xs text-gray-500">
          PnL <span className="text-green-500">{trader.pnl}</span>
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6 text-xs">
        <div>
          <p className="text-gray-500 mb-1">30D MDD</p>
          <p className="text-white font-medium">{trader.mdd30d}</p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">AUM (USDT)</p>
          <p className="text-white font-medium">{trader.aum}</p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Sharpe Ratio</p>
          <p className="text-white font-medium">{trader.sharpe}</p>
        </div>
      </div>

      {/* Copy Button */}
      <Link href={"https://dash.fincbloc.com/login"}>
        <button className="w-full bg-neutral-800 hover:bg-orange-500 text-white text-sm font-semibold py-3 rounded-lg transition-colors">
          Copy
        </button>
      </Link>
    </div>
  );
}
