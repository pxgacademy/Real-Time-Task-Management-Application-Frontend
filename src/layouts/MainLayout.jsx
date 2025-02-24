import { FaBars, FaUser } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import Loading from "../components/loading/Loading";
import useContextValue from "../hooks/useContextValue";
import Swal from "sweetalert2";
import ProjectList from "../components/projectList/ProjectList";

const MainLayout = () => {
  const { loading, user, signOutUser } = useContextValue();

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await signOutUser();
        Swal.fire({
          title: "Signed out!",
          text: "You have successfully logged out!",
          icon: "success",
          showConfirmButton: false,
          position: "center",
          timer: 1200,
        });
      }
    });
  };

  if (loading) return <Loading />;
  if (!user) return <Navigate to="/visitor" replace />;
  return (
    <>
      <section className="w-full min-h-screen flex flex-col">
        <header className="flex justify-between items-center py-4 px-6 bg-[#2E2E30] border-b border-gray-700">
          <div>
            <button className="bg-gray-700 p-2 rounded hover:bg-gray-600 cursor-pointer transition-all duration-200">
              <FaBars />
            </button>
          </div>

          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center cursor-pointer border border-white/40 p-1"
            >
              {user?.photoURL ? (
                <img
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                  src={user.photoURL}
                  alt="user img"
                />
              ) : (
                <FaUser className="text-xl" />
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        </header>

        <section className="flex-1 flex w-full">
          <aside className="w-full max-w-[20%] py-4 px-6 sticky top-0 bg-[#2E2E30]">
            <div id="navOne" className="flex flex-col gap-y-3">
              <NavLink to="/">
                <button className="cursor-pointer">
                  <TiHome /> <span>Home</span>
                </button>
              </NavLink>
              <NavLink to="/contact">
                <button className="cursor-pointer">
                  <IoMdContacts /> <span>Contact</span>
                </button>
              </NavLink>
            </div>

            <div className="mt-5 pt-5 border-t border-gray-600">
              <ProjectList />
            </div>
          </aside>

          <section className="w-full max-w-[80%] bg-[#1E1F21] py-4 px-6">
            <Outlet />
          </section>
        </section>
      </section>
    </>
  );
};

export default MainLayout;
