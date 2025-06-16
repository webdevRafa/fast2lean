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
    maintenance: {
      breakfast: [
        {
          title: "Scrambled Eggs",
          description: "With spinach and sweet potatoes",
        },
        { title: "Banana Pancakes", description: "Made with almond flour" },
        {
          title: "Avocado & Smoked Salmon",
          description: "On sweet potato slices",
        },
        {
          title: "Chia Pudding",
          description: "With almond milk and fresh fruit",
        },
        { title: "Bacon & Berries", description: "With a side of nuts" },
      ],
      lunch: [
        {
          title: "Grilled Chicken Salad",
          description: "With olive oil and seeds",
        },
        {
          title: "Beef Lettuce Wraps",
          description: "With avocado and veggies",
        },
        {
          title: "Paleo Chili",
          description: "With sweet potatoes and ground turkey",
        },
        { title: "Zucchini Noodles", description: "With meat sauce" },
        {
          title: "Stuffed Bell Peppers",
          description: "With cauliflower rice and beef",
        },
      ],
      dinner: [
        { title: "Pork Chops", description: "With sautéed apples and cabbage" },
        { title: "Baked Salmon", description: "With asparagus and lemon" },
        {
          title: "Roasted Chicken",
          description: "With brussels sprouts and carrots",
        },
        { title: "Stuffed Sweet Potatoes", description: "With shredded beef" },
        {
          title: "Beef Stir-Fry",
          description: "With mixed veggies and coconut oil",
        },
      ],
    },
    "muscle-gain": {
      breakfast: [
        { title: "Steak & Eggs", description: "With roasted veggies" },
        { title: "Sweet Potato Hash", description: "With sausage and eggs" },
        {
          title: "Almond Butter Smoothie",
          description: "With banana and spinach",
        },
        { title: "Egg Muffins", description: "With veggies and ground beef" },
        {
          title: "Paleo Power Bowl",
          description: "With nuts, seeds, and fruit",
        },
      ],
      lunch: [
        {
          title: "Grilled Turkey Burger",
          description: "With avocado and salad",
        },
        {
          title: "Paleo Burrito Bowl",
          description: "With beef, cauliflower rice, and guac",
        },
        { title: "Roast Beef Wraps", description: "Using lettuce leaves" },
        {
          title: "Chicken Drumsticks",
          description: "With sweet potato wedges",
        },
        {
          title: "Ground Bison Bowl",
          description: "With roasted root veggies",
        },
      ],
      dinner: [
        { title: "Lamb Chops", description: "With rosemary carrots" },
        { title: "Stuffed Zucchini", description: "With chicken and herbs" },
        {
          title: "BBQ Chicken Thighs",
          description: "With mixed greens and avocado",
        },
        { title: "Paleo Sloppy Joe", description: "With baked sweet potato" },
        {
          title: "Grilled Steak",
          description: "With mushrooms and roasted squash",
        },
      ],
    },
  },
  mediterranean: {
    "fat-loss": {
      breakfast: [
        { title: "Greek Yogurt", description: "With berries and chia seeds" },
        { title: "Oatmeal", description: "With walnuts and cinnamon" },
        {
          title: "Poached Eggs",
          description: "On whole grain toast with tomatoes",
        },
        {
          title: "Smoothie",
          description: "With spinach, banana, and flaxseed",
        },
        { title: "Cottage Cheese", description: "With sliced peaches" },
      ],
      lunch: [
        { title: "Tuna Salad", description: "With olive oil and chickpeas" },
        { title: "Lentil Soup", description: "With whole grain roll" },
        { title: "Hummus Wrap", description: "With greens and cucumbers" },
        { title: "Stuffed Bell Peppers", description: "With quinoa and feta" },
        { title: "Grilled Shrimp", description: "With cucumber tomato salad" },
      ],
      dinner: [
        { title: "Baked Cod", description: "With olives and roasted tomatoes" },
        { title: "Vegetable Stir-Fry", description: "With brown rice" },
        { title: "Chicken Skewers", description: "With tzatziki and greens" },
        { title: "Stuffed Eggplant", description: "With garlic and herbs" },
        {
          title: "Whole Grain Pasta",
          description: "With marinara and grilled veggies",
        },
      ],
    },
    maintenance: {
      breakfast: [
        {
          title: "Whole Grain Toast",
          description: "With olive oil and poached egg",
        },
        { title: "Greek Yogurt", description: "With granola and fruit" },
        { title: "Boiled Eggs", description: "With fruit and cucumber" },
        { title: "Avocado Toast", description: "With herbs and tomato" },
        { title: "Chia Bowl", description: "With dates and walnuts" },
      ],
      lunch: [
        { title: "Grilled Chicken Salad", description: "With olives and feta" },
        {
          title: "Pasta Salad",
          description: "With veggies and lemon vinaigrette",
        },
        { title: "Lentil Bowl", description: "With roasted carrots" },
        { title: "Falafel Plate", description: "With hummus and tabbouleh" },
        { title: "Stuffed Tomatoes", description: "With rice and herbs" },
      ],
      dinner: [
        { title: "Salmon Filet", description: "With quinoa and spinach" },
        { title: "Moussaka", description: "With eggplant and lamb" },
        { title: "Roasted Chicken", description: "With potatoes and olives" },
        { title: "Seafood Stew", description: "With garlic and white wine" },
        { title: "Pesto Pasta", description: "With arugula and pine nuts" },
      ],
    },
    "muscle-gain": {
      breakfast: [
        {
          title: "Protein Smoothie",
          description: "With Greek yogurt and oats",
        },
        {
          title: "Egg & Veggie Scramble",
          description: "With whole grain toast",
        },
        { title: "Peanut Butter Oatmeal", description: "With banana slices" },
        {
          title: "Avocado Toast",
          description: "With cottage cheese and herbs",
        },
        {
          title: "Mediterranean Omelet",
          description: "With tomatoes, olives, and feta",
        },
      ],
      lunch: [
        { title: "Grilled Chicken Bowl", description: "With rice and hummus" },
        {
          title: "Tuna Pasta Salad",
          description: "With greens and lemon dressing",
        },
        { title: "Beef Pita Wrap", description: "With garlic sauce" },
        { title: "Eggplant Wrap", description: "With quinoa and goat cheese" },
        {
          title: "Grain Bowl",
          description: "With falafel, chickpeas, and tahini",
        },
      ],
      dinner: [
        {
          title: "Steak & Roasted Veggies",
          description: "With herbed potatoes",
        },
        {
          title: "Stuffed Peppers",
          description: "With ground beef and brown rice",
        },
        {
          title: "Grilled Swordfish",
          description: "With lemon parsley marinade",
        },
        { title: "Chicken Tagine", description: "With olives and apricots" },
        { title: "Seafood Orzo", description: "With spinach and tomato" },
      ],
    },
  },
  vegan: {
    "fat-loss": {
      breakfast: [
        {
          title: "Chia Pudding",
          description: "With almond milk and strawberries",
        },
        { title: "Tofu Scramble", description: "With spinach and onions" },
        {
          title: "Overnight Oats",
          description: "With flaxseed, banana, and berries",
        },
        {
          title: "Green Smoothie",
          description: "With kale, pineapple, and chia",
        },
        {
          title: "Whole Grain Toast",
          description: "With almond butter and hemp seeds",
        },
      ],
      lunch: [
        {
          title: "Quinoa Salad",
          description: "With black beans, avocado, and lime",
        },
        {
          title: "Lentil Bowl",
          description: "With roasted sweet potato and tahini",
        },
        {
          title: "Vegan Sushi",
          description: "With cucumber, carrot, and avocado",
        },
        { title: "Tempeh Wrap", description: "With hummus and lettuce" },
        {
          title: "Buddha Bowl",
          description: "With chickpeas and roasted veggies",
        },
      ],
      dinner: [
        { title: "Zucchini Noodles", description: "With tomato lentil sauce" },
        {
          title: "Stuffed Bell Peppers",
          description: "With quinoa and black beans",
        },
        {
          title: "Cauliflower Stir-Fry",
          description: "With tofu and coconut aminos",
        },
        {
          title: "Vegan Chili",
          description: "With beans, tomatoes, and avocado",
        },
        { title: "Mushroom Lentil Loaf", description: "With steamed broccoli" },
      ],
    },
    maintenance: {
      breakfast: [
        {
          title: "Tofu Scramble",
          description: "With spinach and bell peppers",
        },
        { title: "Chia Pudding", description: "With almond milk and banana" },
        { title: "Overnight Oats", description: "With flaxseed and berries" },
        { title: "Avocado Toast", description: "With tomato and hemp seeds" },
        {
          title: "Smoothie Bowl",
          description: "With almond butter and granola",
        },
      ],
      lunch: [
        {
          title: "Lentil Salad",
          description: "With cucumber, tomato, and olive oil",
        },
        {
          title: "Sweet Potato & Chickpea Bowl",
          description: "With tahini drizzle",
        },
        {
          title: "Stuffed Bell Peppers",
          description: "With quinoa and black beans",
        },
        {
          title: "Hummus Wrap",
          description: "With spinach and shredded carrots",
        },
        {
          title: "Grilled Veggie Bowl",
          description: "With brown rice and avocado",
        },
      ],
      dinner: [
        {
          title: "Black Bean Tacos",
          description: "With guacamole and cabbage",
        },
        {
          title: "Vegan Stir-Fry",
          description: "With tofu, broccoli, and sesame oil",
        },
        { title: "Lentil Bolognese", description: "Over whole wheat pasta" },
        {
          title: "Stuffed Zucchini Boats",
          description: "With mushrooms and lentils",
        },
        {
          title: "Coconut Curry",
          description: "With chickpeas and sweet potato",
        },
      ],
    },

    "muscle-gain": {
      breakfast: [
        {
          title: "High-Protein Smoothie",
          description: "With pea protein, oats, and almond butter",
        },
        { title: "Tofu & Black Bean Scramble", description: "With avocado" },
        { title: "Chickpea Pancakes", description: "With spinach and tahini" },
        { title: "Protein Oatmeal", description: "With banana and chia seeds" },
        {
          title: "Tempeh Breakfast Wrap",
          description: "With veggies and hummus",
        },
      ],
      lunch: [
        {
          title: "Tempeh Buddha Bowl",
          description: "With quinoa and roasted veggies",
        },
        {
          title: "Seitan Stir-Fry",
          description: "With broccoli and coconut aminos",
        },
        { title: "Lentil Curry", description: "With brown rice and greens" },
        {
          title: "Black Bean Burrito Bowl",
          description: "With avocado and lime",
        },
        {
          title: "Vegan Power Bowl",
          description: "With tofu, farro, and tahini sauce",
        },
      ],
      dinner: [
        {
          title: "Vegan Chili",
          description: "With lentils, beans, and avocado",
        },
        {
          title: "Stuffed Sweet Potatoes",
          description: "With black beans and corn",
        },
        {
          title: "BBQ Tempeh",
          description: "With mashed cauliflower and greens",
        },
        { title: "Vegan Pasta", description: "With walnut pesto and broccoli" },
        { title: "Tofu Tikka Masala", description: "With brown rice and peas" },
      ],
    },
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
                  ? "bg-gray-950 text-white"
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
              className="bg-gray-100 rounded-lg p-4 border-l-4 border-[#c1272d]"
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
