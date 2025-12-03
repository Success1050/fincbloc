import FincBlocStats from "@/component/AboutComponent/AboutFullWidth";
import FincBlocHero from "@/component/AboutComponent/AboutHero";
import FincBlocMilestones from "@/component/AboutComponent/AboutHistory";
import FincBlocFeatures from "@/component/AboutComponent/FincBlocApart";
import FincBlocValues from "@/component/AboutComponent/FincBlocValues";
import FincBlocPartners from "@/component/AboutComponent/Partners";
import InfiniteLogoScroll from "@/component/Sponsors";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | FincBloc - Where clients are made giants",
  description:
    "Convert cryptocurrencies instantly with zero fees. Real-time swap with multi-asset support.",
  keywords: ["crypto", "converter", "cryptocurrency", "bitcoin", "ethereum"],
};

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      <FincBlocHero />
      <FincBlocStats />
      <FincBlocValues />
      <FincBlocMilestones />
      <FincBlocFeatures />
      <FincBlocPartners />
      <InfiniteLogoScroll />
    </div>
  );
};

export default AboutPage;
