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
  const [project, setProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const neededProject = projects.find((p) => p.id === id * 1);
    setProject(neededProject);
    setLoading(false);
  }, [projects, isLoading, id]);

  // console.log(project?.tasks);

  if (loading || isLoading) return <Loading />;

  return (
    <div className="flex justify-between gap-8">
      {COLUMNS.map((column) => (
        <Column key={column.id} column={column} tasks={project?.tasks} />
      ))}
    </div>
  );
};

export default ProjectDetails;
