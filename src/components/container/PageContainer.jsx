import PropTypes from "prop-types";

const PageContainer = ({ children }) => {
  return (
    <section
    // className="w-full max-w-[1600px] mx-auto"
    >
      <section
      // className="w-full max-w-[1400px] mx-auto"
      >{children}</section>
    </section>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
