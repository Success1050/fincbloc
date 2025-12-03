"use client";

import React, { useEffect, useRef, memo } from "react";

const TradingViewWidget = memo(() => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.type = "text/javascript";
      script.async = true;

      // Remove JSON.stringify() - use template literal instead
      script.innerHTML = `
        {
          "defaultColumn": "overview",
          "screener_type": "crypto_mkt",
          "displayCurrency": "USD",
          "colorTheme": "dark",
          "isTransparent": false,
          "locale": "en",
          "width": "100%",
          "height": 550
        }`;

      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
});

TradingViewWidget.displayName = "TradingViewWidget";

const MarketsSection: React.FC = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Crypto Markets
          </h2>
          <p className="text-gray-400">
            Real-time cryptocurrency prices and market data
          </p>
        </div>

        {/* TradingView Widget Container */}
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden">
          <TradingViewWidget />
        </div>

        {/* Optional: Market Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
            <p className="text-gray-400 text-sm mb-1">24h Volume</p>
            <p className="text-xl font-bold text-white">$94.5B</p>
            <p className="text-green-500 text-sm">+5.2%</p>
          </div>
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
            <p className="text-gray-400 text-sm mb-1">Market Cap</p>
            <p className="text-xl font-bold text-white">$2.1T</p>
            <p className="text-green-500 text-sm">+2.8%</p>
          </div>
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
            <p className="text-gray-400 text-sm mb-1">BTC Dominance</p>
            <p className="text-xl font-bold text-white">54.3%</p>
            <p className="text-orange-500 text-sm">-0.5%</p>
          </div>
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
            <p className="text-gray-400 text-sm mb-1">Active Pairs</p>
            <p className="text-xl font-bold text-white">1,247</p>
            <p className="text-gray-500 text-sm">Trading</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;
