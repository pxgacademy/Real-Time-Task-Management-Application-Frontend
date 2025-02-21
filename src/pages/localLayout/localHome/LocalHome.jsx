import { Link } from "react-router-dom";
import taskImg from "../../../assets/task-img.png";

const LocalHome = () => {
  return (
    <section className="min-h-[550px] py-5 px-5 md:px-7 lg:px-14 lg:flex items-center gap-10">
      <div className="flex-1">
        <h1 className="text-3xl md:text-5xl font-bold">
          Effortlessly Organize, Track, and Complete Your Tasks with Our
          Powerful Task Management Application
        </h1>
        <p className="text-lg font-medium mt-6">
          Welcome to our Task Management Application—your ultimate solution for
          organizing tasks efficiently. Manage your to-dos, track progress with
          a drag-and-drop interface, and collaborate in real time. Stay
          productive with intuitive task categorization, priority settings, and
          seamless updates. Start managing your tasks smarter today!
        </p>

        <div className="mt-6">
          <Link to="/visitor/register" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </div>

      <div className="flex-1 hidden lg:flex justify-center items-center">
        <img src={taskImg} alt="Banner image" />
      </div>
    </section>
  );
};

export default LocalHome;
