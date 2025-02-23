import PropTypes from "prop-types";
import TaskCard from "./TaskCard";


const Column = ({ column, tasks, projectId }) => {
  
  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <h2>{column?.title}</h2>
      <div className="mt-4 space-y-2">
        {tasks?.map((task, i) => (
          <TaskCard key={i} task={task} projectId={projectId} />
        ))}
      </div>
    </div>
  );
};

Column.propTypes = {
  column: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  projectId: PropTypes.number.isRequired,
};

export default Column;
