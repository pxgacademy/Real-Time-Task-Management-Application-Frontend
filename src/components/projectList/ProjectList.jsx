import { useState } from "react";
import useProjectList from "../../hooks/useProjectList";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoProject } from "react-icons/go";
import { MdOutlineTask } from "react-icons/md";
import Loading from "../loading/Loading";
import { useParams } from "react-router-dom";
import { useSecureAPI_Link } from "../../hooks/useAPI_Links";
import Swal from "sweetalert2";
import ItemList from "./ItemList";
import { IoClose } from "react-icons/io5";

const ProjectList = () => {
  const secureLINK = useSecureAPI_Link();
  const [arrowDown, setArrowDown] = useState(false);
  const [projects, isLoading, refetch, data] = useProjectList();
  const { id } = useParams();

  const handleModalOne = (action) => {
    const modal = document.getElementById("my_modal_1");
    if (action) modal.showModal();
    else modal.close();
  };

  const handleModalTwo = (action) => {
    const modal = document.getElementById("my_modal_2");
    if (action) modal.showModal();
    else modal.close();
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    handleModalTwo(false);

    const form = e.target;
    const newTask = {
      title: form.title.value,
      startedDate: form.startedDate.value,
      dueDate: form.dueDate.value,
      priority: form.priority.value,
      status: form.status.value,
    };

    try {
      const response = await secureLINK.post(
        `/projects/${data?._id}/project/${form.id.value}/tasks`,
        newTask
      );
      refetch()
      console.log(response.data);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleAddProject = async (event) => {
    event.preventDefault();
    const newProject = {
      projectName: event.target.projectName.value,
      status: "In Progress",
    };

    try {
      const response = await secureLINK.post(
        `/projects/${data?._id}`,
        newProject
      );
      handleModalOne(false);
      refetch();
      Swal.fire({
        title: "Success",
        text: "Project added successfully!",
        icon: "success",
        showConfirmButton: false,
        position: "center",
        timer: 2000,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  if (isLoading) return <Loading height="" />;

  return (
    <>
      <details
        onClick={() => setArrowDown(!arrowDown)}
        className="dropdown dropdown-bottom  p-0 -ml-1"
      >
        <summary className="btn m-1">
          Projects{" "}
          <RiArrowDownSLine
            className={`${arrowDown ? "rotate-0" : "-rotate-90"}`}
          />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <button onClick={() => handleModalOne(true)}>
              <span className="inline-block">
                <GoProject />
              </span>{" "}
              New Project
            </button>
          </li>
          <li>
            <button onClick={() => handleModalTwo(true)}>
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
            <ItemList key={i} project={project} />
          ))}
        </ul>
      </div>

      {/* Add Project Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box relative">
          <button
            className="absolute right-0 top-0 btn btn-circle"
            onClick={() => handleModalOne(false)}
          >
            <IoClose />
          </button>
          <form onSubmit={handleAddProject}>
            <label>Your Project Name</label>
            <input
              type="text"
              name="projectName"
              required
              placeholder="Enter your project name"
              className="input w-full outline-none focus-within:outline-none focus:outline-none mt-3"
            />
            <button className="btn w-full mt-3">Add Project</button>
          </form>
        </div>
      </dialog>

      {/* Add Task Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box relative">
          <button
            className="absolute right-0 top-0 btn btn-circle"
            onClick={() => handleModalTwo(false)}
          >
            <IoClose />
          </button>
          <form onSubmit={handleAddTask} className="space-y-2.5">
            <label className="block">Select Project</label>
            <select
              name="id"
              className="select w-full outline-none focus-within:outline-none focus:outline-none"
            >
              {projects?.map((p) => (
                <option key={p?.id} value={p.id}>
                  {p?.projectName}
                </option>
              ))}
            </select>
            <label className="block">Your Task Name</label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter your project name"
              className="input w-full outline-none focus-within:outline-none focus:outline-none"
            />
            <label className="block">Select Status</label>
            <select
              name="status"
              className="select w-full outline-none focus-within:outline-none focus:outline-none"
            >
              <option value="TODO">To Do</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select>
            <label className="block">Start Date</label>
            <input
              type="date"
              name="startedDate"
              required
              className="input w-full outline-none focus-within:outline-none focus:outline-none"
            />
            <label className="block">Due Date</label>
            <input
              type="date"
              name="dueDate"
              required
              className="input w-full outline-none focus-within:outline-none focus:outline-none"
            />
            <label className="block">Priority</label>
            <select
              name="priority"
              className="select w-full outline-none focus-within:outline-none focus:outline-none"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <button className="btn w-full mt-3">Add Task</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ProjectList;
