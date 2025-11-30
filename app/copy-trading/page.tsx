import FincBlocCopyTrading from "@/component/CopyTrading/Copy";
import FincBlocLeaderboard from "@/component/CopyTrading/Leader";
import TradingLeaderboard from "@/component/CopyTrading/TraderCard";
import React from "react";

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
