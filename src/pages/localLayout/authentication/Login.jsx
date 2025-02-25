import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useContextValue from "../../../hooks/useContextValue";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser, setUser } = useContextValue();
  const navigate = useNavigate();
  const [isEye, setIsEye] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUser(
        event.target.email.value,
        event.target.password.value
      );
      setUser(user);
      Swal.fire({
        title: "Logged in",
        text: "Successfully logged in!",
        icon: "success",
        showConfirmButton: false,
        position: "center",
        timer: 2000,
      });
      event.target.reset();
      navigate("/");
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

  const handleDefaultValue = () => {
    setEmail("john-doe@example.com");
    setPass("Aa12345!");
  };

  return (
    <div className="px-5">
      <div className="max-w-lg mx-auto mt-10 bg-gradient-to-tl from-[#5343AA]/30 to-[#EC50B4]/30 backdrop-blur p-7 rounded-lg border border-white/30 shadow-lg">
        <div className="text-center border-b border-white/40 pb-3">
          <h2 className="text-3xl font-semibold text-white">
            Project Management App
          </h2>
          <p className="text-white text mt-2">Login to Continue</p>
        </div>
        <div className="text-center mt-3">
          <button
            onClick={handleDefaultValue}
            className="btn bg-white/20 px-7 border-none mt-2 hover:scale-105 transition duration-200"
          >
            Default Credentials
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 mt-5">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="py-2 px-3 border-white/40 rounded-lg outline-none"
          />
          <label>Password</label>
          <label className="relative w-full">
            <input
              type={isEye ? "text" : "password"}
              name="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
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
          <label className="text-center">
            <button
              type="submit"
              className="mt-4 py-3 w-full rounded-lg text-lg font-bold bg-gradient-to-tl from-[#EC50B4] to-[#5343AA] shadow-md cursor-pointer hover:scale-105 transition duration-200"
            >
              Login
            </button>
          </label>
        </form>

        <SocialLogin />

        <div>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/visitor/register" className="text-info">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
