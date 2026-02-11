"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Sponsors from "@/components/Sponsors";
import FeaturedEvent from "@/components/FeaturedEvent";
import EventMarquee from "@/components/EventMarquee";
import Projects from "@/components/Projects";
import { TeamSection } from "@/components/TeamSection";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

/**
 * Home page — assembles all top-level sections of the Axios website.
 */
const Home = () => {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-clip mx-auto">
      <FloatingNav navItems={navItems} />

      <Hero />
      <About />
      <Impact />
      <FeaturedEvent />
      <EventMarquee />
      <Sponsors />
      <Projects />
      <TeamSection />
      <Join />

      <Footer />
    </main>
  );
};

export default Home;
