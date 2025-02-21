import Swal from "sweetalert2";
import useContextValue from "../../../hooks/useContextValue";
import { useNavigate } from "react-router-dom";
import { usePublicAPI_Link } from "../../../hooks/useAPI_Links";

const SocialLogin = () => {
  const { setUser, googleSignIn } = useContextValue();
  const navigate = useNavigate();
  const publicAPI = usePublicAPI_Link();

  const handleSignIn = async () => {
    try {
      const { user } = await googleSignIn();
      await publicAPI.post("/users", {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      });

      Swal.fire({
        title: "Congratulations!",
        icon: "success",
        showConfirmButton: false,
        position: "center",
        timer: 2000,
      });
      setUser(user);
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
  return (
    <div className="text-center mt-5">
      <p>Or continue with</p>

      <button
        onClick={handleSignIn}
        className="btn bg-white/20 px-7 border-none mt-2 hover:scale-105 transition duration-200"
      >
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
