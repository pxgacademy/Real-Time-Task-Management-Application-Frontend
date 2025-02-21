import { useState } from "react";
import useProjectList from "../../hooks/useProjectList";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoProject } from "react-icons/go";
import { MdOutlineTask } from "react-icons/md";
import Loading from "../loading/Loading";
import { Link, useParams } from "react-router-dom";

const ProjectList = () => {
  const [arrowDown, setArrowDown] = useState(false);
  const [projects, isLoading, refetch] = useProjectList();
  const { id } = useParams();

  if (isLoading) return <Loading height="" />;

  return (
    <>
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

      <div>
        <ul>
          {projects.map((project, i) => (
            <li
              key={i}
              className={`border-b px-1 py-2 my-2 ${
                id * 1 === project?.id ? "border-error" : "border-white/20"
              }`}
            >
              <Link to={`/project/${project?.id}`}>
                <button className="flex items-center cursor-pointer">
                  <GoProject className="mr-2 text-3xl" />
                  <p>{project.projectName}</p>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectList;
