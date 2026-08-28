import React, { useEffect } from 'react';
import { UrgencyBar, Hero, Numbers } from './components/sections/Hero';
import { Problem, Transformation, HowItWorks } from './components/sections/Problem';
import { ProductGrid, WhatYouGet, Differentiators } from './components/sections/Product';
import { Bonuses, WhoIsItFor, SocialProof } from './components/sections/Bonuses';
import { Pricing, Comparison, Guarantee } from './components/sections/Pricing';
import { Faq, Closing } from './components/sections/Footer';

export default function App() {
  useEffect(() => {
    const removeNetlifyBadge = () => {
      document.querySelectorAll("iframe").forEach((iframe) => {
        const src = iframe.getAttribute("src") || "";
        const title = iframe.getAttribute("title") || "";
        const ariaLabel = iframe.getAttribute("aria-label") || "";

        const isNetlifyBadge =
          /netlify/i.test(src) ||
          /netlify/i.test(title) ||
          /netlify/i.test(ariaLabel);

        if (isNetlifyBadge) {
          iframe.remove();
        }
      });
    };

    // Executa imediatamente
    removeNetlifyBadge();

    // Monitora elementos adicionados posteriormente pela Netlify
    const observer = new MutationObserver(() => {
      removeNetlifyBadge();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

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
