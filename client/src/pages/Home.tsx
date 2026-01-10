import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ImpactSection from "@/components/ImpactSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SectionDivider />
        <EcosystemSection />
        <SectionDivider />
        <HowItWorksSection />
        <SectionDivider />
        <ImpactSection />
        <SectionDivider />
        <TrustSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <MissionSection />
        <SectionDivider />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
