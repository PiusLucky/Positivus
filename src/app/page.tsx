import NavBar from "@/components/common/NavBar";
import CaseStudySection from "@/components/sections/CaseStudySection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import LetMakeThingsHappenSection from "@/components/sections/LetMakeThingsHappenSection";
import LogoGroupSection from "@/components/sections/LogoGroupSection";
import OurWorkingProcessSection from "@/components/sections/OurWorkingProcessSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mx-4 md:mx-[100px] pt-[70px] flex flex-col gap-[140px]">
        <HeroSection />
        <LogoGroupSection />
        <ServiceSection />
        <LetMakeThingsHappenSection />
        <CaseStudySection />
        <OurWorkingProcessSection />
        <TeamSection />
        <ContactUsSection />
        <FooterSection />
      </div>
    </main>
  );
}
