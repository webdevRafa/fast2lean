import { Link } from "react-router-dom";
import keto from "../assets/svgs/keto.svg";
import paleo from "../assets/svgs/paleo.svg";
import medi from "../assets/svgs/medi.svg";
import vegan from "../assets/svgs/vegan.svg";
import nutrition from "../assets/images/nutrition-facts.webp";

export const NutritionComponent: React.FC = () => {
  return (
    <>
      <section
        className={`bg-gray-900 py-24 transition duration-1000 ease-in-out`}
      >
        {/* grid container */}
        <div className="flex flex-col md:flex-row items-start mx-auto w-full max-w-[1600px] gap-3 px-4">
          {/* Left Side: Heading + Image + Paragraph */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-1  text-white">
              Level up your nutrition
            </h2>
            <p className="text-lg max-w-xl mx-auto md:mx-0 mb-12 text-gray-300">
              Discover flexible eating styles — from high-fat fuel to
              plant-powered simplicity — and choose the one that works best for
              your goals and your lifestyle.
            </p>
            <img
              data-aos="fade-up"
              className="mx-auto md:mx-0 w-full md:max-w-[700px] mb-10"
              src={nutrition}
              alt="Nutrition facts"
            />
          </div>

          {/* Right Side: Diet Cards */}
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-1 gap-6 w-full">
              <Link
                data-aos="fade-left"
                to="/diets/ketogenic-diet"
                className="p-6 rounded-xl shadow hover:scale-[1.02] transition border-2 border-emerald-200"
              >
                <div className="flex gap-5">
                  <img
                    className="max-w-[100px] rounded-2xl"
                    src={keto}
                    alt=""
                  />
                  <div>
                    <h3 className="text-xl text-white font-semibold mb-2">
                      Ketogenic
                    </h3>
                    <p className="text-gray-300">
                      Low-carb, high-fat fuel. Great with fasting for energy +
                      focus.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                data-aos="fade-left"
                to="/diets/mediterranean-diet"
                className="p-6 rounded-xl shadow hover:scale-[1.02] transition border-2 border-emerald-200"
              >
                <div className="flex gap-5">
                  <img className="max-w-[100px]" src={medi} alt="" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Mediterranean
                    </h3>
                    <p className="text-gray-300">
                      Olive oil, fish, greens — simple and sustainable.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                data-aos="fade-left"
                to="/diets/paleo-diet"
                className="p-6 rounded-xl shadow hover:scale-[1.02] transition border-2 border-emerald-200"
              >
                <div className="flex gap-5">
                  <img className="max-w-[100px]" src={paleo} alt="" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Paleo
                    </h3>
                    <p className="text-gray-300">
                      Real food. No grains, no processed extras — just how we
                      were built to eat.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                data-aos="fade-left"
                to="/diets/vegan-diet"
                className="p-6 rounded-xl shadow hover:scale-[1.02] transition border-2 border-emerald-200"
              >
                <div className="flex gap-5">
                  <img className="max-w-[100px]" src={vegan} alt="" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Vegan
                    </h3>
                    <p className="text-gray-300">
                      Plant-based without losing performance or nutrients.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/diets/intermittent-fasting"
                className="underline col-span-full text-center text-white"
              >
                Learn About Intermittent Fasting →
              </Link>
              <Link
                to="/diets/compare"
                className="underline col-span-full text-center text-white"
              >
                Compare All Diets →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
