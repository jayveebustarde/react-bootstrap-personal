import './styles/custom.scss';
import './App.css';
import React from "react";
import Layout from'./routes/Layout/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/Home/Home';
import Resume from './routes/Resume/Resume';
import Contact from './routes/Contact/Contact';
import ProjectDetails from './routes/ProjectDetails/ProjectDetails';
import Projects from './routes/Projects/Projects';
import NotFound from './routes/NotFound/NotFound';
import ProfileDataProvider from './contexts/ProfileDataProvider';

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
          children: [ 
            {
              path: "details",
              element: <ProjectDetails />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ]
    }
  ]);
  return (
    <RouterProvider router={router}>
      <ProfileDataProvider>
        <div className="App" />
      </ProfileDataProvider>
    </RouterProvider>
  );
}

export default App;