import { useQuery } from "@tanstack/react-query";
import { useSecureAPI_Link } from "./useAPI_Links";
import useContextValue from "./useContextValue";
import { useEffect, useState } from "react";


const useProjectList = () => {
  const secureAPI = useSecureAPI_Link();
  const { user } = useContextValue();
  const [projects, setProjects] = useState([]);


  const {
    data = {},
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
    if (data?._id) {
      let i = 0;
      let taskIndex = 0;
      data?.project?.map((p) => {
        p.userId = data._id;
        p.index = i;
        // Map tasks to the task index and user ID
        p?.tasks?.map((task) => {
          task.userId = data._id;
          task.projectIndex = i;
          task.index = taskIndex;
          taskIndex++;
        });
        taskIndex = 0;
        i++;
      });
      setProjects(data?.project);
    }
  }, [data]);

  // useEffect(() => {
  //   if (data.length > 0) {
  //     const array = [];
  //     let i = 0;
  //     data.map((user) => {
  //       user?.project?.map((project) => {
  //         project?.tasks?.map((task) => {
  //           (task.projectIndex = project.index), (task.userId = user._id);
  //         });
  //         project.userId = user._id;
  //         project.id = i;
  //         i++;
  //       });
  //       array.push(...user.project);
  //     });
  //     setProjects(array);
  //   }
  // }, [data]);

  // console.log(projects);

  return [projects, isLoading, refetch, data];
};

export default useProjectList;
