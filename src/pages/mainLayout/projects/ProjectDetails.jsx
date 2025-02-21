import { useEffect, useState } from "react";
import useProjectList from "../../../hooks/useProjectList";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [projects, isLoading] = useProjectList();
  const [project, setProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const neededProject = projects.find((p) => p.id === id * 1);
    setProject(neededProject);
  }, [projects, isLoading, id]);

  return <div>{project?.projectName}</div>;
};

export default ProjectDetails;
