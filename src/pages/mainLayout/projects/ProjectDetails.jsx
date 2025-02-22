import { useEffect, useState } from "react";
import useProjectList from "../../../hooks/useProjectList";
import { useParams } from "react-router-dom";
import Column from "./Column";
import Loading from "../../../components/loading/Loading";
import { DndContext } from "@dnd-kit/core";

const COLUMNS = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const ProjectDetails = () => {
  const [loading, setLoading] = useState(false);
  const [projects, isLoading] = useProjectList();
  const [tasks, setTasks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const neededProject = projects.find((p) => p.id === id * 1);
    setTasks(neededProject?.tasks);
    setLoading(false);
  }, [projects, isLoading, id]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.index + 1;
    const newStatus = over.id;

    setTasks(() =>
      tasks.map((task) =>
        task.index + 1 === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  };

  if (loading || isLoading) return <Loading />;

  return (
    <div className="rounded-xl overflow-hidden">
      <DndContext onDragEnd={handleDragEnd} >
      {COLUMNS.map((column) => (
        <Column
          key={column.id}
          column={column}
          tasks={tasks?.filter((task) => task.status === column.id) || []}
        />
      ))}
      </DndContext>
    </div>
  );
};

export default ProjectDetails;
