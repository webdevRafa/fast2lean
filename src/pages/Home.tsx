// components
import { WhatIsFasting } from "../components/WhatIsFasting";
import FastingBenefitsSection from "../components/FastingBenefitsSection";
import ArticlesSection from "../components/ArticlesSection";
import { HeroComponent } from "../components/HeroComponent";
import { FastingImpact } from "../components/FastingImpact";
import TestimonialCarousel from "../components/TestimonialsCarousel";

export const HomePage: React.FC = () => {
  return (
    <main className="font-sans text-gray-900 overflow-hidden">
      {/* HERO */}
      <HeroComponent />

      <FastingBenefitsSection />
      {/* BENEFITS */}

      <WhatIsFasting />
      {/* BENEFIT SCROLL SECTION */}
      <div className="bg-gray-950 hidden md:block">
        <div className="py-20 md:py-40 benefitshero px-4 md:px-30 lg:px-40 opacity-40"></div>
      </div>
      <FastingImpact />
      <TestimonialCarousel />

      <ArticlesSection />

      {/* DIET STACK */}
    </main>
  );
};
