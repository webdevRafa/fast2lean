// src/components/HeroComponent.tsx
import React from "react";
import { Link } from "react-router-dom";
import Fast2Lean from "../assets/logos/f2l-official-white.svg";
import heroImg from "../assets/images/treadmill.webp";
import { BenefitSlider } from "./BenefitSlider";

export const HeroComponent: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* background texture / marble – optional */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[url('/src/assets/images/marble-texture.png')] bg-cover bg-center opacity-15 dark:opacity-5"
      />

      {/* main grid */}
      <div className="mx-auto grid max-w-7xl px-6 py-24 md:grid-cols-2 md:items-center lg:px-8">
        {/* copy */}
        <div data-aos="fade-right" data-aos-delay="200">
          {/* brand title */}
          <img className="max-w-[250px] mb-4" src={Fast2Lean} alt="" />
          {/* strapline */}
          <p className="mb-4 text-xl font-medium text-gray-700 dark:text-gray-300">
            Intermittent fasting &amp; smarter nutrition
            <br className="hidden md:block" />
            for a <span className="text-primary">leaner</span> you
          </p>

          {/* short explainer */}
          <p className="mb-8 max-w-md text-gray-600 dark:text-gray-400">
            Explore tools, products, and bite-sized guidance to help you fast
            with purpose — and fuel your day the right way.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/articles"
              className="rounded-full cta-dark px-6 py-3 text-sm font-semibold text-white shadow transition-transform duration-200 ease-out hover:scale-105"
            >
              Start Learning
            </Link>
          </div>
        </div>

        {/* illustration / hero image */}
        <div
          className="mt-12 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img
            src={heroImg}
            alt="Abstract digital human silhouette"
            className="mx-auto w-[90%] max-w-md rounded-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* call-out strip */}
      <div className="bg-gray-900/90 py-8 text-center text-white backdrop-blur">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-white!">
          Feel better. Think clearer. Move stronger.
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-sm md:text-base text-gray-300">
          Changing <strong>when</strong> you eat could be the simplest step
          toward feeling better in more ways than you’d expect.
        </p>
        <div className="px-4 md:px-20">
          <BenefitSlider />
        </div>
      </div>
    </section>
  );
};
