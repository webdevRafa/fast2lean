import React from "react";
import { Link } from "react-router-dom";

const tools = [
  {
    id: "fasting-schedule",
    title: "🕒 Fasting Schedule Generator",
    description: "Find a fasting window that fits your daily lifestyle.",
    link: "/tools/fasting-schedule",
  },
  {
    id: "macro-calculator",
    title: "⚖️ Keto Macro Calculator",
    description: "Calculate your ideal fat, protein, and carb intake.",
    link: "/tools/macro-calculator",
  },
  {
    id: "meal-examples",
    title: "🍽️ Meal Examples",
    description: "Get keto/fasting meal ideas based on your goals.",
    link: "/tools/meal-examples",
  },
  {
    id: "ketosis-quiz",
    title: "🧪 Ketosis Indicator Quiz",
    description: "Not sure if you're in ketosis? Take this quick quiz.",
    link: "/tools/ketosis-quiz",
  },
  {
    id: "grocery-list",
    title: "🛒 Grocery List Generator",
    description: "Build your grocery list based on your chosen diet.",
    link: "/tools/grocery-list-generator",
  },
  {
    id: "supplement-matcher",
    title: "💊 Supplement Matcher",
    description: "Get supplement suggestions tailored to your health goals.",
    link: "/tools/supplement-matcher",
  },
];

export const Tools: React.FC = () => {
  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold  mb-1">tools that can help</h1>
        <p className="text-gray-600 mb-10">
          Explore tools to personalize your fasting, keto, and nutrition
          journey.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className=" shadow-lg rounded-2xl p-6 flex flex-col justify-between transition hover:shadow-xl"
          >
            <div>
              <h2 className="text-xl font-semibold  mb-2">{tool.title}</h2>
              <p className="text-gray-600 mb-4">{tool.description}</p>
            </div>
            <Link
              to={tool.link}
              className="inline-block mt-auto px-4 py-2 bg-gray-900 text-white font-medium rounded-lg  transition"
            >
              try {tool.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
