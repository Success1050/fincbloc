import FincBlocConverter from "@/component/ConvertComp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fincbloc Convert | Instantly Swap Crypto With Zero Fees",
  description:
    "Convert cryptocurrencies instantly with zero fees. Real-time swap with multi-asset support.",
  keywords: ["crypto", "converter", "cryptocurrency", "bitcoin", "ethereum"],
};

export default function ConvertPage() {
  return <FincBlocConverter />;
}
