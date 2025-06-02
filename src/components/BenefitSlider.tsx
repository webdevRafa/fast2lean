// BenefitSlider.tsx
import React from "react";

const benefits = [
  "🔋 Boosts energy & focus",
  "🔥 Helps burn fat more efficiently",
  "🧠 Improves brain function",
  "💪 Reduces inflammation & joint pain",
  "🕒 Encourages discipline & food awareness",
  "🧽 Promotes autophagy — cellular cleanup and renewal",
  " 🧬 Supports mitochondrial health — better energy production at the cellular level",
  " 💉 Improves insulin sensitivity — lowers risk of type 2 diabetes",
  " 🌙 Enhances sleep quality by improving melatonin rhythm and hormone balance",
  " 🦠 Supports gut rest & digestive health — reduces bloating and improves gut lining",
  " ⛑️ May trigger hormesis — making your body more resilient to stress",
  " 💖 Lowers inflammation markers linked to heart disease",
  " 🔄 Balances hormones — especially ghrelin, leptin, and growth hormone",
  " 🧘‍♂️ Improves mental clarity & calm due to stable blood sugar",
  " 💭 Promotes mindful eating — resets your relationship with hunger",
  " 🧪 Might reduce risk of neurodegenerative diseases (like Alzheimer’s & Parkinson’s)",
  " 🧱 Helps retain lean muscle during fat loss (especially when paired with strength training)",
  " 📈 Increases human growth hormone (HGH) — especially during longer fasts",
  " 🔄 May support longevity & anti-aging through metabolic regulation",
  " 🎯 Reduces caloric intake naturally without strict calorie counting",
];

export const BenefitSlider: React.FC = () => {
  return (
    <div className="relative hero w-full overflow-hidden py-12">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .slider-track:hover {
            animation-play-state: paused;
          }
          .slider-track {
            animation: scroll 200s linear infinite;
          }
        `}
      </style>

      <div className="flex w-max slider-track">
        {[...benefits, ...benefits].map((text, i) => (
          <div
            key={i}
            className="cursor-pointer min-w-[280px] md:min-w-[300px] mx-2 p-4 rounded-xl bg-white shadow-md text-center"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
