import React from "react";
import { Link } from "react-router-dom";
import { DietHeader } from "../../components/DietHeader";

const paleoFoods = [
  "🥩 Grass-fed meats",
  "🐟 Wild-caught fish",
  "🥚 Eggs",
  "🥦 Vegetables",
  "🍓 Fruits (in moderation)",
  "🥑 Healthy fats (olive oil, avocado, coconut)",
  "🥜 Nuts & seeds (in moderation)",
  "🧄 Herbs & spices",
];

const avoidFoods = [
  "🌾 Grains (wheat, rice, corn)",
  "🧁 Processed foods & refined sugar",
  "🧀 Dairy (some allow grass-fed butter)",
  "🫘 Legumes (beans, peanuts, soy)",
  "🥤 Soft drinks",
  "🧈 Margarine & seed oils",
];

const benefits = [
  "🔥 Reduces processed food intake",
  "🧠 Supports brain & gut health",
  "💪 Promotes lean muscle and strength",
  "🦴 May reduce inflammation and joint pain",
  "🧬 Encourages stable energy levels",
  "🍽️ Naturally aligns with intermittent fasting",
];

export const PaleoDietPage: React.FC = () => {
  return (
    <div className="px-6 pt-20 pb-10 max-w-5xl mx-auto text-gray-800">
      {/* Hero */}
      <section className="text-center mb-12">
        <DietHeader
          title="The Paleo Diet"
          subtitle="Eat like your ancestors — whole, natural foods that your body is built to thrive on."
        />
      </section>

      {/* What is Paleo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What Is the Paleo Diet?</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          The Paleo Diet, short for “Paleolithic,” is about eating the way
          humans evolved to eat — before processed foods, agriculture, and
          industrialized oils.
          <br />
          <br />
          Think meats, fish, fruits, and vegetables. Things you could
          hypothetically hunt, gather, or grow without a factory. The goal?
          Reduce inflammation, support digestion, and fuel your body with
          nutrient-dense real food.
        </p>
      </section>

      {/* What to Eat / Avoid */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-green-700">
            ✅ Foods to Focus On
          </h3>
          <ul className="space-y-2 text-gray-700">
            {paleoFoods.map((food, index) => (
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
          Why Paleo Works for So Many
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

      {/* Paleo + Fasting or Keto */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Does Paleo Work With Intermittent Fasting or Keto?
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Paleo naturally pairs well with intermittent fasting. Because it
          removes processed foods and sugar, blood sugar stays stable longer —
          making it easier to go without snacking or eating every few hours.
          <br />
          <br />
          While Paleo isn’t as low-carb as strict keto, many people do a “
          <strong>Paleo-keto hybrid</strong>” by choosing mostly fat and protein
          from clean, ancestral sources. This combo can help with fat loss,
          inflammation, and mental clarity.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          Ready to go primal?
        </h3>
        <p className="text-gray-600 mb-4">
          Explore guides and products that can help you bring Paleo into your
          daily routine.
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
