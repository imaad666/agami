import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProcessSection from "@/components/ProcessSection";
import PatientsSection from "@/components/PatientsSection";
import CliniciansSection from "@/components/CliniciansSection";
import TechnologySection from "@/components/TechnologySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <ProcessSection />
        <PatientsSection />
        <CliniciansSection />
        <TechnologySection />
      </main>
      <Footer />
    </div>
  );
}
