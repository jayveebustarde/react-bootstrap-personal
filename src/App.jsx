import './styles/custom.scss';
import './App.css';

import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import Layout from './routes/Layout/Layout';

const Home = lazy(() => import('./routes/Home/Home'));
const Resume = lazy(() => import('./routes/Resume/Resume'));
const Contact = lazy(() => import('./routes/Contact/Contact'));
const ProjectDetails = lazy(() => import('./routes/ProjectDetails/ProjectDetails'));
const Projects = lazy(() => import('./routes/Projects/Projects'));
const NotFound = lazy(() => import('./routes/NotFound/NotFound'));

import ProfileProvider from './contexts/ProfileContext/ProfileProvider';
import ProjectProvider from './contexts/ProjectContext/ProjectProvider';
import DarkModeProvider from './contexts/DarkModeContext/DarkModeProvider';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import RouterErrorPage from './components/RouterErrorPage/RouterErrorPage';

const PageLoader = () => (
  <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '60vh' }}>
    <Spinner animation='border' role='status' variant='primary'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  </div>
);

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
            <Suspense fallback={<PageLoader />}>
              <RouterProvider router={router} />
            </Suspense>
          </ProjectProvider>
        </ProfileProvider>
      </DarkModeProvider>
    </ErrorBoundary>
  );
}

export default App;
