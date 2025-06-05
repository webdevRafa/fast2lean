export const WhatIsFasting: React.FC = () => {
  return (
    <section className="bg-white  px-6 md:px-12 relative z-40 md:py-10">
      <div className="max-w-5xl mx-auto rounded-2xl shadow-md bg-gray-50 p-8 md:p-12 ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 bg-white p-2 rounded-2xl shadow-md">
          🕐 What Is Intermittent Fasting?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Intermittent Fasting (IF) isn’t about <strong>what</strong> you eat —
          it’s about <strong>when</strong>. Instead of eating all day long, you
          eat within a specific window (like 8 hours on, 16 hours off).
          <br className="hidden md:block" />
          <br />
          It's a small habit that has a big impact. Giving your body regular
          breaks from eating can unlock more energy, better focus, and even a
          more stable mood.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-6">
          And here’s something a lot of people don’t realize — you don’t have to
          eat less. Intermittent Fasting isn’t about cutting calories; it’s
          about choosing when to eat those same calories.
          <br className="hidden md:block" />
          <br />
          Whether you’re eating 2 meals or 3 within your window, the goal is to
          give your body a break, not deprive it. <br />{" "}
          <strong>It’s structure — not restriction.</strong>
        </p>
      </div>
    </section>
  );
};
