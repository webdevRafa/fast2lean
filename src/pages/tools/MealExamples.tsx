import React, { useState } from "react";

type Meal = {
  title: string;
  description: string;
};

const mealPlans: Record<string, Record<string, Meal[]>> = {
  keto: {
    "fat-loss": [
      {
        title: "Breakfast",
        description: "Scrambled eggs with avocado and spinach",
      },
      {
        title: "Lunch",
        description: "Grilled salmon salad with olive oil dressing",
      },
      {
        title: "Dinner",
        description: "Zucchini noodles with pesto and chicken thighs",
      },
    ],
    maintenance: [
      { title: "Breakfast", description: "Keto pancakes with almond butter" },
      {
        title: "Lunch",
        description: "Beef lettuce wraps with cheese and guacamole",
      },
      { title: "Dinner", description: "Baked chicken with cauliflower mash" },
    ],
    "muscle-gain": [
      {
        title: "Breakfast",
        description: "Omelet with sausage, cheese, and avocado",
      },
      {
        title: "Lunch",
        description: "Grass-fed burger (no bun) with sautéed greens",
      },
      {
        title: "Dinner",
        description: "Steak with buttered broccoli and mushrooms",
      },
    ],
  },
  paleo: {
    "fat-loss": [
      { title: "Breakfast", description: "Boiled eggs and berries" },
      {
        title: "Lunch",
        description: "Grilled chicken with sweet potato and greens",
      },
      { title: "Dinner", description: "Ground turkey stir-fry with veggies" },
    ],
    maintenance: [
      { title: "Breakfast", description: "Banana, nuts, and scrambled eggs" },
      {
        title: "Lunch",
        description: "Baked salmon with asparagus and wild rice",
      },
      {
        title: "Dinner",
        description: "Grilled pork chops with roasted root vegetables",
      },
    ],
    "muscle-gain": [
      {
        title: "Breakfast",
        description: "Eggs, bacon, and avocado with fruit",
      },
      {
        title: "Lunch",
        description: "Beef and vegetable stew with sweet potato",
      },
      {
        title: "Dinner",
        description: "Chicken thighs with quinoa and grilled zucchini",
      },
    ],
  },
  mediterranean: {
    "fat-loss": [
      {
        title: "Breakfast",
        description: "Greek yogurt with walnuts and berries",
      },
      {
        title: "Lunch",
        description: "Chickpea salad with olive oil and lemon",
      },
      {
        title: "Dinner",
        description: "Grilled fish with steamed greens and quinoa",
      },
    ],
    maintenance: [
      {
        title: "Breakfast",
        description: "Whole grain toast with avocado and poached egg",
      },
      {
        title: "Lunch",
        description: "Lentil soup with side of cucumber tomato salad",
      },
      {
        title: "Dinner",
        description: "Grilled chicken with roasted vegetables and brown rice",
      },
    ],
    "muscle-gain": [
      {
        title: "Breakfast",
        description: "Oats with banana, honey, and almonds",
      },
      { title: "Lunch", description: "Tuna pasta with olive oil and arugula" },
      {
        title: "Dinner",
        description: "Stuffed bell peppers with turkey and farro",
      },
    ],
  },
  vegan: {
    "fat-loss": [
      {
        title: "Breakfast",
        description: "Chia pudding with almond milk and strawberries",
      },
      {
        title: "Lunch",
        description: "Quinoa salad with black beans, avocado, and lime",
      },
      {
        title: "Dinner",
        description: "Zucchini noodles with tomato lentil sauce",
      },
    ],
    maintenance: [
      {
        title: "Breakfast",
        description: "Tofu scramble with spinach and mushrooms",
      },
      {
        title: "Lunch",
        description: "Vegan buddha bowl with hummus and roasted chickpeas",
      },
      {
        title: "Dinner",
        description: "Stuffed sweet potato with lentils and tahini drizzle",
      },
    ],
    "muscle-gain": [
      {
        title: "Breakfast",
        description: "Peanut butter banana smoothie with oats and flaxseed",
      },
      {
        title: "Lunch",
        description: "High-protein tempeh stir-fry with brown rice",
      },
      {
        title: "Dinner",
        description: "Chickpea curry with coconut milk and quinoa",
      },
    ],
  },
};

export const MealExamples: React.FC = () => {
  const [diet, setDiet] = useState("keto");
  const [goal, setGoal] = useState("maintenance");
  const [plan, setPlan] = useState<Meal[] | null>(null);

  const handleGenerate = () => {
    const dietPlan = mealPlans[diet as keyof typeof mealPlans];
    const selected = dietPlan?.[goal as keyof typeof dietPlan];
    setPlan(selected ?? null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          🥗 Meal Ideas Generator
        </h1>
        <p className="text-gray-600 text-center max-w-xl mx-auto mb-6">
          These are sample meal ideas to help inspire your next day of eating.
          They’re not tailored to your exact calorie or macro needs — just
          helpful examples based on your selected diet and goal.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Diet Type
            </label>
            <select
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="keto">Keto</option>
              <option value="paleo">Paleo</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="vegan">Vegan</option>
            </select>
          </div>

          <div>
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
          onClick={handleGenerate}
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Generate Meal Ideas
        </button>

        {plan && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Your Meal Ideas:
            </h2>
            <ul className="space-y-4">
              {plan.map((meal, idx) => (
                <li
                  key={idx}
                  className="bg-gray-100 rounded-lg p-4 border-l-4 border-indigo-500"
                >
                  <h3 className="text-lg font-bold text-gray-700">
                    {meal.title}
                  </h3>
                  <p className="text-gray-600">{meal.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
