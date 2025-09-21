import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen" id="main">
      <Hero />
      <Testimonials />
      <Reviews />
      <FAQ />
      <Contact />
    </div>
  );
}