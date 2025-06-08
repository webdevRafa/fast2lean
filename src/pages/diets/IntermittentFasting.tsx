import React from "react";
import { Link } from "react-router-dom";
import { DietHeader } from "../../components/DietHeader";
import intermittent from "../../assets/images/if-ill.webp";

const benefits = [
  "🔋 Boosts energy & focus",
  "🔥 Helps burn fat more efficiently",
  "🧠 Improves brain function",
  "💪 Supports muscle preservation during fat loss",
  "💉 Improves insulin sensitivity",
  "🧽 Promotes cellular repair (autophagy)",
  "🧘‍♂️ Enhances mental clarity",
  "🕒 Encourages discipline & food awareness",
];

export const IntermittentFastingPage: React.FC = () => {
  return (
    <div className="px-6 pt-20 pb-10 max-w-5xl mx-auto text-gray-800">
      {/* Hero */}
      <section className="text-center mb-12">
        <DietHeader
          title="Intermittent Fasting"
          subtitle="A simple but powerful way to reset your relationship with food,
          enhance your health, and unlock sustainable energy."
        />
      </section>
      <img
        className="mx-auto md:max-h-[400px] mb-10"
        src={intermittent}
        alt=""
      />
      {/* What is IF? */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What is Intermittent Fasting?
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Intermittent fasting (IF) is not a diet — it’s a pattern of eating
          that cycles between periods of eating and fasting. Instead of focusing
          on what you eat, it focuses on <strong>when</strong> you eat.
          <br />
          <br />
          Popular methods include 16:8 (16 hours fasting, 8 hours eating), OMAD
          (One Meal a Day), and 24-hour fasts done a couple times a week.
          <br />
          <br />
          People turn to IF not just for weight loss, but to improve metabolic
          health, simplify their eating routine, and feel better overall.
        </p>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Why Try Intermittent Fasting?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-800 text-base">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          Want to dive deeper?
        </h3>
        <p className="text-gray-600 mb-4">
          Explore more articles or check out tools that can help make fasting
          easier and more sustainable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/articles"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Read Articles
          </Link>
          <Link
            to="/tools"
            className="border border-black text-black px-6 py-2 rounded-full hover:bg-gray-100 transition"
          >
            View Fasting Tools
          </Link>
        </div>
      </section>
    </div>
  );
};
