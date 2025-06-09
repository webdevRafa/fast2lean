import { Link } from "react-router-dom";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import silhouette from "../assets/images/silhouette.webp";

import brainGut from "../assets/images/brain-gut.png";

// images
import keto from "../assets/svgs/keto.svg";
import paleo from "../assets/svgs/paleo.svg";
import medi from "../assets/svgs/medi.svg";
import vegan from "../assets/svgs/vegan.svg";
import nutrition from "../assets/images/nutrition-facts.webp";

// components
import { WhatIsFasting } from "../components/WhatIsFasting";
import { BenefitSlider } from "../components/BenefitSlider";
import FastingBenefitsSection from "../components/FastingBenefitsSection";

export const HomePage: React.FC = () => {
  const { ref: heroRef, visible: heroVisible } = useInViewAnimation();
  const { ref: moodRef, visible: moodVisible } = useInViewAnimation();
  const { ref: dietsRef, visible: dietsVisible } = useInViewAnimation();
  const { ref: toolsRef, visible: toolsVisible } = useInViewAnimation();
  const { ref: articlesRef, visible: articlesVisible } = useInViewAnimation();

  return (
    <main className="font-sans text-gray-900">
      {/* HERO */}
      <section className="bg-white py-24 px-6 hero relative z-30">
        <div
          ref={heroRef}
          className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 transition duration-1000 ease-in-out relative z-30${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What You Eat Matters. But When You Eat? That’s the Game-Changer.
            </h1>
            <p className="text-lg mb-6">
              Learn about Intermittent Fasting and what it could do for you —
              mentally, physically, and emotionally.
            </p>
          </div>
          <div className="md:w-1/2 justify-center hidden md:flex">
            <img
              src={silhouette}
              alt="Brain clarity"
              className="w-[300px] md:w-[400px] h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
      <FastingBenefitsSection />
      {/* BENEFITS */}

      <WhatIsFasting />

      {/* BENEFIT SCROLL SECTION */}
      <div className="py-40 benefitshero">
        <h2 className="text-2xl md:text-3xl text-center mb-6 text-white font-thin">
          Why People Love It
        </h2>
        <BenefitSlider />
      </div>

      {/* MOOD SECTION */}
      <section
        ref={moodRef}
        className={`bg-white py-5 px-6 transition duration-1000 ease-in-out ${
          moodVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-6xl mx-auto md:flex items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={brainGut}
              alt="Mood & hormones"
              className="rounded-xl shadow-lg md:max-w-[360px] lg:max-w-[400px] md:translate-y-[20%]"
            />
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">
              It's more than just physical
            </h2>
            <p className="text-lg mb-4">
              Fasting affects your mind, your energy, your mood — not just your
              waistline.
            </p>
            <Link
              to="/articles"
              className="text-blue-700 underline font-medium"
            >
              Explore the benefits →
            </Link>
          </div>
        </div>
      </section>

      {/* DIET STACK */}
      <section
        ref={dietsRef}
        className={`bg-gradient-to-b from-gray-800 to-black py-24 transition duration-1000 ease-in-out ${
          dietsVisible ? "opacity-100" : "opacity-0 translate-y-6"
        }`}
      >
        {/* grid container */}
        <div className="flex flex-col md:flex-row items-start mx-auto w-full max-w-[1600px] gap-3 px-4">
          {/* Left Side: Heading + Image + Paragraph */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-5 py-4 text-white">
              Discover what's best for you
            </h2>

            <img
              data-aos="fade-up"
              className="mx-auto md:mx-0 w-full md:max-w-[700px] mb-10"
              src={nutrition}
              alt="Nutrition facts"
            />

            <p className="text-lg max-w-xl mx-auto md:mx-0 mb-12 md:text-white">
              The best diet is the one that works for you — long term. These
              styles are flexible, sustainable, and fasting-friendly.
            </p>
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
                    <p className="text-white">
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
                    <p className="text-white">
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
                    <p className="text-white">
                      No grains, no gimmicks. Eat like a human was designed to.
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
                    <p className="text-white">
                      Plant-based without losing performance or nutrients.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/diets/intermittent-fasting"
                className="underline col-span-full text-center md:text-white"
              >
                Learn About Intermittent Fasting →
              </Link>
              <Link
                to="/diets/compare"
                className="underline col-span-full text-center md:text-white"
              >
                Compare All Diets →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section
        ref={articlesRef}
        className={`py-24 px-6 hero transition duration-1000 ease-in-out ${
          articlesVisible ? "opacity-100" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Articles worth reading
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            to="/articles/10-benefits-of-fasting"
            className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              10 Real Benefits of Fasting
            </h3>
            <p>
              From better sleep to sharper thinking — it’s more than weight
              loss.
            </p>
          </Link>
          <Link
            to="/articles/coding-with-fasting"
            className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              How IF helped me code better
            </h3>
            <p>
              More focus, less fog. Fasting helped me get into flow — and stay
              there.
            </p>
          </Link>
          <Link
            to="/articles/bdnf-and-depression"
            className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Fasting & Depression: A Brain Chemistry Shift
            </h3>
            <p>BDNF, neurogenesis, and why your mood might improve.</p>
          </Link>
        </div>
        <Link
          to="/articles"
          className="block mt-6 text-center text-blue-700 underline font-medium"
        >
          Browse All Articles →
        </Link>
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
