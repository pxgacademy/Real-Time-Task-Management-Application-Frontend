import { useContext } from "react";
import ContextProvider from "../utilities/context/ContextProvider";



const useContextValue = () => {
  const context = useContext(ContextProvider);
  return context;
};

export default useContextValue;
