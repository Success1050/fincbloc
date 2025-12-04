"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function FincBlocBuyCrypto() {
  const [spendAmount, setSpendAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("0");
  const [spendCurrency, setSpendCurrency] = useState("USD");
  const [receiveCurrency, setReceiveCurrency] = useState("USDT");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({
    name: "Bank Card(VISA/Mastercard)",
    rate: "1.0195",
    type: "recommended",
  });

  // Fiat to USD conversion rates
  const fiatToUSD = {
    USD: 1,
    EUR: 1.09,
    GBP: 1.27,
  };

  // Crypto prices in USD
  const cryptoPricesUSD = {
    BTC: 90999.82,
    ETH: 3010.24,
    SOL: 136.36,
    XRP: 2.2083,
    USDT: 1,
    CRYPGPT: 2.57267,
  };

  // Payment methods
  const paymentMethods = {
    recommended: [
      {
        name: "Bank Card(VISA/Mastercard)",
        rate: "1.0195",
        icon: "💳",
      },
    ],
    thirdParty: [
      {
        name: "Simplex",
        subtitle: "VISA, MasterCard",
        rate: "1.03",
        icon: "simplex",
      },
      {
        name: "Alchemy",
        subtitle: "VISA, MasterCard, Apple Pay, Google Pay",
        rate: "1.03",
        icon: "alchemy",
      },
    ],
  };

  // Calculate receive amount in real-time
  const handleSpendChange = (value: string) => {
    setSpendAmount(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      // Convert spend amount to USD first
      const amountInUSD =
        numValue * (fiatToUSD[spendCurrency as keyof typeof fiatToUSD] || 1);

      // Convert USD to crypto
      const cryptoPrice =
        cryptoPricesUSD[receiveCurrency as keyof typeof cryptoPricesUSD] || 1;
      const received = (amountInUSD / cryptoPrice).toFixed(8);
      setReceiveAmount(received);
    } else {
      setReceiveAmount("0");
    }
  };

  // Recalculate when currencies change
  const handleSpendCurrencyChange = (currency: string) => {
    setSpendCurrency(currency);
    if (spendAmount) {
      handleSpendChange(spendAmount);
    }
  };

  const handleReceiveCurrencyChange = (currency: string) => {
    setReceiveCurrency(currency);
    if (spendAmount) {
      handleSpendChange(spendAmount);
    }
  };

  const handlePaymentMethodSelect = (method: any) => {
    setSelectedPaymentMethod(method);
    setShowPaymentModal(false);
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
                  <select
                    value={spendCurrency}
                    onChange={(e) => handleSpendCurrencyChange(e.target.value)}
                    className="bg-black text-white font-medium outline-none cursor-pointer hover:text-orange-500 transition-colors border-none"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
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
                    {receiveAmount}
                  </span>
                  <select
                    value={receiveCurrency}
                    onChange={(e) =>
                      handleReceiveCurrencyChange(e.target.value)
                    }
                    className="bg-black text-white font-medium outline-none cursor-pointer hover:text-orange-500 transition-colors border-none"
                  >
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                  </select>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <label className="text-white text-base font-semibold mb-3 block">
                  Payment Method
                </label>
                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="w-full bg-black border border-neutral-700 rounded-lg p-4 flex items-center justify-between hover:border-orange-500 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                      <div className="w-4 h-4 bg-orange-500 rounded-full -ml-2"></div>
                    </div>
                    <span className="text-white font-medium">
                      {selectedPaymentMethod.name}
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
                    <Link
                      href="/terms"
                      className="text-white underline hover:text-orange-500"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-white underline hover:text-orange-500"
                    >
                      Privacy Notice
                    </Link>
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

      {/* Payment Method Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 rounded-2xl max-w-lg w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">Pay With</h2>

            {/* Recommended Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Recommended</h3>
                <span className="text-gray-400 text-sm">Price</span>
              </div>

              {paymentMethods.recommended.map((method, index) => (
                <button
                  key={index}
                  onClick={() => handlePaymentMethodSelect(method)}
                  className="w-full bg-black border border-neutral-700 rounded-lg p-4 flex items-center justify-between hover:border-orange-500 transition-colors mb-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      <div className="w-5 h-5 bg-red-600 rounded-full"></div>
                      <div className="w-5 h-5 bg-orange-500 rounded-full -ml-2"></div>
                    </div>
                    <span className="text-white font-medium">
                      {method.name}
                    </span>
                  </div>
                  <span className="text-white">1 USDT = {method.rate} USD</span>
                </button>
              ))}
            </div>

            {/* Third Party Section */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4">Third Party</h3>

              {paymentMethods.thirdParty.map((method, index) => (
                <button
                  key={index}
                  onClick={() => handlePaymentMethodSelect(method)}
                  className="w-full bg-black border border-neutral-700 rounded-lg p-4 flex items-center justify-between hover:border-orange-500 transition-colors mb-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {method.icon === "simplex" ? "simplex" : "A"}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="text-white font-medium">
                        {method.name}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {method.subtitle}
                      </div>
                    </div>
                  </div>
                  <span className="text-white">1 USDT = {method.rate} USD</span>
                </button>
              ))}
            </div>

            {/* Confirm Button */}
            <Link href={"https://dash.fincbloc.com/login"}>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-4 rounded-lg transition-colors"
              >
                Confirm
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
