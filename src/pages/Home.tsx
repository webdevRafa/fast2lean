import fast2lean from "../assets/logos/fast2lean-darker.svg";
export const Home: React.FC = () => {
  return (
    <>
      <main className="home-page">
        {/* Hero Section */}
        <section id="hero" className="py-20 text-center relative ">
          <div className="relative z-40">
            <img
              className="h-[35px] block mx-auto mb-3"
              src={fast2lean}
              alt=""
            />
            <p className="text-xl max-w-2xl mx-auto">
              Your guide to feeling sharper, stronger, and leaner — through
              intermittent fasting, keto, and smart habits that stick.
            </p>
            {/* CTA button or image could go here */}
          </div>
        </section>

        {/* Brand Message */}
        <section id="brand-message" className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 cta max-w-[250px] py-1 px-2">
            What We're About
          </h2>
          <p className="text-lg leading-relaxed">
            I started <span className="font-bold">Fast2Lean</span> to share what
            actually helped me feel better — fasting, keto, smart supplements,
            and real habits that stick. If you're looking for simple ways to
            level up your health, you're in the right place.
          </p>
        </section>

        {/* Brand Mission */}
        <section
          id="mission"
          className="py-16 px-4 max-w-4xl mx-auto bg-gray-50 shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            My mission with Fast2Lean is to share what’s actually worked for me
            on my journey to better health — physically and mentally. Through
            fasting, keto, and smart supplementation, I hope to empower others
            to take control of their well-being and discover a lifestyle that
            truly feels good.
          </p>
        </section>

        {/* About Me */}
        <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hey, I’m Rafa. I created Fast2Lean because I’ve come to believe that
            real health is the foundation for everything — how we think, feel,
            move, and show up in life...
          </p>
          {/* you can keep the rest of the About Me paragraph here */}
        </section>
      </main>
    </>
  );
};
