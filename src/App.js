import "./styles/custom.scss";
import "./App.css";
import React from "react";
import Layout from "./routes/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home";
import Resume from "./routes/Resume/Resume";
import Contact from "./routes/Contact/Contact";
import ProjectDetails from "./routes/ProjectDetails/ProjectDetails";
import Projects from "./routes/Projects/Projects";
import NotFound from "./routes/NotFound/NotFound";
import ProfileProvider from "./contexts/ProfileContext/ProfileProvider";
import ProjectProvider from "./contexts/ProjectContext/ProjectProvider";
import DarkModeProvider from "./contexts/DarkModeContext/DarkModeProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "projects/:id",
          element: <ProjectDetails />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <DarkModeProvider>
      <ProfileProvider>
        <ProjectProvider>
          <RouterProvider router={router}>
            <div className="App" />
          </RouterProvider>
        </ProjectProvider>
      </ProfileProvider>
    </DarkModeProvider>
  );
}

export default App;
