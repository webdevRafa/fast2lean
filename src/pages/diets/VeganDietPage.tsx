import React from "react";
import { Link } from "react-router-dom";
import { DietHeader } from "../../components/DietHeader";
import vegan from "../../assets/images/vegan.webp";

const veganFoods = [
  "🥦 Vegetables & leafy greens",
  "🍓 Fresh fruits & berries",
  "🥜 Nuts, seeds & nut butters",
  "🌾 Whole grains (quinoa, brown rice, oats)",
  "🫘 Legumes (lentils, chickpeas, black beans)",
  "🥑 Avocados & healthy fats",
  "🧄 Herbs, spices & plant-based oils",
  "🧃 Plant milks (almond, oat, soy, etc.)",
];

const avoidFoods = [
  "🍗 Meat (chicken, beef, pork, etc.)",
  "🐟 Fish & seafood",
  "🥚 Eggs",
  "🧀 Dairy (milk, cheese, butter)",
  "🍯 Some exclude honey (depends on philosophy)",
  "🥓 Animal-based broths or fats",
];

const benefits = [
  "💓 Supports heart health by lowering saturated fat intake",
  "🌱 Naturally anti-inflammatory and high in fiber",
  "🧬 May lower cancer and chronic disease risks",
  "🥗 Encourages whole food, plant-based eating",
  "🪶 Lighter digestion & increased energy in many",
  "🌍 Aligns with ethical and environmental values",
];

export const VeganDietPage: React.FC = () => {
  return (
    <div className="px-6 pt-20 pb-10 max-w-5xl mx-auto text-gray-800">
      {/* Hero */}
      <section className="text-center mb-12">
        <DietHeader
          title="The Vegan Diet"
          subtitle="A lifestyle and nutritional path focused on plant-based foods — and a growing movement for health, sustainability, and compassion."
        />
      </section>
      <img className="mx-auto md:max-h-[400px] mb-10" src={vegan} alt="" />
      {/* What is Veganism */}
      <section className="mb-12 bg-gradient-to-b from-transparent to-white py-5 px-2">
        <h2 className="text-2xl font-semibold mb-4">
          What Does It Mean To Eat Vegan?
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          A vegan diet excludes all animal products — that means no meat, fish,
          eggs, dairy, or anything derived from animals. But it’s far from
          restrictive when done right.
          <br />
          <br />
          Whole food veganism is built on colorful plants, grains, legumes, and
          healthy fats. It's not just a diet — it’s a way of living that often
          overlaps with ethical and environmental consciousness.
        </p>
      </section>

      {/* What to Eat / Avoid */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-green-700">
            ✅ Foods to Embrace
          </h3>
          <ul className="space-y-2 text-gray-700">
            {veganFoods.map((food, index) => (
              <li
                key={index}
                className="bg-green-50 border-l-4 border-green-400 p-2 rounded-md"
              >
                {food}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-red-700">
            🚫 Foods to Avoid
          </h3>
          <ul className="space-y-2 text-gray-700">
            {avoidFoods.map((food, index) => (
              <li
                key={index}
                className="bg-red-50 border-l-4 border-red-400 p-2 rounded-md"
              >
                {food}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Why People Choose the Vegan Path
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

      {/* Vegan + Fasting/Keto Compatibility */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Can You Combine Veganism with Fasting or Keto?
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Absolutely. Intermittent fasting works well with a vegan lifestyle —
          especially if you stick to whole food meals during your eating window.
          <br />
          <br />
          Vegan keto is possible too, but trickier — you’ll rely on things like
          coconut oil, nuts, avocados, and low-carb veggies to stay in ketosis
          while avoiding animal products.
          <br />
          <br />
          Whether your goal is ethical, environmental, or metabolic, fasting and
          veganism can work side by side.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          Ready to explore plant-powered living?
        </h3>
        <p className="text-gray-600 mb-4">
          Check out helpful tools and articles to start your vegan journey with
          confidence.
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
            Explore Vegan Tools
          </Link>
        </div>
      </section>
    </div>
  );
};
