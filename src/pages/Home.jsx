import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen" id="main">
      <Hero />
      <Testimonials />
      <Contact />
    </div>
  );
}