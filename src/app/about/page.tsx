import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutNextGen from "@/components/about/AboutNextGen";
import AboutWhatDrivesUs from "@/components/about/AboutWhatDrivesUs";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutTrustedEcosystem from "@/components/about/AboutTrustedEcosystem";
import AboutMoreThanWallet from "@/components/about/AboutMoreThanWallet";
// import AboutTeam from "@/components/about/AboutTeam";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { community } from "@/data/homepage";

export const metadata = {
  title: "About Us | Elementa Protocol",
  description: "Learn about Elementa Protocol, the future of multi-chain finance and decentralized infrastructure.",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutNextGen />
      <AboutWhatDrivesUs />
      <AboutVisionMission />
      <AboutTrustedEcosystem />
      <AboutMoreThanWallet />
      {/* <AboutTeam /> */}
      
      <CommunitySection community={community} />
    </div>
  );
};

export default AboutPage;
