"use client";

import React from "react";
import { TrendingUp, Zap, Bot } from "lucide-react";

interface Product {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProductsSection: React.FC = () => {
  const products: Product[] = [
    {
      title: "Spot Trading",
      description:
        "Buy and sell crypto instantly with real-time market prices. Perfect for beginners and pros alike.",
      icon: <TrendingUp className="w-12 h-12" />,
    },
    {
      title: "Futures Trading",
      description:
        "Trade like a whale with diverse futures markets. Smarter, faster, and bigger — all in one powerful platform.",
      icon: <Zap className="w-12 h-12" />,
    },
    {
      title: "Unified Trading Account",
      description:
        "Automate your trades 24/7 with AI-powered bots. Manage strategies across accounts effortlessly.",
      icon: <Bot className="w-12 h-12" />,
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            DISCOVER MORE PRODUCTS
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {product.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center text-orange-500 font-medium">
                  <span className="mr-2">Learn more</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
