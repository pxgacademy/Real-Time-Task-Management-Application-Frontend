import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import useProjectList from "../../hooks/useProjectList";
import { useSecureAPI_Link } from "../../hooks/useAPI_Links";
import Swal from "sweetalert2";

const ItemList = ({ project }) => {
  const secureLINK = useSecureAPI_Link();
  const [isInput, setIsInput] = useState(false);
  const inputRef = useRef(null)
  const [, , refetch, data] = useProjectList();
  const { id } = useParams();

  useEffect(() => {
    if (isInput && inputRef.current) {
      inputRef.current.focus(); 
    }
  }, [isInput]);

  //   update a project functionalities
  const handleSubmit = async (e) => {
    // projectName: "Updated Web Design",
    // status: "Completed",

    e.preventDefault();
    setIsInput(false);

    if (project?.projectName === e.target.projectName.value) return;

    // const updates = { projectName: inputRef.current.value };
    const updates = { projectName: e.target.projectName.value };
    console.log("update project", updates);

    try {
      await secureLINK.patch(
        `/projects/${data?._id}/project/${project?.id}`,
        updates
      );
      refetch();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  // delete a project functionalities
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await secureLINK.delete(`/projects/${data?._id}/${project?.id}`);
          refetch();
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: error.message,
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      }
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`${
          isInput ? "flex" : "hidden"
        } w-full items-center px-1 py-2 my-2 border-b ${
          id * 1 === project?.index ? "border-error" : "border-white/20"
        }`}
      >
        <GoProject className="mr-2 text-xl" />
        <input
          ref={inputRef} // Attach ref to the input
          type="text"
          name="projectName"
          defaultValue={project?.projectName}
          className="flex-1 border-none outline-none"
        />
        <button role="button" type="submit" className="cursor-pointer text-2xl">
          <IoIosCheckmarkCircle />
        </button>
      </form>
      <li
        className={`border-b px-1 py-2 my-2 justify-between items-center text-left relative overflow-hidden group left-0 ${
          id * 1 === project?.index ? "border-error" : "border-white/20"
        } ${isInput ? "hidden" : "flex"}`}
      >
        <Link to={`/project/${project?.index}`}>
          <button className="flex items-center cursor-pointer">
            <GoProject className="mr-2 text-xl" />
            <p>{project.projectName}</p>
          </button>
        </Link>
        <div className="bg-gray-900 p-2 rounded-md absolute flex items-center gap-x-2 right-1 lg:opacity-0 lg:scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
          <button onClick={() => setIsInput(true)} className="cursor-pointer">
            <FaEdit />
          </button>
          <button onClick={handleDelete} className="cursor-pointer">
            <FaTrash />
          </button>
        </div>
      </li>
    </>
  );
};

ItemList.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ItemList;
