"use client";

import React, { useState } from "react";
import { TrendingUp, ChevronRight } from "lucide-react";
import Link from "next/link";

interface TraderCardProps {
  name: string;
  rank: number;
  total: number;
  roi: string;
  roiPercent: string;
  pnl: string;
  mdd: string;
  aum: string;
  sharpe: string;
  trader: any;
  chartData: number[];
  avatarColor?: string;
  avatarText?: string;
}

export default function FincBlocLeaderboard() {
  const [activeTab, setActiveTab] = useState("Leaderboard");

  const highestCopiers = [
    {
      name: "SadafJardan",
      rank: 210,
      total: 500,
      roi: "30D ROI",
      roiPercent: "2486.17%",
      pnl: "15,948.00",
      mdd: "48.96%",
      aum: "187,942",
      sharpe: "10.29",
      chartData: [20, 25, 30, 28, 35, 45, 50, 48, 55, 60, 65, 70, 75, 80, 85],
      avatarColor: "bg-red-500",
      avatarText: "Z",
    },
    {
      name: "CryptoWendyO",
      rank: 76,
      total: 200,
      roi: "30D ROI",
      roiPercent: "78.05%",
      pnl: "5.76",
      mdd: "28.55%",
      aum: "30,767",
      sharpe: "3.26",
      chartData: [30, 35, 33, 40, 45, 48, 52, 55, 58, 62, 65, 70, 75, 78, 80],
      avatarColor: "bg-yellow-600",
      avatarText: "C",
    },
    {
      name: "360_Trader",
      rank: 128,
      total: 500,
      roi: "30D ROI",
      roiPercent: "9.30%",
      pnl: "33.86",
      mdd: "10.39%",
      aum: "32,570",
      sharpe: "2.83",
      chartData: [40, 42, 45, 43, 48, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75],
      avatarColor: "bg-blue-500",
      avatarText: "G",
    },
  ];

  return (
    <div className="w-full bg-[#0f0f0f] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}

        {/* Top ROI Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Highest Copiers' PnL
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Traders that have made the highest return for Copiers.
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
            {highestCopiers.map((trader, index) => (
              <TraderCard key={index} {...trader} trader={trader} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TraderCard({
  name,
  rank,
  total,
  roi,
  roiPercent,
  pnl,
  mdd,
  aum,
  sharpe,
  chartData,
  trader,
  avatarColor = "bg-red-500",
  avatarText = name.charAt(0),
}: TraderCardProps) {
  const maxValue = Math.max(...chartData);
  const minValue = Math.min(...chartData);
  const range = maxValue - minValue;
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
          <div className="relative h-20 mb-6">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox={`0 0 ${chartData.length} 100`}
            >
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                points={chartData
                  .map((value, index) => {
                    const x = index;
                    const y = 100 - ((value - minValue) / range) * 100;
                    return `${x},${y}`;
                  })
                  .join(" ")}
              />
            </svg>
          </div>
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
