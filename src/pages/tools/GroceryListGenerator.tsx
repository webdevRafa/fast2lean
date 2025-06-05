import React, { useState } from "react";

type GroceryCategory = {
  category: string;
  items: string[];
};

const groceryLists: Record<string, GroceryCategory[]> = {
  keto: [
    {
      category: "Proteins",
      items: ["Eggs", "Chicken thighs", "Salmon", "Ground beef", "Tuna"],
    },
    {
      category: "Fats & Oils",
      items: ["Avocado", "Olive oil", "Butter", "Coconut oil", "Ghee"],
    },
    {
      category: "Low-Carb Veggies",
      items: ["Spinach", "Broccoli", "Cauliflower", "Zucchini", "Asparagus"],
    },
    {
      category: "Dairy",
      items: ["Cheddar cheese", "Heavy cream", "Greek yogurt (unsweetened)"],
    },
    { category: "Misc", items: ["Almond flour", "Chia seeds", "Bone broth"] },
  ],
  paleo: [
    {
      category: "Proteins",
      items: [
        "Grass-fed beef",
        "Chicken breast",
        "Pork chops",
        "Eggs",
        "Wild fish",
      ],
    },
    {
      category: "Veggies & Fruits",
      items: ["Sweet potatoes", "Spinach", "Carrots", "Apples", "Blueberries"],
    },
    {
      category: "Healthy Fats",
      items: ["Avocados", "Coconut oil", "Nuts", "Olives"],
    },
    {
      category: "Pantry",
      items: ["Almond flour", "Coconut milk", "Raw honey"],
    },
  ],
  mediterranean: [
    {
      category: "Proteins",
      items: ["Chicken", "Tuna", "Salmon", "Greek yogurt", "Eggs"],
    },
    {
      category: "Whole Grains",
      items: ["Quinoa", "Farro", "Brown rice", "Whole grain bread"],
    },
    {
      category: "Vegetables",
      items: ["Tomatoes", "Cucumbers", "Spinach", "Zucchini", "Eggplant"],
    },
    {
      category: "Fats & Extras",
      items: ["Olive oil", "Feta cheese", "Hummus", "Tahini"],
    },
    { category: "Fruits", items: ["Oranges", "Grapes", "Berries", "Apples"] },
  ],
  vegan: [
    {
      category: "Plant Proteins",
      items: ["Tofu", "Tempeh", "Lentils", "Chickpeas", "Black beans"],
    },
    {
      category: "Vegetables",
      items: ["Broccoli", "Carrots", "Bell peppers", "Spinach", "Zucchini"],
    },
    {
      category: "Whole Grains",
      items: ["Quinoa", "Brown rice", "Oats", "Whole wheat pasta"],
    },
    {
      category: "Healthy Fats",
      items: ["Avocados", "Nuts", "Seeds", "Olive oil"],
    },
    {
      category: "Fruits",
      items: ["Bananas", "Blueberries", "Apples", "Dates"],
    },
  ],
};

export const GroceryListGenerator: React.FC = () => {
  const [diet, setDiet] = useState("keto");

  const list = groceryLists[diet];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          🛒 Grocery List Generator
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Select your diet type to get a curated grocery list to support your
          goals.
        </p>

        <div className="mb-8">
          <label className="block mb-2 font-medium text-gray-700">
            Select Diet Type:
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

        <div className="space-y-6">
          {list.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                {section.category}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
