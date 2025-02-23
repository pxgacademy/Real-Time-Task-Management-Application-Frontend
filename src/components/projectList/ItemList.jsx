import PropTypes from "prop-types";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const ItemList = ({ project }) => {
    const [isInput, setIsInput] = useState(false)
  const { id } = useParams();

  return (
    <>
      <form className="w-full flex items-center px-1 my-2">
        <GoProject className="mr-2 text-xl" />
        <input
          type="text"
          defaultValue={project?.projectName}
          className="flex-1 border-none"
        />
        <button role="button" type="submit" className="cursor-pointer text-2xl">
          <IoIosCheckmarkCircle />
        </button>
      </form>
      <li
        className={`border-b px-1 py-2 my-2 flex justify-between items-center text-left relative overflow-hidden group ${
          id * 1 === project?.index ? "border-error" : "border-white/20"
        }`}
      >
        <Link to={`/project/${project?.index}`}>
          <button className="flex items-center cursor-pointer">
            <GoProject className="mr-2 text-xl" />
            <p>{project.projectName}</p>
          </button>
        </Link>
        <div className=" bg-gray-900 p-2 rounded-md absolute flex items-center gap-x-2 right-1 lg:-right-[100%] group-hover:right-3 transition-all duration-200">
          <button className="cursor-pointer">
            <FaEdit />
          </button>
          <button className="cursor-pointer">
            <FaTrash />
          </button>
        </div>
      </li>
    </>
  );
};

ItemList.propTypes = {
  project: PropTypes.shape({
    index: PropTypes.number.isRequired,
    projectName: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemList;
