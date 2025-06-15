// components/TestimonialCarousel.tsx
import Slider from "react-slick";

const testimonials = [
  {
    quote:
      "I used to crash every afternoon. Fasting changed everything — my energy lasts all day.",
    name: "Sarah, 34",
  },
  {
    quote:
      "Didn’t expect it to help my focus this much. I fast when I work now. It's like brain fuel.",
    name: "Alex, 41",
  },
  {
    quote:
      "I lost 12 lbs in 6 weeks without counting calories. Just ate during my window.",
    name: "Diego, 29",
  },
  {
    quote:
      "I sleep deeper, think clearer, and no longer get bloated. Fasting gave me my life back.",
    name: "Maya, 38",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section className="bg-gray-900 py-24 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-1 text-white!">
          Don’t Take Our Word for It…
        </h2>
        <p className="text-lg mb-12 text-gray-400">
          Real stories from people who tried fasting — and stuck with it.
        </p>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <div className="bg-gray-800 px-10 py-12 rounded-xl shadow-md min-h-[250px] flex flex-col justify-center">
                <p className="text-xl italic mb-6 text-white">“{item.quote}”</p>
                <p className="font-semibold text-gray-400">— {item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
