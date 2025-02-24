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
    </PageContainer>
  );
};

export default Home;
