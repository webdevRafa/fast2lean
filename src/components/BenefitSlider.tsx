// BenefitSlider.tsx
import React from "react";

const benefits = [
  "🔋 Boosts energy & focus",
  "🔥 Helps burn fat more efficiently",
  "🧠 Improves brain function",
  "💪 Reduces inflammation & joint pain",
  "✨ Supports skin health",
  "🧽 Promotes cellular health",
  " 💉 Improves insulin sensitivity — lowers risk of type 2 diabetes",
  " 🌙 Enhances sleep quality",
  " 🦠 Supports gut health & reduces bloating",
  " 💖 Lowers inflammation",
  " 🧘‍♂️ Improves mental clarity",
  " 🧪 Might reduce risk of neurodegenerative diseases (like Alzheimer’s & Parkinson’s)",
  " 🧱 Helps retain lean muscle during fat loss",
  " 🔄 May support longevity & anti-aging",
];

export const BenefitSlider: React.FC = () => {
  return (
    <div data-aos="fade-up" className="relative w-full z-40 overflow-hidden">
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
            className="cursor-pointer text-green-100 min-w-[280px] md:min-w-[300px] mx-2 p-4 text-center"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
