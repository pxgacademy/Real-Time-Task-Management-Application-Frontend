import { useQuery } from "@tanstack/react-query";
import { useSecureAPI_Link } from "./useAPI_Links";
import useContextValue from "./useContextValue";
import { useEffect, useState } from "react";

const useProjectList = () => {
  const secureAPI = useSecureAPI_Link();
  const { user } = useContextValue();
  const [projects, setProjects] = useState([]);

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allProjects", user?.email],
    queryFn: async () => {
      const { data } = await secureAPI.get(`/projects/${user?.email}`);
      return data;
    },
    enabled: !!user?.email,
  });

  useEffect(() => {
    if (data.length > 0) {
      const array = [];
      let i = 0;
      data.map((p) => {
        p?.project?.map((pp) => {
          pp.userId = p._id;
          pp.id = i;
          i++;
        });
        array.push(...p.project);
      });
      setProjects(array);
    }
  }, [data]);

  // console.log(projects);

  return [projects, isLoading, refetch];
};

export default useProjectList;
