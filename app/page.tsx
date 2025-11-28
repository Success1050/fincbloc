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
import Image from "next/image";

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
      <ExploreFutureFinance />
      <WorldwideBuzzMedia />
      <InfiniteLogoScroll />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
