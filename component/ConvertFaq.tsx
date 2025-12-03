"use client";

import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Are there any trading fees for using FincBloc Convert?",
    answer:
      "No, FincBloc Convert offers zero trading fees. You only pay the network fees required for blockchain transactions. We believe in transparent pricing with no hidden charges.",
  },
  {
    id: 2,
    question: "When will I receive my converted assets?",
    answer:
      "Your converted assets are typically received within seconds to a few minutes, depending on network congestion. Most conversions are completed instantly, while some may take up to 10 minutes during high traffic periods.",
  },
  {
    id: 3,
    question:
      "Why is the conversion rate different from the last traded price on the Spot market?",
    answer:
      "The conversion rate includes real-time market conditions, liquidity, and slippage protection. While Spot market prices show the last traded price, FincBloc Convert provides you with the actual executable rate that guarantees your transaction.",
  },
  {
    id: 4,
    question: "What are the benefits of using FincBloc Convert?",
    answer:
      "FincBloc Convert offers zero fees, instant conversions, multi-asset support, real-time rates, no price slippage, and a simple user interface. It's perfect for quick conversions without the complexity of traditional trading.",
  },
  {
    id: 5,
    question:
      "What are the minimum and maximum transaction limits for FincBloc Convert?",
    answer:
      "Transaction limits vary by cryptocurrency. For USDT: 0.01 - 50,000 per transaction. For BTC: 0.0000001 - 0.5 per transaction. For ETH: 0.00001 - 10 per transaction. These limits ensure optimal liquidity and security.",
  },
  {
    id: 6,
    question: 'Why did I receive the "Insufficient Balance" error?',
    answer:
      "This error occurs when your account balance is lower than the amount you're trying to convert, including network fees. Please check your available balance and ensure you have enough funds to cover both the conversion amount and transaction fees.",
  },
  {
    id: 7,
    question: "Where can I check my conversion history?",
    answer:
      'You can view your complete conversion history by navigating to your account dashboard and selecting "Transaction History" or "Convert History". All your past conversions are logged with timestamps, rates, and transaction IDs for your records.',
  },
];

export default function FincBlocFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="mt-20 max-w-[1200px]">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12">FAQ</h1>

      {/* FAQ Items */}
      <div className="space-y-0">
        {faqData.map((item, index) => (
          <div key={item.id} className="border-b border-zinc-800">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-start justify-between py-6 md:py-8 text-left hover:opacity-80 transition-opacity"
            >
              <div className="flex-1 pr-6">
                <h3 className="text-lg md:text-xl font-semibold leading-relaxed">
                  {index + 1}. {item.question}
                </h3>

                {/* Answer - Visible when open */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === item.id
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>

              {/* Chevron Icon */}
              <div className="shrink-0 mt-1">
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openItem === item.id ? "rotate-180" : ""
                  }`}
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
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Bottom spacing */}
      <div className="h-12"></div>
    </div>
  );
}
