import { useRouteError } from 'react-router-dom';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';

const RouterErrorPage = () => {
  const error = useRouteError();

  return (
    <ErrorDisplay
      error={error}
      onReset={() => (window.location.href = '/')}
    />
  );
};

export default RouterErrorPage;
