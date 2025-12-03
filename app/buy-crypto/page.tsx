import FincBlocBuyCrypto from "@/component/BuyCryptoComponent/Buy";
import FincBlocHowToBuy from "@/component/BuyCryptoComponent/Howto";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy cryptocurrency on Fincbloc",
  description:
    "Convert cryptocurrencies instantly with zero fees. Real-time swap with multi-asset support.",
  keywords: ["crypto", "converter", "cryptocurrency", "bitcoin", "ethereum"],
};

const BuyCrypt = () => {
  return (
    <div>
      <FincBlocBuyCrypto />
      <FincBlocHowToBuy />
    </div>
  );
};

export default BuyCrypt;
