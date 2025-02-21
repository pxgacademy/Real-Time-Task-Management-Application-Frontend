import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineTask } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  const [arrowDown, setArrowDown] = useState(false)
  return (
    <>
      <section className="w-full min-h-screen flex flex-col">
          <header className="flex justify-between items-center p-4 bg-[#2E2E30] border-b border-gray-700">
            <div>
              <button className="bg-gray-700 p-2 rounded hover:bg-gray-600 cursor-pointer transition-all duration-200"><FaBars /></button>
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
              <details onClick={()=> setArrowDown(!arrowDown)} className="dropdown p-0 -ml-1">
                <summary className="btn m-1">Projects <RiArrowDownSLine className={`${arrowDown?'rotate-0':'-rotate-90'}`}/></summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <button><span className="inline-block"><GoProject /></span> New Project</button>
                  </li>
                  <li>
                  <button><span className="inline-block"><MdOutlineTask /></span> New Task</button>
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
