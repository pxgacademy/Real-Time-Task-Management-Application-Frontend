import { useQuery } from "@tanstack/react-query";
import { useSecureAPI_Link } from "./useAPI_Links";
import useContextValue from "./useContextValue";

const useProjectList = () => {
  const secureAPI = useSecureAPI_Link();
  const { user } = useContextValue();

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allItems"],
    queryFn: async () => {
      const { data } = await secureAPI.get(`/projects/${user?.email}`);
      return data;
    },
    enabled: !!user?.email,
  });
  return [data, isLoading, refetch];
};

export default useProjectList;
