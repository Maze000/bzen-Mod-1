import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import ServicesGrid from '@/components/ServicesGrid';
import Workshops from '@/components/Workshops';
import PsychologySection from '@/components/PsychologySection';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <FeaturedServices />
        <ServicesGrid />
        <Workshops />
        <PsychologySection />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;