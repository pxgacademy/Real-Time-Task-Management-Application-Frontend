import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../pages/localLayout/header/Navbar";
import useContextValue from "../hooks/useContextValue";
import Loading from "../components/loading/Loading";

const LocalLayout = () => {
  const { loading, user } = useContextValue();

  if (loading) return <Loading />;
  if (user) return <Navigate to="/" replace />;

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
