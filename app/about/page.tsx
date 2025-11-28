import FincBlocStats from "@/component/AboutComponent/AboutFullWidth";
import FincBlocHero from "@/component/AboutComponent/AboutHero";
import FincBlocMilestones from "@/component/AboutComponent/AboutHistory";
import FincBlocFeatures from "@/component/AboutComponent/FincBlocApart";
import FincBlocValues from "@/component/AboutComponent/FincBlocValues";
import FincBlocPartners from "@/component/AboutComponent/Partners";
import InfiniteLogoScroll from "@/component/Sponsors";
import React from "react";

const AboutPage = () => {
  return (
    <div>
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
