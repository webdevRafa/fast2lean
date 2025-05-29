import fast2lean from "../assets/logos/fast2lean-darker.svg";
import { Link } from "react-router-dom";
import mission from "../assets/svgs/mishi.svg";
import roots from "../assets/svgs/roots.svg";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export const Home: React.FC = () => {
  const { ref: missionRef, visible: missionVisible } = useInViewAnimation();
  const { ref: brandmessageRef, visible: brandmessageVisible } =
    useInViewAnimation();

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <section
        id="hero"
        className="text-center  h-[230px] flex items-center justify-center"
      >
        <div>
          <img className="h-[20px] mx-auto mb-0" src={fast2lean} alt="" />
          <p className="text-xl max-w-2xl mx-auto leading-relaxed opacity-40">
            Fast forward your health.
          </p>
        </div>
      </section>

      {/* Brand Message */}
      <section
        id="brand-message"
        ref={brandmessageRef}
        className={`text-center flex items-center justify-center mb-20 transition duration-1200 md:duration-600 ease-out ${
          brandmessageVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[40px]"
        }`}
      >
        <div>
          <img className="w-[100px] mx-auto mb-0" src={roots} alt="" />
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            I started Fast2Lean to share what helped me feel better — fasting,
            keto, smart supplements, and good habits that are sustainable. If
            you're looking for simple ways to level up your health, you're in
            the right place.
          </p>
        </div>
      </section>
      {/* Mission Section */}
      <section
        id="mission"
        ref={missionRef}
        className={`bg-white rounded-xl mb-10 p-8 shadow-md transition duration-1000 ease-in-out ${
          missionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[30px]"
        }`}
      >
        <img className="w-[200px] mb-5" src={mission} alt="" />

        <p className="text-lg leading-relaxed">
          To share what’s worked for me on my journey to better health —
          physically and mentally. Through fasting, keto, and smart
          supplementation, I hope to empower others to take control of their
          well-being and discover a better quality of life.
        </p>
      </section>

      {/* About Me Section */}
      <article id="about" className="p-6 mb-10">
        <h2 className="text-3xl font-semibold mb-4 ">About Me</h2>
        <p className="text-lg mb-4">
          Hey, I’m Rafa. I created Fast2Lean because I’ve come to believe that
          health is the foundation for everything — how we think, feel, move,
          and show up in life.
        </p>
        <p className="text-lg mb-4">
          After years of trying different workouts and diets, nothing impacted
          me quite like intermittent fasting. It changed not just my body, but
          how I operate day to day — with more focus, more control, and a deep
          appreciation for what the body can do when it’s supported properly.
        </p>
        <p className="text-lg">
          A lot of what I’ve learned came from others being generous with their
          knowledge. Fast2Lean is my way of paying it forward — passing along
          what’s helped me, in case it helps you too.
        </p>
      </article>

      {/* Call to Action Section */}
      <section id="cta" className="text-center mb-20  py-20 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">START YOUR JOURNEY</h2>
        <p className="text-lg mb-6">
          Check out the blog or browse products I personally recommend.
        </p>
        <div className="flex flex-col gap-4 md:flex-row justify-center">
          <Link
            to="/intermittent-fasting"
            className="px-6 py-3 cta-dark text-white rounded-full hover:bg-gray-800 transition"
          >
            LEARN ABOUT FASTING
          </Link>
          <Link
            to="/products"
            className="px-6 py-3 border border-black rounded-full hover:bg-gray-100 transition"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </main>
  );
};
