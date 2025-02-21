import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useContextValue from "../../../hooks/useContextValue";
import { usePublicAPI_Link } from "../../../hooks/useAPI_Links";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const IMG_API_LINK = import.meta.env.VITE_IMG_API;
  const { createUser, updateUser, setUser } = useContextValue();
  const publicAPI = usePublicAPI_Link();
  const navigate = useNavigate();
  const [isEye, setIsEye] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageFile = event.target.image.files[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axios.post(IMG_API_LINK, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { name, email, password } = event.target;
      const image = res?.data?.data?.display_url;
      if (!image)
        return Swal.fire({
          title: "Error",
          text: "Failed to upload image",
          icon: "error",
          confirmButtonText: "Okay",
        });

      const { user } = await createUser(email?.value, password?.value);
      await updateUser({ displayName: name?.value, photoURL: image });
      setUser(user);

      const { data } = await publicAPI.post("/users", {
        name: name?.value,
        email: email?.value,
        image: image,
      });

      if (data?.insertedId) {
        Swal.fire({
          title: "Success",
          text: "User registered successfully!",
          icon: "success",
          showConfirmButton: false,
          position: "center",
          timer: 2000,
        });
        event.target.reset();
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  const handleEye = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsEye(!isEye);
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 bg-gradient-to-tl from-[#5343AA]/30 to-[#EC50B4]/30 backdrop-blur p-7 rounded-lg border border-white/30 shadow-lg">
        <div className="text-center border-b border-white/40 pb-3">
          <h2 className="text-3xl font-semibold text-white">
            Project Management App
          </h2>
          <p className="text-white text mt-2">Register to Continue</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 mt-5">
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="py-2 px-3 border-white/40 rounded-lg outline-none"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="py-2 px-3 border-white/40 rounded-lg outline-none"
          />
          <label>Password</label>
          <label className="relative w-full">
            <input
              type={isEye ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className="py-2 px-3 border-white/40 rounded-lg outline-none w-full"
            />
            <button
              onClick={(e) => handleEye(e)}
              className="absolute top-3 right-3"
            >
              {isEye ? <FaEyeSlash /> : <FaEye />}
            </button>
          </label>
          <label>Image</label>
          <input
            type="file"
            name="image"
            className="py-[7px] px-3 border-white/40 rounded-lg outline-none"
            required
          />

          <label className="text-center">
            <button
              type="submit"
              className="mt-4 py-3 w-full rounded-lg text-lg font-bold bg-gradient-to-tl from-[#EC50B4] to-[#5343AA] shadow-md cursor-pointer hover:scale-105 transition duration-200"
            >
              Register
            </button>
          </label>
        </form>

        <SocialLogin />

        <div>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/visitor/login" className="text-info">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="pt-10" />
    </>
  );
};

export default Register;
