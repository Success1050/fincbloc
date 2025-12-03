import HowToGetCommission from "@/component/RefferalComp/HowToGet";
import ReferralHero from "@/component/RefferalComp/ReferralHero";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refferal Programs | Fincbloc - Earn Crypto Rewards",
  description:
    "Convert cryptocurrencies instantly with zero fees. Real-time swap with multi-asset support.",
  keywords: ["crypto", "converter", "cryptocurrency", "bitcoin", "ethereum"],
};

const Refferals = () => {
  return (
    <div>
      <ReferralHero />
      <HowToGetCommission />
    </div>
  );
};

export default Refferals;
