import { useInViewAnimation } from "../hooks/useInViewAnimation";

export const HomePage: React.FC = () => {
  const { ref: benefit1Ref, visible: benefit1Visible } = useInViewAnimation();
  const { ref: benefit2Ref, visible: benefit2Visible } = useInViewAnimation();
  const { ref: benefit3Ref, visible: benefit3Visible } = useInViewAnimation();
  const { ref: benefit4Ref, visible: benefit4Visible } = useInViewAnimation();
  const { ref: benefit5Ref, visible: benefit5Visible } = useInViewAnimation();
  const { ref: headerRef, visible: headerVisible } = useInViewAnimation();
  const { ref: subRef, visible: subVisible } = useInViewAnimation();
  const { ref: buttonRef, visible: buttonVisible } = useInViewAnimation();
  const { ref: hookRef, visible: hookVisible } = useInViewAnimation();
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
          You Don’t Need More Willpower — Just Better Timing.
        </h1>
        <p
          ref={subRef}
          className={`text-lg md:text-xl max-w-2xl mx-auto transition duration-1000 ease-in-out delay-200 ${
            subVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          Intermittent fasting isn't about eating less — it's about{" "}
          <span className="font-semibold">timing</span>. Regain control of your
          energy, focus, and body.
        </p>
        <div ref={buttonRef}>
          <button
            id="white"
            className={`mt-8 cta-dark text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-300 transition duration-1300 ease-out delay-0 md:delay-2500 ${
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
          <h2 className="text-3xl font-bold mb-4">
            Fasting Isn’t a Trend — It’s a Tool That Can Change Your Life
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-10">
            Most people associate fasting with punishment or restriction — but
            that's not what this is. Intermittent fasting is about syncing with
            your body’s natural rhythms. It can support focus, joint health, fat
            loss, better digestion, and even reduce reliance on certain
            medications (done right and responsibly).
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            ref={benefit1Ref}
            className={`benefit p-6 rounded-xl transition duration-800 delay-0 md:delay-1600 ${
              benefit1Visible
                ? "translate-y-0 opacity-100 translate-x-0"
                : "translate-y-[-400px] translate-x-[-240px] opacity-0"
            }`}
          >
            🔋 Boosts energy & focus
          </div>
          <div
            ref={benefit2Ref}
            className={`benefit p-6 rounded-xl transition duration-800 delay-0 md:delay-1700 ${
              benefit2Visible
                ? "translate-y-0 opacity-100"
                : "translate-y-[-400px] opacity-0"
            }`}
          >
            🔥 Helps burn fat more efficiently
          </div>
          <div
            ref={benefit3Ref}
            className={`benefit p-6 rounded-xl transition duration-800 delay-0 md:delay-1800 ${
              benefit3Visible
                ? "translate-y-0 opacity-100 translate-x-0"
                : "translate-y-[-400px] translate-x-[240px] opacity-0"
            }`}
          >
            🧠 Improves brain function
          </div>
          <div
            ref={benefit4Ref}
            className={`benefit will-change-transform p-6 rounded-xl transition duration-800 delay-0 md:delay-1900 ${
              benefit4Visible
                ? "translate-y-0 opacity-100 translate-x-0"
                : "translate-y-[200px] translate-x-[-240px] opacity-0"
            }`}
          >
            💪 Reduces inflammation & joint pain
          </div>
          <div
            ref={benefit5Ref}
            className={`benefit p-6 rounded-xl transition duration-800 delay-0 md:delay-2000 ${
              benefit5Visible
                ? "translate-y-0 opacity-100 translate-x-0"
                : "translate-y-[200px] opacity-0"
            }`}
          >
            🕒 Encourages discipline & food awareness
          </div>
        </div>
        <button
          id="white"
          className="mt-10 cta-dark font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300"
        >
          Learn: What Fasting Can Do For You →
        </button>
      </section>

      {/* Misconception Section */}
      <section className="py-20 px-6 text-center hero">
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
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          A Better Life Starts with Better Habits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-body shadow-sm hover:scale-105 transition duration-300 cursor-pointer p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              10 Real Benefits of Intermittent Fasting
            </h3>
            <p className="text-gray-700">
              Learn how fasting improves focus, metabolism, and overall quality
              of life.
            </p>
          </div>
          <div className="bg-body shadow-sm hover:scale-105 transition duration-300 cursor-pointer p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              How Fasting Helped My Focus As a Developer
            </h3>
            <p className="text-gray-700">
              Personal story of mental clarity, productivity, and better coding
              sessions.
            </p>
          </div>
          <div className="bg-body shadow-sm hover:scale-105 transition duration-300 cursor-pointer p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              Joint Pain & Fasting: What I’ve Learned So Far
            </h3>
            <p className="text-gray-700">
              How fasting helped me reduce inflammation and feel better
              physically.
            </p>
          </div>
        </div>
      </section>

      {/* Product Block */}
      <section className="hero py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Tools That Make Fasting Easier
        </h2>
        <p className="max-w-2xl mx-auto mb-10">
          I only recommend what I actually use. These fasting drinks,
          supplements, and books helped me stay consistent when I was starting
          out.
        </p>
        <button
          id="white"
          className="cta-dark px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300"
        >
          Browse Recommended Products →
        </button>
      </section>

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
