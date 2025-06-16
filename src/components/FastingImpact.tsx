import { useCountUp } from "react-countup";

export const FastingImpact: React.FC = () => {
  useCountUp({
    ref: "counter-0",
    end: 3,
    enableScrollSpy: true,
    scrollSpyDelay: 100,
  });
  useCountUp({
    ref: "counter-1",
    end: 50,
    enableScrollSpy: true,
    scrollSpyDelay: 100,
  });
  useCountUp({
    ref: "counter-2",
    end: 20,
    enableScrollSpy: true,
    scrollSpyDelay: 100,
  });
  useCountUp({
    ref: "counter-3",
    end: 500,
    enableScrollSpy: true,
    scrollSpyDelay: 100,
  });
  useCountUp({
    ref: "counter-4",
    end: 2,
    enableScrollSpy: true,
    scrollSpyDelay: 100,
  });
  return (
    <>
      <section className="bg-[#0c0f1a] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-4 text-white! underline"
            data-aos="fade-up"
          >
            amplify your life!
          </h2>
          <p
            className="text-lg mb-16 max-w-2xl mx-auto text-gray-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Fasting doesn’t just help — it multiplies. Here’s what research says
            about the compounding benefits of time-restricted eating.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {[
              { icon: "🔥", value: 3, suffix: "x", label: "More Fat Burned" },
              {
                icon: "🧠",
                value: 50,
                suffix: "%",
                label: "Increase in Mental Clarity",
              },
              {
                icon: "🧬",
                value: 20,
                suffix: "%",
                label: "Longevity Boost Markers",
              },
              {
                icon: "💪",
                value: 500,
                suffix: "%",
                label: "More Growth Hormone",
              },
              {
                icon: "🩸",
                value: 2,
                suffix: "x",
                label: "Improved Insulin Sensitivity",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-xl shadow-lg">
                <div className="text-5xl mb-2">{item.icon}</div>
                <h3 className="text-3xl font-bold text-white!">
                  <span id={`counter-${i}`} />
                  {item.suffix}
                </h3>
                <p className="mt-2 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
