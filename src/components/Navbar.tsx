import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/fast2lean.svg";
import { RiMenu2Fill, RiCloseLine } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDietsDropdown, setShowDietsDropdown] = useState(false);

  return (
    <div className="bg-white w-full py-2 sticky top-0 z-60 shadow-md">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto px-4">
        <Link to="/">
          <img className="h-[15px]" src={logo} alt="Fast2Lean Logo" />
        </Link>

        {/* Desktop Nav */}
        <ul className="md:flex gap-5 justify-between items-center hidden text-sm font-medium">
          <Link to="/">
            <li>Home</li>
          </Link>

          <li
            className="relative cursor-pointer"
            onClick={() => setShowDietsDropdown((prev) => !prev)}
            onMouseEnter={() => setShowDietsDropdown(true)}
            onMouseLeave={() => setShowDietsDropdown(false)}
          >
            <span className="flex items-center gap-1">
              Diets <FiChevronDown className="mt-[1px]" />
            </span>
            <ul
              className={`absolute bg-white shadow-md py-2 w-48 rounded-md top-full left-0 z-50 transition-opacity duration-200 ${
                showDietsDropdown ? "block" : "hidden"
              }`}
            >
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/diets/intermittent-fasting">
                  Intermittent Fasting
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/diets/ketogenic-diet">Ketogenic Diet</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/diets/mediterranean-diet">Mediterranean Diet</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/diets/paleo-diet">Paleo Diet</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/diets/vegan-diet">Vegan Diet</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/diets/compare">Compare Diets</Link>
              </li>
            </ul>
          </li>

          <Link to="/articles">
            <li>Articles</li>
          </Link>
          <Link to="/tools">
            <li>Tools</li>
          </Link>
          <Link to="/subscribe">
            <li>Subscribe</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>

        {/* Mobile Icon */}
        <div className="block md:hidden">
          {isMobileMenuOpen ? (
            <RiCloseLine
              className="size-6"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <RiMenu2Fill
              className="size-6"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="py-2">Home</div>
          </Link>

          <div
            className="py-2 flex items-center justify-between cursor-pointer"
            onClick={() => setShowDietsDropdown(!showDietsDropdown)}
          >
            <span>Diets</span>
            <FiChevronDown
              className={`transform transition-transform duration-200 ${
                showDietsDropdown ? "rotate-180" : ""
              }`}
            />
          </div>

          {showDietsDropdown && (
            <div className="bg-gray-100 p-2 ml-4 space-y-2">
              <Link
                to="/diets/intermittent-fasting"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="py-1">Intermittent Fasting</div>
              </Link>
              <Link
                to="/diets/ketogenic-diet"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="py-1">Ketogenic Diet</div>
              </Link>
              <Link
                to="/diets/mediterranean-diet"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="py-1">Mediterranean Diet</div>
              </Link>
              <Link
                to="/diets/paleo-diet"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="py-1">Paleo Diet</div>
              </Link>
              <Link
                to="/diets/vegan-diet"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="py-1">Vegan Diet</div>
              </Link>
              <Link
                to="/diets/compare"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="py-1">Compare Diets</div>
              </Link>
            </div>
          )}

          <Link to="/articles" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="py-2">Articles</div>
          </Link>
          <Link to="/tools" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="py-2">Tools</div>
          </Link>
          <Link to="/subscribe" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="py-2">Subscribe</div>
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="py-2">About</div>
          </Link>
        </div>
      )}
    </div>
  );
};
