import { Link } from "react-router-dom";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

// images
import keto from "../assets/svgs/keto.svg";
import paleo from "../assets/svgs/paleo.svg";
import medi from "../assets/svgs/medi.svg";
import vegan from "../assets/svgs/vegan.svg";
import nutrition from "../assets/images/nutrition-facts.webp";

// components
import { WhatIsFasting } from "../components/WhatIsFasting";
import FastingBenefitsSection from "../components/FastingBenefitsSection";
import ArticlesSection from "../components/ArticlesSection";
import { HeroComponent } from "../components/HeroComponent";
import { FastingImpact } from "../components/FastingImpact";
import TestimonialCarousel from "../components/TestimonialsCarousel";

export const HomePage: React.FC = () => {
  const { ref: dietsRef, visible: dietsVisible } = useInViewAnimation();
  const { ref: toolsRef, visible: toolsVisible } = useInViewAnimation();

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
      <section
        ref={dietsRef}
        className={`bg-gray-900 py-24 transition duration-1000 ease-in-out ${
          dietsVisible ? "opacity-100" : "opacity-0 translate-y-6"
        }`}
      >
        {/* grid container */}
        <div className="flex flex-col md:flex-row items-start mx-auto w-full max-w-[1600px] gap-3 px-4">
          {/* Left Side: Heading + Image + Paragraph */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-1  text-white">
              Level up your nutrition
            </h2>
            <p className="text-lg max-w-xl mx-auto md:mx-0 mb-12 text-gray-300">
              Discover flexible eating styles — from high-fat fuel to
              plant-powered simplicity — and choose the one that works best for
              your goals and your lifestyle.
            </p>
            <img
              data-aos="fade-up"
              className="mx-auto md:mx-0 w-full md:max-w-[700px] mb-10"
              src={nutrition}
              alt="Nutrition facts"
            />
          </div>

          {/* Right Side: Diet Cards */}
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-1 gap-6 w-full">
              <Link
                data-aos="fade-left"
                to="/diets/ketogenic-diet"
                className="p-6 rounded-xl shadow hover:scale-[1.02] transition border-2 border-emerald-200"
              >
                <div className="flex gap-5">
                  <img
                    className="max-w-[100px] rounded-2xl"
                    src={keto}
                    alt=""
                  />
                  <div>
                    <h3 className="text-xl text-white font-semibold mb-2">
                      Ketogenic
                    </h3>
                    <p className="text-gray-300">
                      Low-carb, high-fat fuel. Great with fasting for energy +
                      focus.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                data-aos="fade-left"
                to="/diets/mediterranean-diet"
                className="p-6 rounded-xl shadow hover:scale-[1.02] transition border-2 border-emerald-200"
              >
                <div className="flex gap-5">
                  <img className="max-w-[100px]" src={medi} alt="" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Mediterranean
                    </h3>
                    <p className="text-gray-300">
                      Olive oil, fish, greens — simple and sustainable.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                data-aos="fade-left"
                to="/diets/paleo-diet"
                className="p-6 rounded-xl shadow hover:scale-[1.02] transition border-2 border-emerald-200"
              >
                <div className="flex gap-5">
                  <img className="max-w-[100px]" src={paleo} alt="" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Paleo
                    </h3>
                    <p className="text-gray-300">
                      Real food. No grains, no processed extras — just how we
                      were built to eat.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                data-aos="fade-left"
                to="/diets/vegan-diet"
                className="p-6 rounded-xl shadow hover:scale-[1.02] transition border-2 border-emerald-200"
              >
                <div className="flex gap-5">
                  <img className="max-w-[100px]" src={vegan} alt="" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Vegan
                    </h3>
                    <p className="text-gray-300">
                      Plant-based without losing performance or nutrients.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/diets/intermittent-fasting"
                className="underline col-span-full text-center text-white"
              >
                Learn About Intermittent Fasting →
              </Link>
              <Link
                to="/diets/compare"
                className="underline col-span-full text-center text-white"
              >
                Compare All Diets →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* TOOLS */}
      <section
        ref={toolsRef}
        className={`bg-gray-900 py-24 px-6 transition duration-1000 ease-in-out ${
          toolsVisible ? "opacity-100" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-6">
          Tools I Keep Coming Back To
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg">
          No fluff. Just the gear, supplements, and simple routines that help
          make fasting feel easy and sustainable.
        </p>
        <div className="text-center">
          <Link
            to="/resources"
            className="inline-block bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 transition"
          >
            Explore My Toolkit
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-gradient-to-br from-white to-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Where You Are</h2>
        <p className="max-w-xl mx-auto mb-6 text-lg">
          I’ll send you my 7-day fasting guide — no rules, no guilt, just tools
          to get started feeling better.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your name"
            className="p-3 rounded-xl border w-full"
          />
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded-xl border w-full"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300"
          >
            Send Me the Guide
          </button>
        </form>
      </section>
    </main>
  );
};
