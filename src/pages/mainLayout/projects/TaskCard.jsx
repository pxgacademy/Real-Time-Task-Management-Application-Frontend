import PropTypes from "prop-types";

const demo = {
  index: 1,
  title: "Implement user authentication",
  startedDate: "2025-02-07",
  dueDate: "2025-02-12",
  priority: "High",
  status: "IN_PROGRESS",
};

const TaskCard = ({ task }) => {
  return (
    <div className="bg-gray-700 p-2 rounded-md">
      <h3 className="text-xl font-semibold">{task?.title}</h3>
      <select defaultValue={task?.status} name="" id="" className="select border-none outline-none focus:outline-none w-full mt-3">
        <option value="TODO">To Do</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="DONE">Done</option>
      </select>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskCard;
