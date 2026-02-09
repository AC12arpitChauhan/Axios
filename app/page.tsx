"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Sponsors from "@/components/Sponsors";
import FeaturedEvent from "@/components/FeaturedEvent";
import Projects from "@/components/Projects";
import { TeamSection } from "@/components/TeamSection";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

// Temporary Footer placeholder or reuse existing if not broken
// We need to make sure Footer is compatible or use a new one. 
// For now, I'll use the existing Footer but check it later.

const Home = () => {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden mx-auto">
      <FloatingNav navItems={navItems} />
      
      <Hero />
      <Impact />
      <Sponsors />
      <FeaturedEvent />
      <Projects />
      <TeamSection />
      <Join />
      
      <Footer />
    </main>
  );
};

export default Home;
