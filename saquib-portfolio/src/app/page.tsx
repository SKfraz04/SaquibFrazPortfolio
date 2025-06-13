import SmoothScroll from "@/components/common/SmoothScroll";
import ParticleBackground from "@/components/3d/ParticleBackground";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ParticleBackground />
      <Navbar />
      <main className="relative">
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
