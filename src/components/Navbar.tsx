import logo from "../assets/logos/fast2lean.svg";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className=" bg-white w-full py-2 sticky top-0 z-60 shadow-md">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto px-4 md:px-0">
          <img className="h-[15px]" src={logo} alt="" />
          <ul className="flex gap-5 justify-between items-center">
            <li>Home</li>
            <li>Blog</li>
            <li>Resources</li>
            <li>Subscribe</li>
          </ul>
        </div>
      </div>
    </>
  );
};
