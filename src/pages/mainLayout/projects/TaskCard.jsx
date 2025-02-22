import PropTypes from "prop-types";
import { useState } from "react";
import useContextValue from "../../../hooks/useContextValue";
import { useSecureAPI_Link } from "../../../hooks/useAPI_Links";
import useProjectList from "../../../hooks/useProjectList";

const demo = {
  index: 1,
  title: "Implement user authentication",
  startedDate: "2025-02-07",
  dueDate: "2025-02-12",
  priority: "High",
  status: "IN_PROGRESS",
};

const TaskCard = ({ task }) => {
  const secureLINK = useSecureAPI_Link();
  const [, , refetch] = useProjectList();
  const [status, setStatus] = useState(task?.status);
  const [startedDate, setStartedDate] = useState(task?.startedDate);
  const [dueDate, setDueDate] = useState(task?.dueDate);
  const [priority, setPriority] = useState(task?.priority);

  const handleChangeStatus = async (status) => {
    setStatus(status);
    try {
      await secureLINK.patch(
        `/projects/${task?.userId}/projectIndex/${task?.projectIndex}/tasks/${task?.index}`,
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
        `/projects/${task?.userId}/projectIndex/${task?.projectIndex}/tasks/${task?.index}`,
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
        `/projects/${task?.userId}/projectIndex/${task?.projectIndex}/tasks/${task?.index}`,
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
        `/projects/${task?.userId}/projectIndex/${task?.projectIndex}/tasks/${task?.index}`,
        {
          "project.$[proj].tasks.$[task].priority": priority,
        }
      );
      refetch();
    } catch (error) {
      console.log("Error updating task status:", error);
    }
  };

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-2 border-b border-white/20 mb-3 pb-3">
      <div className="md:row-span-2 lg:row-span-1 lg:col-span-2 flex items-center">
        <h3 className="text-xl font-semibold">{task?.title}</h3>
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
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskCard;
