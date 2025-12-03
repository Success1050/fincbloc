"use client";

import FincBlocFAQ from "@/component/ConvertFaq";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Currency {
  symbol: string;
  name: string;
  icon: string;
  color: string;
}

const currencies: Record<string, Currency> = {
  USDT: { symbol: "USDT", name: "Tether", icon: "₮", color: "bg-teal-500" },
  BTC: { symbol: "BTC", name: "Bitcoin", icon: "₿", color: "bg-orange-500" },
  ETH: { symbol: "ETH", name: "Ethereum", icon: "Ξ", color: "bg-purple-500" },
  USDC: { symbol: "USDC", name: "USD Coin", icon: "$", color: "bg-blue-500" },
};

// Mock exchange rates (in a real app, fetch from an API)
const exchangeRates: Record<string, Record<string, number>> = {
  USDT: { USDT: 1, BTC: 0.00001, ETH: 0.00029, USDC: 1 },
  BTC: { USDT: 100000, BTC: 1, ETH: 29, USDC: 100000 },
  ETH: { USDT: 3448, BTC: 0.03448, ETH: 1, USDC: 3448 },
  USDC: { USDT: 1, BTC: 0.00001, ETH: 0.00029, USDC: 1 },
};

export default function FincBlocConverter() {
  const [fromCurrency, setFromCurrency] = useState("USDT");
  const [toCurrency, setToCurrency] = useState("BTC");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const convertCurrency = (amount: string, from: string, to: string) => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setToAmount("");
      return;
    }
    const rate = exchangeRates[from][to];
    const converted = numAmount * rate;
    setToAmount(converted.toFixed(8));
  };

  useEffect(() => {
    if (fromAmount) {
      convertCurrency(fromAmount, fromCurrency, toCurrency);
    }
  }, [fromAmount, fromCurrency, toCurrency]);

  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setFromAmount(value);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
  };

  const getMinMax = (currency: string, type: "from" | "to") => {
    if (type === "from") {
      return currency === "USDT" ? "0.01 - 50000" : "0.0000001 - 0.5";
    }
    return currency === "BTC" ? "0.0000001 - 0.5" : "0.01 - 50000";
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center p-4 pt-8">
      <div className="mb-12 w-full max-w-[1200px]">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-5xl font-bold">FincBloc Convert</h1>
          <button className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </button>
        </div>
        <p className="text-gray-400 text-lg">
          Zero fees | Real-time swap | Multi-asset support
        </p>
      </div>
      <div className="w-full max-w-2xl">
        {/* Converter Card */}
        <div className="bg-zinc-900 rounded-2xl p-1">
          {/* From Section */}
          <div className="bg-zinc-800 rounded-xl p-6 mb-1">
            <label className="text-gray-400 text-sm mb-3 block">From</label>
            <div className="flex items-center justify-between">
              <div className="relative">
                <button
                  onClick={() => setShowFromDropdown(!showFromDropdown)}
                  className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 transition-colors rounded-lg px-4 py-2"
                >
                  <span
                    className={`w-6 h-6 rounded-full ${currencies[fromCurrency].color} flex items-center justify-center text-sm font-bold`}
                  >
                    {currencies[fromCurrency].icon}
                  </span>
                  <span className="font-semibold">{fromCurrency}</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {showFromDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-zinc-700 rounded-lg shadow-xl z-10 min-w-[200px]">
                    {Object.values(currencies).map((curr) => (
                      <button
                        key={curr.symbol}
                        onClick={() => {
                          setFromCurrency(curr.symbol);
                          setShowFromDropdown(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        <span
                          className={`w-6 h-6 rounded-full ${curr.color} flex items-center justify-center text-sm font-bold`}
                        >
                          {curr.icon}
                        </span>
                        <span className="font-semibold">{curr.symbol}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex-1 text-right">
                <input
                  type="text"
                  value={fromAmount}
                  onChange={handleFromAmountChange}
                  placeholder="0"
                  className="bg-transparent text-2xl font-semibold text-right w-full outline-none"
                />
                <p className="text-gray-500 text-sm mt-1">
                  {getMinMax(fromCurrency, "from")}
                </p>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center -my-3 relative z-10">
            <button
              onClick={swapCurrencies}
              className="w-12 h-12 bg-zinc-900 border-4 border-black rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </button>
          </div>

          {/* To Section */}
          <div className="bg-zinc-800 rounded-xl p-6 mt-1">
            <label className="text-gray-400 text-sm mb-3 block">To</label>
            <div className="flex items-center justify-between">
              <div className="relative">
                <button
                  onClick={() => setShowToDropdown(!showToDropdown)}
                  className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 transition-colors rounded-lg px-4 py-2"
                >
                  <span
                    className={`w-6 h-6 rounded-full ${currencies[toCurrency].color} flex items-center justify-center text-sm font-bold`}
                  >
                    {currencies[toCurrency].icon}
                  </span>
                  <span className="font-semibold">{toCurrency}</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {showToDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-zinc-700 rounded-lg shadow-xl z-10 min-w-[200px]">
                    {Object.values(currencies).map((curr) => (
                      <button
                        key={curr.symbol}
                        onClick={() => {
                          setToCurrency(curr.symbol);
                          setShowToDropdown(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        <span
                          className={`w-6 h-6 rounded-full ${curr.color} flex items-center justify-center text-sm font-bold`}
                        >
                          {curr.icon}
                        </span>
                        <span className="font-semibold">{curr.symbol}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex-1 text-right">
                <div className="text-2xl font-semibold text-gray-400">
                  {toAmount || "0"}
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  {getMinMax(toCurrency, "to")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Exchange Rate */}
        <div className="text-center mt-4 mb-6">
          <p className="text-gray-400">
            Rate:{" "}
            <span className="text-white">
              1 {fromCurrency} ={" "}
              {exchangeRates[fromCurrency][toCurrency].toFixed(8)} {toCurrency}
            </span>
          </p>
        </div>

        {/* Log In Button */}
        <Link href="https://dash.fincbloc.com/login">
          <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-black font-bold py-4 rounded-xl text-lg">
            Log In
          </button>
        </Link>

        {/* FAQ */}
      </div>
      <FincBlocFAQ />
    </div>
  );
}
