import './styles/custom.scss';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './routes/Layout/Layout';
import Home from './routes/Home/Home';
import Resume from './routes/Resume/Resume';
import Contact from './routes/Contact/Contact';
import ProjectDetails from './routes/ProjectDetails/ProjectDetails';
import Projects from './routes/Projects/Projects';
import NotFound from './routes/NotFound/NotFound';

import ProfileProvider from './contexts/ProfileContext/ProfileProvider';
import ProjectProvider from './contexts/ProjectContext/ProjectProvider';
import DarkModeProvider from './contexts/DarkModeContext/DarkModeProvider';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import RouterErrorPage from './components/RouterErrorPage/RouterErrorPage';

// Component that throws error during render (for testing ErrorBoundary)
const ErrorTest = () => {
  throw new Error('This is a test error from ErrorTest component');
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouterErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'projects/:id',
        element: <ProjectDetails />,
      },
      {
        path: 'error-test',
        element: <ErrorTest />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <ProfileProvider>
          <ProjectProvider>
            <RouterProvider router={router} />
          </ProjectProvider>
        </ProfileProvider>
      </DarkModeProvider>
    </ErrorBoundary>
  );
}

export default App;
