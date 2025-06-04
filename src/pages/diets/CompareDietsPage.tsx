import React from "react";
import { Link } from "react-router-dom";

const diets = [
  {
    name: "Intermittent Fasting",
    link: "/diets/intermittent-fasting",
    carbs: "Varies (focuses on *when* you eat)",
    bestFor: ["🧠 Mental clarity", "⚖️ Weight loss", "🧽 Cellular cleanup"],
    compatibleWithIF: "✓",
  },
  {
    name: "Ketogenic Diet",
    link: "/diets/ketogenic-diet",
    carbs: "Very Low (20-50g net carbs/day)",
    bestFor: ["⚡ Energy", "🔥 Fat burning", "💡 Focus"],
    compatibleWithIF: "✓",
  },
  {
    name: "Mediterranean Diet",
    link: "/diets/mediterranean-diet",
    carbs: "Moderate (whole grains, fruits allowed)",
    bestFor: ["💖 Heart health", "🍽️ Balance", "🫒 Longevity"],
    compatibleWithIF: "✓",
  },
  {
    name: "Paleo Diet",
    link: "/diets/paleo-diet",
    carbs: "Moderate (no grains, but fruit/veg allowed)",
    bestFor: ["🦴 Inflammation", "🏋️ Strength", "🔥 Real food"],
    compatibleWithIF: "✓",
  },
  {
    name: "Vegan Diet",
    link: "/diets/vegan-diet",
    carbs: "High (plant-based, includes grains & legumes)",
    bestFor: ["🌍 Ethics", "💓 Heart health", "🌱 Plant power"],
    compatibleWithIF: "✓",
  },
];

export const CompareDietsPage: React.FC = () => {
  return (
    <div className="px-6 pt-20 pb-10 max-w-6xl mx-auto text-gray-800">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Compare Diets</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
          Not sure which path to take? Here's how the most popular diets stack
          up — side by side.
        </p>
      </section>

      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full text-left border rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr className="text-sm text-gray-600">
              <th className="p-4 whitespace-nowrap">Diet</th>
              <th className="p-4 whitespace-nowrap">Carb Level</th>
              <th className="p-4 whitespace-nowrap">Best For</th>
              <th className="p-4 whitespace-nowrap">Works with IF?</th>
              <th className="p-4 whitespace-nowrap">Learn More</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {diets.map((diet, index) => (
              <tr key={index} className="text-sm hover:bg-gray-50 align-top">
                <td className="p-4 font-medium">{diet.name}</td>
                <td className="p-4">{diet.carbs}</td>
                <td className="p-4 space-y-1">
                  {diet.bestFor.map((tag, i) => (
                    <div key={i} className="whitespace-nowrap">
                      {tag}
                    </div>
                  ))}
                </td>
                <td className="p-4 text-green-600 font-bold">
                  {diet.compatibleWithIF}
                </td>
                <td className="p-4">
                  <Link
                    to={diet.link}
                    className="text-blue-600 hover:underline"
                  >
                    View →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
