import FloatingOrbs from "@/components/FloatingOrbs";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Neon Strip Accents */}
      <div className="neon-strip-top" />
      <div className="neon-strip-bottom" />
      
      {/* Floating Background Orbs */}
      <FloatingOrbs />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
