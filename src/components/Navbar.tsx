import { Link } from "react-router-dom";
import logo from "../assets/logos/fast2lean.svg";
import { RiMenu2Fill } from "react-icons/ri";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className=" bg-white w-full py-2 sticky top-0 z-60 shadow-md">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto px-4">
          <img className="h-[15px]" src={logo} alt="" />
          <ul className="md:flex gap-5 justify-between items-center hidden">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/articles">
              <li>Articles</li>
            </Link>
            <li>Resources</li>
            <li>Subscribe</li>
          </ul>
          <div className="block md:hidden">
            <RiMenu2Fill className="size-6" />
          </div>
        </div>
      </div>
    </>
  );
};
