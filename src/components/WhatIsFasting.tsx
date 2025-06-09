import React from "react";
import fastingImg from "../assets/images/fasting-window.webp"; // optional image

export const WhatIsFasting: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image or Illustration */}
        <div data-aos="fade-right">
          <img
            src={fastingImg}
            alt="Fasting Window Illustration"
            className="shadow-lg w-full border-r-4 border-slate-950"
          />
        </div>

        {/* Content */}
        <div data-aos="fade-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 bg-gray-50 p-2">
            What Is Intermittent Fasting?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Intermittent Fasting (IF) isn’t about <strong>what</strong> you eat
            — it’s about <strong>when</strong>. Instead of eating all day long,
            you eat within a specific window (like 8 hours on, 16 hours off).
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            It's a small habit that has a big impact. Giving your body regular
            breaks from eating can unlock more energy, better focus, and even a
            more stable mood.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            And here’s something a lot of people don’t realize — you don’t have
            to eat less. Intermittent Fasting isn’t about cutting calories; it’s
            about choosing when to eat those same calories. Whether you’re
            eating 2 meals or 3 within your window, the goal is to give your
            body a break, not deprive it.{" "}
            <strong>It’s structure — not restriction.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
