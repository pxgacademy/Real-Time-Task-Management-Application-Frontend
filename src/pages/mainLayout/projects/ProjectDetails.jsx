import { useEffect, useState } from "react";
import useProjectList from "../../../hooks/useProjectList";
import { useParams } from "react-router-dom";
import Column from "./Column";
import Loading from "../../../components/loading/Loading";


const COLUMNS = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const ProjectDetails = () => {
  const [loading, setLoading] = useState(false);
  const [projects, isLoading] = useProjectList();
  const [projectId, setProjectId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if(projects.length === 0) return
    setLoading(true);
    const neededProject = projects.find((p) => p.index === id * 1);
    setTasks(neededProject?.tasks);
    setProjectId(neededProject?.id)
    // console.log(neededProject?.tasks);
    setLoading(false);
  }, [projects, isLoading, id]);



  if (loading || isLoading) return <Loading />;

  return (
    <div className="space-y-5">
      <p>Double click on the title to edit.</p>
      {COLUMNS.map((column) => (
        <Column
          key={column.id}
          column={column}
          projectId={projectId}
          tasks={tasks?.filter((task) => task.status === column.id) || []}
        />
      ))}
    </div>
  );
};

export default ProjectDetails;
