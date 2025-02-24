import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import LocalLayout from "../layouts/LocalLayout";
import Home from "../pages/mainLayout/home/Home";
import LocalHome from "../pages/localLayout/localHome/LocalHome";
import Login from "../pages/localLayout/authentication/Login";
import Register from "../pages/localLayout/authentication/Register";
import ProjectDetails from "../pages/mainLayout/projects/ProjectDetails";
import Contact from "../pages/mainLayout/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "project/:id",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "visitor",
    element: <LocalLayout />,
    children: [
      {
        // path: '/',
        index: true,
        element: <LocalHome />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
