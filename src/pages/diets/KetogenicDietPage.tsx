import React from "react";
import { Link } from "react-router-dom";
import { DietHeader } from "../../components/DietHeader";

const ketoFoods = [
  "🥑 Avocados",
  "🥩 Grass-fed meats",
  "🐟 Salmon & sardines",
  "🥬 Leafy greens",
  "🧈 Butter & ghee",
  "🧀 Hard cheeses",
  "🌰 Nuts & seeds (in moderation)",
  "🥚 Eggs",
];

const avoidFoods = [
  "🍞 Bread & pasta",
  "🍚 Rice & grains",
  "🍬 Candy & desserts",
  "🥤 Sugary drinks",
  "🥔 Potatoes & starchy vegetables",
  "🍌 Most fruits (except berries)",
];

const benefits = [
  "🔥 Burns fat for fuel instead of carbs",
  "⚡ Stable energy with no sugar crashes",
  "🧠 Mental clarity and focus",
  "💪 Preserves muscle mass while cutting fat",
  "💉 Improves blood sugar & insulin levels",
  "🥗 Naturally reduces cravings",
];

export const KetogenicDietPage: React.FC = () => {
  return (
    <div className="px-6 pt-20 pb-10 max-w-5xl mx-auto text-gray-800">
      {/* Hero */}
      <section className="text-center mb-12">
        <DietHeader
          title="The Ketogenic Diet"
          subtitle="A high-fat, low-carb lifestyle that rewires your metabolism — and your mind — to run on clean, sustainable fuel."
        />
      </section>

      {/* What is Keto */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is the Keto Diet?</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          The ketogenic diet shifts your body’s fuel source from carbohydrates
          to fat. By drastically reducing your carb intake and increasing your
          fat consumption, your body enters a metabolic state called{" "}
          <strong>ketosis</strong>, where it begins burning fat for fuel.
          <br />
          <br />
          Most people aim for under <strong>
            20–50g of net carbs per day
          </strong>{" "}
          to stay in ketosis. This means sugar, bread, rice, and even high-carb
          fruits are mostly off the table. But in return, you get a diet that
          keeps you full, stabilizes your blood sugar, and unlocks a steady flow
          of energy — mentally and physically.
        </p>
      </section>

      {/* What to Eat / Avoid */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-green-700">
            ✅ Foods that *are* Keto
          </h3>
          <ul className="space-y-2 text-gray-700">
            {ketoFoods.map((food, index) => (
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
        <h2 className="text-2xl font-semibold mb-6">Why Go Keto?</h2>
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

      {/* IF + Keto Combo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Keto + Fasting = A Metabolic Power Combo
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Combining intermittent fasting with keto can supercharge results.
          While keto trains your body to run on fat, fasting pushes you deeper
          into fat-burning and ramps up autophagy (your body’s cellular cleanup
          mode).
          <br />
          <br />
          Many people find it easier to fast once they’re keto-adapted — hunger
          is less frequent, energy is stable, and mental clarity is high. It's
          like running your body on premium fuel.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          Want to give Keto a try?
        </h3>
        <p className="text-gray-600 mb-4">
          Check out our fasting tools or explore articles that walk you through
          getting started.
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
            View Keto Tools
          </Link>
        </div>
      </section>
    </div>
  );
};
