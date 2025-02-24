import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import useContextValue from "../../../hooks/useContextValue";
import { useSecureAPI_Link } from "../../../hooks/useAPI_Links";
import useProjectList from "../../../hooks/useProjectList";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const demo = {
  index: 1,
  title: "Implement user authentication",
  startedDate: "2025-02-07",
  dueDate: "2025-02-12",
  priority: "High",
  status: "IN_PROGRESS",
};

const TaskCard = ({ task, projectId }) => {
  const secureLINK = useSecureAPI_Link();
  const [, , refetch] = useProjectList();
  const inputRef = useRef(null);
  const [showTitleInput, setShowTitleInput] = useState(false);
  const [status, setStatus] = useState(task?.status);
  const [startedDate, setStartedDate] = useState(task?.startedDate);
  const [dueDate, setDueDate] = useState(task?.dueDate);
  const [priority, setPriority] = useState(task?.priority);

  useEffect(() => {
    if (showTitleInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showTitleInput]);

  const handleChangeTitle = async (title) => {
    setShowTitleInput(false);

    if (task?.title === title) return;
    try {
      await secureLINK.patch(
        `/projects/${task?.userId}/project/${projectId}/task/${task?.id}`,
        {
          "project.$[proj].tasks.$[task].title": title,
        }
      );
      refetch();
    } catch (error) {
      console.log("Error updating task status:", error);
    }
  };

  const handleChangeStatus = async (status) => {
    setStatus(status);
    try {
      await secureLINK.patch(
        `/projects/${task?.userId}/project/${projectId}/task/${task?.id}`,
        {
          "project.$[proj].tasks.$[task].status": status,
        }
      );
      refetch();
    } catch (error) {
      console.log("Error updating task status:", error);
    }
  };

  const handleChangeStartedDate = async (startedDate) => {
    setStartedDate(startedDate);
    try {
      await secureLINK.patch(
        `/projects/${task?.userId}/project/${projectId}/task/${task?.id}`,
        {
          "project.$[proj].tasks.$[task].startedDate": startedDate,
        }
      );
      refetch();
    } catch (error) {
      console.log("Error updating task status:", error);
    }
  };

  const handleChangeDueDate = async (dueDate) => {
    setDueDate(dueDate);
    try {
      await secureLINK.patch(
        `/projects/${task?.userId}/project/${projectId}/task/${task?.id}`,
        {
          "project.$[proj].tasks.$[task].dueDate": dueDate,
        }
      );
      refetch();
    } catch (error) {
      console.log("Error updating task status:", error);
    }
  };

  const handleChangePriority = async (priority) => {
    setPriority(priority);
    try {
      await secureLINK.patch(
        `/projects/${task?.userId}/project/${projectId}/task/${task?.id}`,
        {
          "project.$[proj].tasks.$[task].priority": priority,
        }
      );
      refetch();
    } catch (error) {
      console.log("Error updating task status:", error);
    }
  };

  const handleDeleteTask = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await secureLINK.delete(
            `/projects/${task.userId}/project/${projectId}/tasks/${task.id}`
          );
          refetch();
        } catch (error) {
          console.log("Error deleting task:", error);
        }
      }
    });
  };

  return (
    <div className="flex items-center relative">
      <div className="flex-1 grid md:grid-cols-3 lg:grid-cols-6 gap-2 border-b border-white/20 mb-3 pb-3">
        <div className="md:row-span-2 lg:row-span-1 lg:col-span-2 flex items-center">
          <h3
            role="button"
            onDoubleClick={() => setShowTitleInput(true)}
            className={`${
              showTitleInput && "hidden"
            } text-xl font-semibold cursor-pointer`}
          >
            {task?.title}
          </h3>
          <input
            onBlur={(e) => handleChangeTitle(e.target.value)}
            defaultValue={task?.title}
            ref={inputRef}
            type="text"
            className={` ${
              showTitleInput || "hidden"
            } w-full text-xl font-semibold border-none outline-none focus:border-none focus:outline-none`}
          />
        </div>
        <div>
          <select
            value={status}
            onChange={(e) => handleChangeStatus(e.target.value)}
            name="status"
            className="select bg-gray-800 border-none outline-none w-full"
          >
            <option value="TODO">To Do</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
          </select>
        </div>

        <div>
          <input
            type="date"
            value={startedDate}
            onChange={(e) => handleChangeStartedDate(e.target.value)}
            name="startedDate"
            className="input bg-gray-800 border-none outline-none focus:border-none focus:outline-none w-full"
          />
        </div>
        <div>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => handleChangeDueDate(e.target.value)}
            name="startedDate"
            className="input bg-gray-800 border-none outline-none focus:border-none focus:outline-none w-full active:border-none"
          />
        </div>

        <div>
          <select
            value={priority}
            onChange={(e) => handleChangePriority(e.target.value)}
            name="status"
            className="select bg-gray-800 border-none outline-none w-full"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
      <div className="p-2 absolute -top-4 right-0 md:static">
        <button
          onClick={handleDeleteTask}
          className="btn btn-error btn-sm btn-circle text-white"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  projectId: PropTypes.number.isRequired,
};

export default TaskCard;
