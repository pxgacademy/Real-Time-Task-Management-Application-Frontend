import { io } from "socket.io-client";
import PageContainer from "../../../components/container/PageContainer";
import { useEffect, useMemo, useState } from "react";
import useContextValue from "../../../hooks/useContextValue";
import { Navigate } from "react-router-dom";
import Loading from "../../../components/loading/Loading";

const Home = () => {
  const { user, loading } = useContextValue();
  //   const socket = io(import.meta.env.VITE_API_LINK);
  const socket = useMemo(() => io(import.meta.env.VITE_API_LINK), []);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server", socket.id);
    });

    socket.on("received-message", (msg) => {
      console.log(`Received message: ${msg}`);
    });

    socket.on("welcome", (s) => {
      console.log(s);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  if (loading) return <Loading/>;
  if (!user) return <Navigate to="/visitor" replace />;

  return (
    <PageContainer>
      <h1 className="mb-4">Home Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          className="input input-accent"
        />
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </PageContainer>
  );
};

export default Home;
