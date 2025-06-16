import React, { useState } from "react";

const supplementData: Record<string, string[]> = {
  "Focus & Clarity": [
    "Lion’s Mane",
    "L-Theanine",
    "Citicoline",
    "Rhodiola Rosea",
  ],
  "Energy & Performance": ["Creatine", "CoQ10", "B-Complex", "Ashwagandha"],
  "Gut Health": ["Probiotics", "Digestive Enzymes", "L-Glutamine", "Aloe Vera"],
  "Stress & Mood": [
    "Magnesium Glycinate",
    "Ashwagandha",
    "L-Tyrosine",
    "5-HTP",
  ],
  "Sleep & Recovery": ["Melatonin", "GABA", "Zinc + Magnesium", "Chamomile"],
  "Immune Support": ["Vitamin C", "Zinc", "Elderberry", "Vitamin D3"],
  "Muscle Gain & Recovery": [
    "Whey Protein",
    "Creatine Monohydrate",
    "L-Citrulline",
    "BCAAs",
    "Casein Protein",
    "Beta-Alanine",
  ],
};

const allGoals = Object.keys(supplementData);

export const SupplementMatcher: React.FC = () => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const getSuggestions = () => {
    const matchedSupps = new Set<string>();
    selectedGoals.forEach((goal) => {
      supplementData[goal]?.forEach((s) => matchedSupps.add(s));
    });
    return Array.from(matchedSupps);
  };

  const handleMatch = () => {
    if (selectedGoals.length === 0) {
      alert("Please select at least one goal.");
      return;
    }
    setShowResults(true);
  };

  const reset = () => {
    setSelectedGoals([]);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          💊 Supplement Matcher
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Select your health goals and we’ll recommend supplements that support
          your focus, energy, recovery, and more.
        </p>

        {!showResults ? (
          <>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {allGoals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => toggleGoal(goal)}
                  className={`border px-4 py-2 rounded-lg text-sm text-center ${
                    selectedGoals.includes(goal)
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-gray-100 text-gray-800 border-gray-300"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>

            <button
              onClick={handleMatch}
              className="w-full bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              Show My Matches
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Recommended Supplements
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              {getSuggestions().map((supp, idx) => (
                <li key={idx}>{supp}</li>
              ))}
            </ul>

            <button
              onClick={reset}
              className="w-full bg-gray-200 text-gray-800 font-medium py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
};
