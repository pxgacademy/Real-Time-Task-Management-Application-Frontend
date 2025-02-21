import { Outlet } from "react-router-dom";
import Navbar from "../pages/localLayout/header/Navbar";

const LocalLayout = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-tl from-[#EC50B4] to-[#5343AA]">
      <section className="max-w-[1600px] mx-auto">
        <Navbar />
        <Outlet />
      </section>
    </section>
  );
};

export default LocalLayout;
