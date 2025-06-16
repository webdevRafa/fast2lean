import React, { useState } from "react";

export const MacroCalculator: React.FC = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState(""); // in pounds
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("maintenance");
  const [result, setResult] = useState<null | {
    calories: number;
    fat: number;
    protein: number;
    carbs: number;
  }>(null);

  const handleCalculate = () => {
    const w = parseFloat(weight); // in pounds
    const hFeet = parseInt(heightFeet);
    const hInches = parseInt(heightInches);
    const a = parseInt(age);

    if (!w || isNaN(hFeet) || isNaN(hInches) || !a) {
      alert("Please fill out all fields correctly.");
      return;
    }

    // Convert to total inches
    const totalInches = hFeet * 12 + hInches;

    // Mifflin-St Jeor for imperial units
    const bmr =
      gender === "male"
        ? 66 + 6.23 * w + 12.7 * totalInches - 6.8 * a
        : 655 + 4.35 * w + 4.7 * totalInches - 4.7 * a;

    const activityMultiplier =
      activity === "sedentary" ? 1.2 : activity === "moderate" ? 1.55 : 1.75;

    let calories = bmr * activityMultiplier;

    if (goal === "fat-loss") calories -= 500;
    if (goal === "muscle-gain") calories += 300;

    // Keto macros
    const fatCals = calories * 0.7;
    const proteinCals = calories * 0.25;
    const carbCals = calories * 0.05;

    setResult({
      calories: Math.round(calories),
      fat: Math.round(fatCals / 9),
      protein: Math.round(proteinCals / 4),
      carbs: Math.round(carbCals / 4),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          ⚖️ Keto Macro Calculator
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Years"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Height
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                className="w-1/2 border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Feet"
              />
              <input
                type="number"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                className="w-1/2 border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Inches"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Weight (lbs)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="e.g. 150"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Activity Level
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="moderate">Moderate (3-4x/week)</option>
              <option value="active">Active (5-6x/week or daily)</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">Goal</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="fat-loss">Fat Loss</option>
              <option value="maintenance">Maintenance</option>
              <option value="muscle-gain">Muscle Gain</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition"
        >
          Calculate Macros
        </button>

        {result && (
          <div className="mt-10 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Your Daily Macros:
            </h2>
            <p className="text-gray-700 mb-1">
              Calories: <strong>{result.calories}</strong> kcal
            </p>
            <p className="text-gray-700 mb-1">
              Fat: <strong>{result.fat}g</strong>
            </p>
            <p className="text-gray-700 mb-1">
              Protein: <strong>{result.protein}g</strong>
            </p>
            <p className="text-gray-700">
              Carbs: <strong>{result.carbs}g</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
