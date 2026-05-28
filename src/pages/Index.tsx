import FloatingOrbs from "@/components/FloatingOrbs";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GrowthSystemsGrid from "@/components/growth-systems/GrowthSystemsGrid";
// import GrowthStats from "@/components/growth-systems/GrowthStats";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import SignatureProjects from "@/components/signature-showcase/SignatureProjects";
import Testimonials from "@/components/testimonials/Testimonials";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      
      {/* Floating Background Orbs */}
      <FloatingOrbs />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Expertise />
          <SignatureProjects />
          <GrowthSystemsGrid />
          {/* <GrowthStats /> */}
          <ProjectsSection />
          <Testimonials />
          <FinalCTA />
          {/* <ContactSection /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
