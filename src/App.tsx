import React from 'react';
import { UrgencyBar, Hero, Numbers } from './components/sections/Hero';
import { Problem, Transformation, HowItWorks } from './components/sections/Problem';
import { ProductGrid, WhatYouGet, Differentiators } from './components/sections/Product';
import { Bonuses, WhoIsItFor, SocialProof } from './components/sections/Bonuses';
import { Pricing, Comparison, Guarantee } from './components/sections/Pricing';
import { Faq, Closing } from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBFF] font-sans text-slate-900 overflow-x-hidden">
      <UrgencyBar />
      <Hero />
      <Numbers />
      <Problem />
      <Transformation />
      <ProductGrid />
      <WhatYouGet />
      <HowItWorks />
      <Differentiators />
      <Bonuses />
      <WhoIsItFor />
      <SocialProof />
      <Pricing />
      <Comparison />
      <Guarantee />
      <Faq />
      <Closing />
    </div>
  );
}
