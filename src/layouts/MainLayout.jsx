import { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineTask } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import Loading from "../components/loading/Loading";
import useContextValue from "../hooks/useContextValue";
import useProjectList from "../hooks/useProjectList";
import Swal from "sweetalert2";

const MainLayout = () => {
  const [arrowDown, setArrowDown] = useState(false);
  const { loading, user, signOutUser } = useContextValue();
  const [data] = useProjectList();
  console.log(data);

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
        <header className="flex justify-between items-center p-4 bg-[#2E2E30] border-b border-gray-700">
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
                <button onClick={handleSignOut} >Logout</button>
              </li>
            </ul>
          </div>
        </header>

        <section className="flex-1 flex w-full">
          <aside className="w-full max-w-[20%] p-4 sticky top-0 bg-[#2E2E30]">
            <div id="navOne" className="flex flex-col gap-y-3">
              <NavLink>
                <button>
                  <TiHome /> <span>Home</span>
                </button>
              </NavLink>
              <NavLink>
                <button>
                  <IoMdContacts /> <span>Contact</span>
                </button>
              </NavLink>
            </div>

            <div className="mt-5 pt-5 border-t border-gray-600">
              <details
                onClick={() => setArrowDown(!arrowDown)}
                className="dropdown p-0 -ml-1"
              >
                <summary className="btn m-1">
                  Projects{" "}
                  <RiArrowDownSLine
                    className={`${arrowDown ? "rotate-0" : "-rotate-90"}`}
                  />
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <button>
                      <span className="inline-block">
                        <GoProject />
                      </span>{" "}
                      New Project
                    </button>
                  </li>
                  <li>
                    <button>
                      <span className="inline-block">
                        <MdOutlineTask />
                      </span>{" "}
                      New Task
                    </button>
                  </li>
                </ul>
              </details>
            </div>
          </aside>

          <section className="w-full max-w-[80%] bg-[#1E1F21]">
            <Outlet />
          </section>
        </section>
      </section>
    </>
  );
};

export default MainLayout;
