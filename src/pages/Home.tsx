import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { Link } from "react-router-dom";
import brain from "../assets/images/brain.png";
import mood from "../assets/images/mood.png";

export const HomePage: React.FC = () => {
  const { ref: headerRef, visible: headerVisible } = useInViewAnimation();
  const { ref: benefitsRef, visible: benefitsVisible } = useInViewAnimation();
  const { ref: subRef, visible: subVisible } = useInViewAnimation();
  const { ref: buttonRef, visible: buttonVisible } = useInViewAnimation();
  const { ref: hookRef, visible: hookVisible } = useInViewAnimation();
  const { ref: ketoIntroRef, visible: ketoIntroVisible } = useInViewAnimation();
  const { ref: ketoIntroSubRef, visible: ketoIntroSubVisible } =
    useInViewAnimation();
  const { ref: articleHeaderRef, visible: articleHeaderVisible } =
    useInViewAnimation();
  const { ref: articleContentRef, visible: articleContentVisible } =
    useInViewAnimation();
  return (
    <main className="font-sans ">
      {/* Hero Section */}
      <section className="text-white py-24 px-6 text-center hero">
        <h1
          ref={headerRef}
          className={`text-4xl md:text-5xl font-bold mb-4 transition duration-1000 ease-in-out ${
            headerVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[60px] opacity-0"
          }`}
        >
          What You Eat Matters. But When You Eat? That’s the Game-Changer.
        </h1>
        <p
          ref={subRef}
          className={`text-lg md:text-xl max-w-2xl mx-auto transition duration-1000 ease-in-out delay-200 ${
            subVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          Fasting isn’t starving. It’s timing. And it could change how you feel
          — mentally, physically, and emotionally.
        </p>
        <div ref={buttonRef}>
          <button
            id="white"
            className={`mt-8 cta-dark text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-300 transition duration-1300 ease-out delay-0 md:delay-3000 ${
              buttonVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[60px] opacity-0"
            }`}
          >
            See the Benefits
          </button>
        </div>
      </section>

      {/* Why Fasting Matters */}
      <section className="bg-white py-20 px-6 text-center shadow-md z-40 relative">
        <div
          ref={hookRef}
          className={`transition duration-1000 delay-0 md:delay-1500 ${
            hookVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[-100px] opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">One Habit. Many Benefits.</h2>
          <p className="max-w-3xl mx-auto text-lg mb-10">
            Fasting improves energy, focus, sleep, digestion, insulin
            sensitivity, and even inflammation. All from changing your eating
            window — not your whole life.
          </p>
        </div>
        <div
          ref={benefitsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
        >
          <div
            className={`benefit p-6 rounded-xl transition duration-800 delay-0 md:delay-2000 ${
              benefitsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            🔋 Boosts energy & focus
          </div>
          <div
            className={`benefit p-6 rounded-xl transition duration-800 delay-0 md:delay-2100 ${
              benefitsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            🔥 Helps burn fat more efficiently
          </div>
          <div
            className={`benefit p-6 rounded-xl transition duration-800 delay-0 md:delay-2200 ${
              benefitsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            🧠 Improves brain function
          </div>
          <div
            className={`benefit will-change-transform p-6 rounded-xl transition duration-800 delay-0 md:delay-2300 ${
              benefitsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            💪 Reduces inflammation & joint pain
          </div>
          <div
            className={`benefit p-6 rounded-xl transition duration-800 delay-0 md:delay-2400 ${
              benefitsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            🕒 Encourages discipline & food awareness
          </div>
        </div>
      </section>

      {/* Misconception Section */}
      <section className="py-20 md:py-30 px-6 text-center hero">
        <h2 className="text-3xl font-bold mb-4">
          “But Isn’t Fasting Just Starving Yourself?”
        </h2>
        <p className="max-w-3xl mx-auto text-lg">
          Not at all. Fasting isn’t about eating <strong>less</strong> — it’s
          about eating <strong>smarter</strong>. You still consume your daily
          calories, just within a smaller eating window. That small shift gives
          your body time to repair, balance hormones, and function the way it
          was meant to.
        </p>
      </section>

      {/* Article Library Preview */}
      <section
        className={`bg-linear-to-t from-green-900 to-gray-50  px-6 shadow-md z-40 relative transition duration-00 ease-in-out`}
      >
        <h2
          ref={articleHeaderRef}
          className={`max-w-[300px] md:max-w-[400px] bg-white shadow-md rounded-md py-5 translate-y-[-50%] px-2 text-xl md:text-3xl font-bold lg:ml-30 transition duration-1200 ease-in-out ${
            articleHeaderVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[-200px] opacity-0"
          }`}
        >
          The Fast Track to Wellness
        </h2>
        <div
          ref={articleContentRef}
          className={`grid md:grid-cols-3 gap-4 w-full max-w-[1200px] mx-auto transition duration-1000 ease-in-out ${
            articleContentVisible
              ? "translate-y-10 opacity-100"
              : "translate-y-[80px] opacity-0"
          }`}
        >
          <div className="md:col-span-2 md:row-span-2 bg-white shadow-md  p-6 rounded-xl">
            <section className="bg-white py-5 md:py-20 px-2 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-10">
                10 Real Benefits of Intermittent Fasting
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left text-gray-800 list-disc list-inside">
                <li>Mental clarity & sharper focus</li>
                <li>Fat loss and better body composition</li>
                <li>Improved insulin sensitivity</li>
                <li>Reduced inflammation</li>
                <li>Cellular cleanup (autophagy)</li>
                <li>Better mitochondrial energy production</li>
                <li>Hormone balance (insulin, ghrelin, HGH)</li>
                <li>Improved digestion and gut rest</li>
                <li>Better sleep quality</li>
                <li>Healthier relationship with food</li>
              </ul>

              <div className="text-center mt-10">
                <Link
                  to={`/articles/10-benefits-of-fasting`}
                  className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300"
                >
                  Read the Full Article →
                </Link>
              </div>
            </section>
          </div>
          <div className="bg-white shadow-sm hover:scale-105 transition duration-300 cursor-pointer p-6 rounded-xl">
            <Link to={`/articles/coding-with-fasting`}>
              <h3 className="text-xl font-semibold mb-2">
                How fasting helped my focus as a Developer
              </h3>
              <div className="w-full h-[100px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={brain}
                  alt=""
                />
              </div>
              <p className="text-gray-700 mt-2">
                Personal story of mental clarity, productivity, and better
                coding sessions.
              </p>
            </Link>
          </div>
          <div className="bg-white shadow-sm hover:scale-105 transition duration-300 cursor-pointer p-6 rounded-xl">
            <Link to={`/articles/bdnf-and-depression`}>
              <h3 className="text-xl font-semibold mb-2">
                How intermittent fasting could help with depression
              </h3>
              <div className="w-full h-[100px] overflow-hidden">
                <img className="w-full h-full object-cover" src={mood} alt="" />
              </div>
              <p className="text-gray-700">
                Exploring a natural, science-backed angle to support mental
                health — beyond meds.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Block */}
      <section className="hero py-30 px-6 text-center">
        <div ref={ketoIntroRef}>
          <h2
            className={`text-3xl font-bold mb-6 transition duration-1000 ease-in-out ${
              ketoIntroVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[30px] opacity-0"
            }`}
          >
            Intermittent fasting is powerful — but pairing it with the right
            fuel takes it even further.
          </h2>
        </div>
        <div ref={ketoIntroSubRef}>
          <p
            className={`max-w-2xl text-lg mx-auto mb-10 transition duration-1000 ease-in-out ${
              ketoIntroSubVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[30px] opacity-0"
            }`}
          >
            That’s where the keto lifestyle comes in. When your body learns to
            burn fat for fuel, you tap into sustained energy, mental clarity,
            and fewer crashes. Let’s break it down.
          </p>
        </div>
      </section>
      {/* keto section goes below */}

      {/* Newsletter Signup */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want a Simpler Start to Fasting?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Get my free 7-day Fasting Jumpstart Guide. Everything I wish I had
          when I started — simple, real, and zero fluff.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your name"
            className="p-3 rounded-xl border w-full"
          />
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded-xl border w-full"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300"
          >
            Send Me the Guide
          </button>
        </form>
      </section>
    </main>
  );
};
