import FincBlocCopyTrading from "@/component/CopyTrading/Copy";
import FincBlocLeaderboard from "@/component/CopyTrading/Leader";
import TradingLeaderboard from "@/component/CopyTrading/TraderCard";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copy Trading | Copy Top Expert Traders | Fincbloc",
  description:
    "Convert cryptocurrencies instantly with zero fees. Real-time swap with multi-asset support.",
  keywords: ["crypto", "converter", "cryptocurrency", "bitcoin", "ethereum"],
};

const CopyTrading = () => {
  return (
    <div>
      <FincBlocCopyTrading />
      <FincBlocLeaderboard />
      <TradingLeaderboard />
    </div>
  );
};

export default CopyTrading;
