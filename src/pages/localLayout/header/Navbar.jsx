import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-white/50 py-5 px-5 md:px-7 lg:px-14 flex items-center justify-between">
      <div>
        <Link
          to="/visitor"
          className="uppercase text-xl md:text-2xl lg:text-4xl font-bold"
        >
          Project Management App
        </Link>
      </div>

      <div>
        <Link to="/visitor/login" className="mr-5">
          <button className="border border-transparent py-3 px-10 font-semibold text-xl rounded-lg hover:border-white transition-all duration-200 cursor-pointer">
            Login
          </button>
        </Link>
        <Link to="/visitor/register">
          <button className="py-3 px-10 font-semibold text-xl rounded-lg bg-rose-500 hover:scale-105 transition-all duration-200 cursor-pointer">
            Register for Free
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
