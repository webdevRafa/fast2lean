import React from "react";
import { Link } from "react-router-dom";
import { DietHeader } from "../../components/DietHeader";
import mediDiet from "../../assets/images/medi-diet-illustration-cropped.webp";
const foodsToEnjoy = [
  "🥗 Vegetables & leafy greens",
  "🍇 Fresh fruits",
  "🐟 Fatty fish (salmon, sardines)",
  "🫒 Olive oil",
  "🍞 Whole grains",
  "🥜 Nuts & seeds",
  "🧄 Garlic, herbs & spices",
  "🍷 A little red wine (optional)",
];

const foodsToLimit = [
  "🥓 Processed meats",
  "🧁 Sugary desserts",
  "🥤 Sugary drinks",
  "🍞 Refined grains & white bread",
  "🧂 Excess sodium",
  "🧈 Butter & margarine",
  "🍟 Fried fast food",
];

const benefits = [
  "💖 Supports heart health & lowers cholesterol",
  "🧠 Reduces risk of stroke and cognitive decline",
  "🦴 Promotes healthy weight & longevity",
  "😌 Boosts mood and fights inflammation",
  "🧬 May lower risk of cancer and diabetes",
  "🍽️ Encourages mindful, enjoyable eating",
];

export const MediterraneanDietPage: React.FC = () => {
  return (
    <div className="px-6 pt-20 pb-10 max-w-5xl mx-auto text-gray-800">
      {/* Hero */}
      <section className="text-center mb-12">
        <DietHeader
          title="The Mediterranean Diet"
          subtitle="A timeless way of eating rooted in simplicity, community, and vibrant whole foods — proven to promote long-term health."
        />
      </section>
      <img className="mx-auto md:max-h-[400px] mb-10" src={mediDiet} alt="" />
      {/* What is it */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What Makes the Mediterranean Diet Different?
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Inspired by the traditional eating habits of countries like Greece,
          Italy, and Spain, the Mediterranean diet focuses on whole foods,
          healthy fats, and lean proteins.
          <br />
          <br />
          It’s not just about nutrients — it’s about lifestyle. Meals are
          enjoyed slowly, often shared with others, and centered around balance
          rather than restriction.
        </p>
      </section>

      {/* Food Lists */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-green-700">
            ✅ Eat More Of These
          </h3>
          <ul className="space-y-2 text-gray-700">
            {foodsToEnjoy.map((item, index) => (
              <li
                key={index}
                className="bg-green-50 border-l-4 border-green-400 p-2 rounded-md"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-red-700">
            🚫 Limit or Avoid These
          </h3>
          <ul className="space-y-2 text-gray-700">
            {foodsToLimit.map((item, index) => (
              <li
                key={index}
                className="bg-red-50 border-l-4 border-red-400 p-2 rounded-md"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Why People Thrive on This Diet
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

      {/* Compatibility Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Can It Work With Fasting or Keto?
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          While the Mediterranean diet isn’t designed for ketosis, it can still
          be combined with **intermittent fasting** to great effect.
          <br />
          <br />
          Doing something like **16:8 IF** with Mediterranean meals means you’re
          still supporting heart health and digestion — and potentially speeding
          up weight loss and energy balance.
          <br />
          <br />
          The focus on anti-inflammatory foods makes it a great choice for
          long-term sustainability, especially if keto feels too restrictive.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          Thinking Mediterranean might be your move?
        </h3>
        <p className="text-gray-600 mb-4">
          Learn how it compares with other diets, or dive into articles and
          tools to support your journey.
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
            Explore Tools
          </Link>
        </div>
      </section>
    </div>
  );
};
