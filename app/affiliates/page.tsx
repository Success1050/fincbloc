import FlncblocAffiliateWorks from "@/component/affiliateComp/HowAffiliate";
import BloFinCTA from "@/component/affiliateComp/AffiliateCTA";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Crypto Affiliate Program | FincBloc - Earn High Commissions and Benefits",
  description:
    "Convert cryptocurrencies instantly with zero fees. Real-time swap with multi-asset support.",
  keywords: ["crypto", "converter", "cryptocurrency", "bitcoin", "ethereum"],
};

const Affiliate = () => {
  return (
    <div>
      <FlncblocAffiliateWorks />
      <BloFinCTA />
    </div>
  );
};

export default Affiliate;
