"use client";

import React, { useState } from "react";

export default function FincBlocBuyCrypto() {
  const [spendAmount, setSpendAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("0");
  const [spendCurrency, setSpendCurrency] = useState("USD");
  const [receiveCurrency, setReceiveCurrency] = useState("USDT");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Exchange rates (mock data - replace with real API)
  const exchangeRates = {
    BTC: 0.000011,
    ETH: 0.000332,
    SOL: 0.00733,
    XRP: 0.453,
    USDT: 1,
    CRYPGPT: 0.388,
  };

  // Calculate receive amount in real-time
  const handleSpendChange = (value: string) => {
    setSpendAmount(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0 && receiveCurrency in exchangeRates) {
      const rate =
        exchangeRates[receiveCurrency as keyof typeof exchangeRates] || 1;
      const received = (numValue * rate).toFixed(8);
      setReceiveAmount(received);
    } else {
      setReceiveAmount("0");
    }
  };

  const cryptos = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "90,999.82",
      change: "0.05%",
      positive: true,
      icon: "₿",
      color: "bg-orange-500",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: "3,010.24",
      change: "-1.00%",
      positive: false,
      icon: "Ξ",
      color: "bg-blue-500",
    },
    {
      symbol: "SOL",
      name: "Solana",
      price: "136.36",
      change: "-1.01%",
      positive: false,
      icon: "S",
      color: "bg-purple-500",
    },
    {
      symbol: "XRP",
      name: "Ripple",
      price: "2.2083",
      change: "1.00%",
      positive: true,
      icon: "X",
      color: "bg-gray-500",
    },
    {
      symbol: "CRYPGPT",
      name: "CrypGPT",
      price: "2.57267",
      change: "0.72%",
      positive: true,
      icon: "C",
      color: "bg-yellow-600",
    },
  ];

  const paymentMethods = [
    { name: "Visa", logo: "💳" },
    { name: "Mastercard", logo: "💳" },
    { name: "Bank Transfer", logo: "🏦" },
    { name: "Google Pay", logo: "G" },
  ];

  return (
    <div className="w-full min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-xl sm:text-2xl text-white font-semibold mb-1">
              One-Click Buy
            </h1>
            <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
          </div>

          <button className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors">
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-sm sm:text-base">Orders</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-baseline-last gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
              Buy Crypto
            </h2>

            {/* Payment Methods */}
            <div className="mb-8">
              <div className="flex gap-3">
                <p className="text-gray-400 text-sm mb-4">Supported</p>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold text-blue-600">
                  VISA
                </div>
                <div className="w-12 h-8 bg-linear-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full -ml-1.5"></div>
                  </div>
                </div>
                <div className="w-12 h-8 bg-black border border-gray-600 rounded flex items-center justify-center text-xs font-bold text-white">
                  LINK
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold">
                  Pay
                </div>
              </div>
            </div>

            {/* Hot Cryptos */}
            <div className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Hot Cryptos
              </h3>

              <div className="space-y-4">
                {cryptos.map((crypto) => (
                  <button
                    key={crypto.symbol}
                    className="w-full flex items-center justify-between p-3 hover:bg-neutral-800/50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 ${crypto.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                      >
                        {crypto.icon}
                      </div>
                      <span className="text-white font-medium">
                        {crypto.symbol}
                      </span>
                    </div>

                    <div className="flex items-center gap-8">
                      <span className="text-white font-medium">
                        {crypto.price}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          crypto.positive ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {crypto.change}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Order Form */}
          <div>
            <div className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Enter Amount
              </h3>

              {/* Spend Section */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">
                  Spend
                </label>
                <div className="bg-black border border-neutral-700 rounded-lg p-4 flex items-center justify-between relative">
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    value={spendAmount}
                    onChange={(e) => handleSpendChange(e.target.value)}
                    className="bg-transparent text-white text-xl outline-none flex-1 placeholder-gray-600"
                  />
                  <button className="flex items-center gap-2 absolute right-3 text-white hover:text-orange-500 transition-colors">
                    <span className="text-orange-500 text-xl">●</span>
                    <span className="font-medium">{spendCurrency}</span>
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Receive Section */}
              <div className="mb-6">
                <label className="text-gray-400 text-sm mb-2 block">
                  Receive
                </label>
                <div className="bg-black border border-neutral-700 rounded-lg p-4 flex items-center justify-between relative">
                  <span
                    className={`text-xl ${
                      receiveAmount === "0" ? "text-gray-600" : "text-white"
                    }`}
                  >
                    {Number(receiveAmount) - 0.9812 < 0
                      ? 0
                      : Number(receiveAmount) - 0.9812}
                  </span>
                  <button className="flex items-center gap-2 absolute right-3 text-white hover:text-orange-500 transition-colors">
                    <span className="text-green-500 text-xl">●</span>
                    <span className="font-medium">{receiveCurrency}</span>
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <label className="text-white text-base font-semibold mb-3 block">
                  Payment Method
                </label>
                <button className="w-full bg-black border border-neutral-700 rounded-lg p-4 flex items-center justify-between hover:border-orange-500 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                      <div className="w-4 h-4 bg-orange-500 rounded-full -ml-2"></div>
                    </div>
                    <span className="text-white font-medium">
                      Bank Card(VISA/Mastercard)
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
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

              {/* Terms & Conditions */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-gray-600 text-orange-500 focus:ring-orange-500 bg-transparent"
                  />
                  <span className="text-sm text-gray-400">
                    By proceeding, you agree to the{" "}
                    <a
                      href="#"
                      className="text-white underline hover:text-orange-500"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-white underline hover:text-orange-500"
                    >
                      Privacy Notice
                    </a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-4 rounded-lg transition-colors">
                Log In/Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
