import PageContainer from "../../../components/container/PageContainer";
import useContextValue from "../../../hooks/useContextValue";
import Loading from "../../../components/loading/Loading";

const Home = () => {
  const { loading, user } = useContextValue();

  if (loading) return <Loading />;

  return (
    <PageContainer>
      <h3 className="text-2xl md:text-4xl lg:text-6xl">
        Welcome to{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EC50B4] to-[#6952e9] font-bold">
          {user?.displayName || user?.email || "the Task Management APP"}
        </span>
      </h3>

      <div id="homePageDiv" className="mt-10 p-5 border  border-gray-600 rounded-3xl space-y-5">
      <div>
        <h2>Create a Project</h2>
        <ul>
          <li>Click on "New Project" to add a project.</li>
          <li>Give it a name to organize your tasks effectively.</li>
        </ul>        
      </div>

      
      <div>
        <h2>Add Tasks to Your Project</h2>
        <ul>
          <li>Click "Add Task" to create unlimited tasks.</li>
          <li>Provide a title, start date, due date, status, and priority for better task tracking.</li>
        </ul>        
      </div>

      <div>
        <h2>Update Task Details Dynamically</h2>
        <ul>
          <li>Double-Click on any task title to edit instantly.</li>
          <li>Click on any task to edit its details instantly.</li>
          <li>Change the status (To Do, In Progress, Completed) to track progress.</li>
          <li>Adjust the priority to set task importance.</li>
        </ul>        
      </div>

      <div>
        <h2>Stay Organized & Productive</h2>
        <ul>
          <li>Manage multiple projects efficiently.</li>
          <li>Future updates will bring drag-and-drop functionality and real-time collaboration for a smoother workflow.</li>
        </ul>        
      </div>
      </div>

    </PageContainer>
  );
};

export default Home;
