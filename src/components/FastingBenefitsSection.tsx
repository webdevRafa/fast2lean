import {
  FiZap,
  FiHeart,
  FiActivity,
  FiSun,
  FiTarget,
  FiFeather,
} from "react-icons/fi";

const benefits = [
  {
    icon: <FiZap className="text-green-600 text-2xl" />,
    title: "Boost Your Energy",
    desc: "Wake up sharper and power through your day without crashing.",
  },
  {
    icon: <FiHeart className="text-green-600 text-2xl" />,
    title: "Support Your Health",
    desc: "Reduce inflammation and improve your mood and gut health.",
  },
  {
    icon: <FiActivity className="text-green-600 text-2xl" />,
    title: "Burn Fat Naturally",
    desc: "Lose stubborn weight without obsessing over calories.",
  },
  {
    icon: <FiSun className="text-green-600 text-2xl" />,
    title: "Sleep Like a Champ",
    desc: "Get more restful sleep and wake up feeling refreshed.",
  },
  {
    icon: <FiTarget className="text-green-600 text-2xl" />,
    title: "Improve Focus",
    desc: "Say goodbye to brain fog and hello to mental clarity.",
  },
  {
    icon: <FiFeather className="text-green-600 text-2xl" />,
    title: "Feel Lighter",
    desc: "Experience less bloating and more control over cravings.",
  },
];

const FastingBenefitsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-10 lg:px-20 fastinghero hidden md:block">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 mx-auto rounded-full bg-green-100">
                {benefit.icon}
              </div>
              <h3 className="text-lg mb-2 massilia">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastingBenefitsSection;
