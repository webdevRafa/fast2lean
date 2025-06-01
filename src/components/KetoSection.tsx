import { Link } from "react-router-dom";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export const KetoSection: React.FC = () => {
  const { ref: ketoContentRef, visible: ketoContentVisible } =
    useInViewAnimation();
  return (
    <section
      ref={ketoContentRef}
      className="bg-linear-to-t from-green-900 to-gray-50 text-center"
    >
      <div className="max-w-6xl mx-auto bg-white pb-20">
        {/* Section Header */}
        <header
          className={`mb-10 transition duration-1000 ease-in-out ${
            ketoContentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[30px] opacity-0"
          }`}
        >
          <h2
            id="white"
            className="text-3xl md:text-4xl font-bold mb-4 translate-y-[-50%] p-2 cta-dark max-w-[800px] mx-auto"
          >
            Keto: Clean Fuel for a Leaner Life
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Keto isn’t just about cutting carbs — it’s about teaching your body
            to burn fat for fuel. With the right foods and a focus on quality
            fats and proteins, you can enjoy steady energy, better focus, and
            real metabolic health.
          </p>
        </header>

        {/* Benefits Grid */}
        <ul className="grid md:grid-cols-2 gap-6 text-left text-gray-800 max-w-4xl mx-auto mb-10">
          <li>✔ Stable blood sugar and insulin levels</li>
          <li>✔ Enhanced fat-burning metabolism</li>
          <li>✔ Reduced cravings and better appetite control</li>
          <li>✔ Improved energy levels throughout the day</li>
          <li>✔ Clearer mental focus and cognitive support</li>
          <li>✔ Reduced inflammation in the body</li>
          <li>✔ May help support hormone and thyroid function</li>
          <li>✔ Easier transition into intermittent fasting</li>
          <li>✔ Supports heart and metabolic health</li>
          <li>✔ Encourages cleaner eating and label awareness</li>
        </ul>

        {/* CTA Button */}
        <div>
          <Link
            to={`/articles/what-is-keto`}
            className="bg-black px-6 py-3 rounded-xl text-white"
          >
            Read the full Keto article
          </Link>
        </div>
      </div>
    </section>
  );
};
