import React, { useState } from "react";

type Meal = {
  title: string;
  description: string;
};

type MealPlanStructure = {
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
};

const mealPlans: Record<string, Record<string, MealPlanStructure>> = {
  keto: {
    "fat-loss": {
      breakfast: [
        { title: "Scrambled Eggs", description: "With avocado and spinach" },
        { title: "Keto Smoothie", description: "With coconut milk and chia" },
        { title: "Boiled Eggs", description: "With a side of olives" },
        {
          title: "Almond Flour Pancakes",
          description: "With butter and cinnamon",
        },
        { title: "Chia Yogurt Bowl", description: "With walnuts and berries" },
      ],
      lunch: [
        {
          title: "Grilled Salmon Salad",
          description: "With olive oil dressing",
        },
        { title: "Turkey Lettuce Wraps", description: "With mayo and pickles" },
        { title: "Zoodle Alfredo", description: "With grilled chicken" },
        { title: "Keto Taco Bowl", description: "Ground beef and avocado" },
        { title: "Egg Salad", description: "With cucumbers and cheddar" },
      ],
      dinner: [
        { title: "Chicken Thighs", description: "With roasted broccoli" },
        { title: "Stuffed Bell Peppers", description: "With cheese and beef" },
        {
          title: "Buffalo Chicken Casserole",
          description: "With cauliflower rice",
        },
        { title: "Zucchini Noodles", description: "With pesto and shrimp" },
        {
          title: "Baked Salmon",
          description: "With garlic butter and asparagus",
        },
      ],
    },
    maintenance: {
      breakfast: [
        { title: "Omelet", description: "With bacon and mushrooms" },
        { title: "Keto Granola", description: "With almond milk" },
        { title: "Avocado Toast", description: "On keto bread" },
        { title: "Bulletproof Coffee", description: "With MCT oil and butter" },
        { title: "Egg Muffins", description: "With spinach and cheese" },
      ],
      lunch: [
        {
          title: "Grilled Chicken Bowl",
          description: "With avocado and greens",
        },
        { title: "Keto Burger", description: "Lettuce-wrapped with pickles" },
        { title: "Cobb Salad", description: "With turkey and egg" },
        { title: "Chicken Caesar Salad", description: "With parmesan crisps" },
        {
          title: "Keto Burrito Bowl",
          description: "With steak and sour cream",
        },
      ],
      dinner: [
        {
          title: "Stuffed Zucchini Boats",
          description: "With sausage and cheese",
        },
        { title: "Keto Meatloaf", description: "With mashed cauliflower" },
        { title: "Chicken Alfredo", description: "With keto noodles" },
        { title: "Beef Stir-Fry", description: "With sesame oil and broccoli" },
        { title: "Lamb Chops", description: "With garlic butter green beans" },
      ],
    },
    "muscle-gain": {
      breakfast: [
        { title: "Bacon & Eggs", description: "With cheese and avocado" },
        {
          title: "Keto Protein Shake",
          description: "With almond butter and whey",
        },
        { title: "Steak & Eggs", description: "With olive oil drizzle" },
        { title: "Keto French Toast", description: "With low-carb bread" },
        { title: "Nut Butter Bowl", description: "With chia and flaxseed" },
      ],
      lunch: [
        { title: "Ribeye Salad", description: "With blue cheese and greens" },
        {
          title: "Bunless Cheeseburger",
          description: "With sautéed mushrooms",
        },
        { title: "Pork Chops", description: "With brussels sprouts" },
        { title: "Keto Quesadilla", description: "With egg wraps" },
        {
          title: "Chicken Enchilada Bake",
          description: "With cheese and jalapeño",
        },
      ],
      dinner: [
        { title: "Keto Chili", description: "With cheddar and sour cream" },
        { title: "Salmon Steaks", description: "With asparagus and lemon" },
        { title: "Meatball Skillet", description: "With low-carb marinara" },
        { title: "BBQ Ribs", description: "With keto coleslaw" },
        {
          title: "Grilled Chicken Thighs",
          description: "With pesto and veggies",
        },
      ],
    },
  },

  paleo: {
    "fat-loss": {
      breakfast: [
        { title: "Boiled Eggs", description: "With fresh berries" },
        {
          title: "Banana Omelet",
          description: "With cinnamon and coconut oil",
        },
        { title: "Sweet Potato Hash", description: "With ground turkey" },
        { title: "Chia Pudding", description: "With almond milk and nuts" },
        { title: "Avocado & Smoked Salmon", description: "On a lettuce wrap" },
      ],
      lunch: [
        {
          title: "Grilled Chicken",
          description: "With sweet potato and greens",
        },
        {
          title: "Beef Stir-Fry",
          description: "With broccoli and coconut aminos",
        },
        {
          title: "Turkey Bowl",
          description: "With cauliflower rice and salsa",
        },
        { title: "Shrimp Salad", description: "With olive oil and lemon" },
        { title: "Stuffed Zucchini Boats", description: "With grass-fed beef" },
      ],
      dinner: [
        {
          title: "Turkey Stir-Fry",
          description: "With bell peppers and onions",
        },
        { title: "Salmon with Veggies", description: "Baked in foil" },
        {
          title: "Chicken Thighs",
          description: "With roasted carrots and beets",
        },
        { title: "Beef Kabobs", description: "With grilled zucchini" },
        {
          title: "Paleo Shepherd’s Pie",
          description: "With sweet potato topping",
        },
      ],
    },
    // Add maintenance and muscle-gain sections the same way (can continue if you'd like)
  },

  // Add mediterranean and vegan similarly
};

export const MealExamples: React.FC = () => {
  const [diet, setDiet] = useState("keto");
  const [goal, setGoal] = useState("fat-loss");
  const [mealType, setMealType] = useState<"breakfast" | "lunch" | "dinner">(
    "breakfast"
  );
  const plan = mealPlans[diet]?.[goal];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          🥗 Meal Ideas Generator
        </h1>
        <p className="text-gray-600 text-center max-w-xl mx-auto mb-6">
          Explore sample meals based on your selected diet and goal. These
          aren't calorie-counted, just helpful ideas to inspire your day!
        </p>

        <div className="grid gap-6 sm:grid-cols-2 mb-6">
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

        <div className="mb-6 text-center">
          {["breakfast", "lunch", "dinner"].map((type) => (
            <button
              key={type}
              className={`inline-block px-4 py-2 mx-1 rounded-full ${
                mealType === type
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setMealType(type as any)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {plan?.[mealType]?.map((meal, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg p-4 border-l-4 border-indigo-500"
            >
              <h3 className="text-lg font-bold text-gray-700">{meal.title}</h3>
              <p className="text-gray-600">{meal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
