import { Link } from "react-router-dom";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { BenefitSlider } from "../components/BenefitSlider";
import clock from "../assets/images/clock.jpg";
import brainGut from "../assets/images/brain-gut.png";

export const HomePage: React.FC = () => {
  const { ref: heroRef, visible: heroVisible } = useInViewAnimation();
  const { ref: moodRef, visible: moodVisible } = useInViewAnimation();
  const { ref: dietsRef, visible: dietsVisible } = useInViewAnimation();
  const { ref: toolsRef, visible: toolsVisible } = useInViewAnimation();
  const { ref: articlesRef, visible: articlesVisible } = useInViewAnimation();

  return (
    <main className="font-sans text-gray-900">
      {/* HERO */}
      <section className="bg-white py-24 px-6 hero">
        <div
          ref={heroRef}
          className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 transition duration-1000 ease-in-out ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What You Eat Matters. But When You Eat? That’s the Game-Changer.
            </h1>
            <p className="text-lg mb-6">
              Learn about Intermittent Fasting and what it could do for you —
              mentally, physically, and emotionally.
            </p>
            <Link
              to="/diets/intermittent-fasting"
              className="inline-block cta-dark text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Learn About IF →
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={clock}
              alt="Brain clarity"
              className="w-[300px] md:w-[400px] h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <div className="bg-white">
        <BenefitSlider />
      </div>

      {/* MOOD SECTION */}
      <section
        ref={moodRef}
        className={`bg-white py-5 px-6 transition duration-1000 ease-in-out ${
          moodVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-6xl mx-auto md:flex items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={brainGut}
              alt="Mood & hormones"
              className="rounded-xl shadow-lg md:max-w-[360px] lg:max-w-[400px] md:translate-y-[20%]"
            />
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">
              Fasting Isn’t Just Physical
            </h2>
            <p className="text-lg mb-4">
              Your energy. Your mood. Your cravings. It’s all connected. Fasting
              helps rebalance hormones like ghrelin and leptin so your body —
              and your mind — finally get in sync.
            </p>
            <Link
              to="/articles"
              className="text-blue-700 underline font-medium"
            >
              Explore the benefits →
            </Link>
          </div>
        </div>
      </section>

      {/* DIET STACK */}
      <section
        ref={dietsRef}
        className={`bg-gradient-to-t from-green-800 to-white py-24 px-6 transition duration-1000 ease-in-out ${
          dietsVisible ? "opacity-100" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Explore What Works For You
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          Once you’ve got your timing down, here are some styles of eating that
          pair beautifully with fasting.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            to="/diets/ketogenic-diet"
            className="bg-white p-6 rounded-xl shadow hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold mb-2">🥓 Ketogenic</h3>
            <p>
              Low-carb, high-fat fuel. Great with fasting for energy + focus.
            </p>
          </Link>
          <Link
            to="/diets/mediterranean-diet"
            className="bg-white p-6 rounded-xl shadow hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold mb-2">🌿 Mediterranean</h3>
            <p>Olive oil, fish, greens — simple and sustainable.</p>
          </Link>
          <Link
            to="/diets/paleo-diet"
            className="bg-white p-6 rounded-xl shadow hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold mb-2">🦴 Paleo</h3>
            <p>No grains, no gimmicks. Eat like a human was designed to.</p>
          </Link>
          <Link
            to="/diets/vegan-diet"
            className="bg-white p-6 rounded-xl shadow hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold mb-2">🌱 Vegan</h3>
            <p>Plant-based without losing performance or nutrients.</p>
          </Link>
          <Link
            to="/diets/intermittent-fasting"
            className="text-white underline col-span-full text-center"
          >
            Learn About Intermittent Fasting →
          </Link>
          <Link
            to="/diets/compare"
            className="text-white underline col-span-full text-center"
          >
            Compare All Diets →
          </Link>
        </div>
      </section>

      {/* ARTICLES */}
      <section
        ref={articlesRef}
        className={`py-24 px-6 hero transition duration-1000 ease-in-out ${
          articlesVisible ? "opacity-100" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Real Stories, Honest Wins
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            to="/articles/10-benefits-of-fasting"
            className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              10 Real Benefits of Fasting
            </h3>
            <p>
              From better sleep to sharper thinking — it’s more than weight
              loss.
            </p>
          </Link>
          <Link
            to="/articles/coding-with-fasting"
            className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              How I Coded Better by Eating Later
            </h3>
            <p>
              Fasting didn’t make me a genius — it helped me stay clear and
              sharp.
            </p>
          </Link>
          <Link
            to="/articles/bdnf-and-depression"
            className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Fasting & Depression: A Brain Chemistry Shift
            </h3>
            <p>BDNF, neurogenesis, and why your mood might improve.</p>
          </Link>
        </div>
        <Link
          to="/articles"
          className="block mt-6 text-center text-blue-700 underline font-medium"
        >
          Browse All Articles →
        </Link>
      </section>

      {/* TOOLS */}
      <section
        ref={toolsRef}
        className={`bg-gray-900 text-white py-24 px-6 transition duration-1000 ease-in-out ${
          toolsVisible ? "opacity-100" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-6">
          Tools I Keep Coming Back To
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg">
          No fluff. Just the gear, supplements, and simple routines that help
          make fasting feel easy and sustainable.
        </p>
        <div className="text-center">
          <Link
            to="/resources"
            className="inline-block bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 transition"
          >
            Explore My Toolkit
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-gradient-to-br from-white to-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Where You Are</h2>
        <p className="max-w-xl mx-auto mb-6 text-lg">
          I’ll send you my 7-day fasting guide — no rules, no guilt, just tools
          to get started feeling better.
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
