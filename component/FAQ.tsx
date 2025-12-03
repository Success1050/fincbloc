// components/FAQSection.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What products does FincBloc provide?",
      answer:
        "FincBloc provides a comprehensive suite of cryptocurrency trading products including spot trading, futures trading, perpetual contracts, and advanced trading tools. Our platform offers industry-leading security features, competitive fees, and a user-friendly interface for both beginners and professional traders.",
    },
    {
      id: 2,
      question: "Is FincBloc secure?",
      answer:
        "Yes, FincBloc employs bank-grade security measures including cold wallet storage, multi-signature wallets, two-factor authentication (2FA), and advanced encryption protocols. We partner with leading security providers like Fireblocks and undergo regular security audits to ensure the safety of your assets.",
    },
    {
      id: 3,
      question: "How do I buy Bitcoin and other cryptocurrencies on FincBloc?",
      answer:
        "To buy cryptocurrencies on FincBloc: 1) Create and verify your account, 2) Deposit funds via bank transfer, credit card, or other supported payment methods, 3) Navigate to the trading page, 4) Select your desired cryptocurrency, 5) Enter the amount you wish to purchase, and 6) Confirm your transaction. The crypto will be instantly credited to your FincBloc wallet.",
    },
    {
      id: 4,
      question: "How to trade cryptocurrencies on FincBloc",
      answer:
        "Trading on FincBloc is simple: After funding your account, go to the Markets section, choose your trading pair (e.g., BTC/USDT), select your order type (market, limit, or stop-limit), enter your desired amount, review the details, and execute your trade. You can also access advanced features like margin trading and futures contracts for more sophisticated trading strategies.",
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#0f0f0f] px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            FAQ
          </h2>
          <Link
            href="#"
            className="flex items-center gap-2 text-white transition-all hover:gap-3 hover:opacity-80"
          >
            <span className="text-sm font-medium sm:text-base">View More</span>
            <svg
              className="h-5 w-5"
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
          </Link>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <div key={item.id}>
              <button
                onClick={() => toggleAccordion(item.id)}
                className="flex w-full items-center justify-between border-t border-gray-800 py-6 text-left transition-all hover:opacity-80"
              >
                <h3 className="pr-8 text-lg font-semibold text-white md:text-xl">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 bg-gray-900 transition-transform duration-300 ${
                      openId === item.id ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === item.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 pr-16 text-gray-400 leading-relaxed">
                  {item.answer}
                </div>
              </div>

              {/* Bottom border for last item */}
              {index === faqItems.length - 1 && (
                <div className="border-t border-gray-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
