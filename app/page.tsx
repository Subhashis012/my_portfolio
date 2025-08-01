'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import DSASection from '@/components/DSASection';
import DSAJourney from '@/components/DSAJourney';
import Projects from '@/components/Projects';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TechStack />
      {/* <DSASection /> */}
      <DSAJourney />
      <Projects />
      <ContactSection />
    </main>
  );
}