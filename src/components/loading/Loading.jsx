import PropTypes from "prop-types";
import Lottie from "lottie-react";
import loading_animation from "../../assets/Loading-Animation.json";

const Loading = ({
  height = "min-h-[450px] lg:min-h-[700px]",
  className = "",
}) => {
  return (
    <section
      className={`w-full flex items-center justify-center ${height} ${className}`}
    >
      <Lottie animationData={loading_animation} />
    </section>
  );
};

Loading.propTypes = {
  height: PropTypes.string,
  className: PropTypes.string,
};

export default Loading;
