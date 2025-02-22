import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useProjectList from "../../../hooks/useProjectList";
import { useParams } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
import TaskCard from "./TaskCard";
import {DragEndEvent} from '@dnd-kit/core'

const Column = ({ column }) => {
  const [loading, setLoading] = useState(false);
  const [projects, isLoading] = useProjectList();
  const [tasks, setTasks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const neededProject = projects.find((p) => p.id === id * 1);
    const neededTasks = neededProject?.tasks.filter(
      (task) => task.status === column.id
    );
    setTasks(neededTasks);
    setLoading(false);
  }, [projects, isLoading, id, column]);




  if (loading || isLoading) return <Loading />;

  return (
    <div className="flex-1 bg-gray-800 p-4 rounded-xl">
      <h2>{column?.title}</h2>
      <div className="mt-4">
        {tasks?.map((task, i) => (
          <TaskCard key={i} task={task} />
        ))}
      </div>
    </div>
  );
};

Column.propTypes = {
  column: PropTypes.object.isRequired,
};

export default Column;
