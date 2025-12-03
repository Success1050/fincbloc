import CryptoJourneySection from "@/component/AccountProcess";
import CopyTradingCarousel from "@/component/CopyTrading";
import CTABanner from "@/component/CTABanner";
import FAQSection from "@/component/FAQ";
import FeaturesCarousel from "@/component/FinblocFeatures";
import ExploreFutureFinance from "@/component/Future";
import HeroSection from "@/component/Hero";
import ProductsSection from "@/component/MoreProducts";
import InfiniteLogoScroll from "@/component/Sponsors";
import MarketsSection from "@/component/TradingViewWidget";
import SecuritySection from "@/component/WhyFincBloc";
import WorldwideBuzzMedia from "@/component/WorldBuzz";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "FincBloc - Where clients are made giants",
  description:
    "Convert cryptocurrencies instantly with zero fees. Real-time swap with multi-asset support.",
  keywords: ["crypto", "converter", "cryptocurrency", "bitcoin", "ethereum"],
  openGraph: {
    title: "FincBloc Convert",
    description: "Convert cryptocurrencies instantly with zero fees",
    url: "https://fincbloc.com",
    siteName: "FincBloc",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FincBloc Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FincBloc Convert",
    description: "Convert cryptocurrencies instantly with zero fees",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesCarousel />
      <MarketsSection />
      <CryptoJourneySection />
      <SecuritySection />
      <ProductsSection />
      <CopyTradingCarousel />
      {/* <ExploreFutureFinance /> */}
      <WorldwideBuzzMedia />
      <InfiniteLogoScroll />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
