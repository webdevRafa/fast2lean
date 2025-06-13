// components/Footer.tsx
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About / Brand */}
        <div data-aos="fade-up">
          <h2 className="text-xl font-bold text-white mb-2">Fast2Lean</h2>
          <p className="text-sm">
            Real strategies, no fluff — fasting, nutrition, and tools that
            actually work.
          </p>
        </div>

        {/* Navigation */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold text-white mb-2">Navigate</h3>
          <ul className="text-sm space-y-1">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/articles" className="hover:underline">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-white text-xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-white text-xl" />
            </a>
          </div>
        </div>

        {/* Newsletter (Optional/Static for now) */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold text-white mb-2">
            Stay in the loop
          </h3>
          <p className="text-sm mb-2">
            No spam — just quick tips and product picks, once in a while.
          </p>
          <button className="cta-dark text-white text-sm px-4 py-2 rounded">
            Join Newsletter
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} Fast2Lean. All rights reserved.
      </div>
    </footer>
  );
};
