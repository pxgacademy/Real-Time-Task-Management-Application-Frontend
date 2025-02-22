import PropTypes from "prop-types";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

const Column = ({ column, tasks }) => {
  const {setNodeRef} = useDroppable({
    id: column.id
  })
  return (
    <div className="bg-gray-800 p-4">
      <h2>{column?.title}</h2>
      <div ref={setNodeRef} className="mt-4 space-y-2">
        {tasks?.map((task, i) => (
          <TaskCard key={i} task={task} />
        ))}
      </div>
    </div>
  );
};

Column.propTypes = {
  column: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default Column;
