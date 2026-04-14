import { Container, Alert, Button } from 'react-bootstrap';
import './ErrorDisplay.scss';

const ErrorDisplay = ({ error, errorInfo, onReset }) => {
  return (
    <Container className='error-boundary-container py-5'>
      <Alert variant='danger' className='error-alert'>
        <Alert.Heading>Something went wrong</Alert.Heading>
        <p>
          We&apos;re sorry, but something unexpected happened. The application
          has encountered an error and needs to restart.
        </p>
        {import.meta.env.DEV && error && (
          <div className='error-details'>
            <strong>Error:</strong>
            <pre>{error?.message ?? String(error)}</pre>
            {errorInfo?.componentStack && (
              <>
                <strong>Component Stack:</strong>
                <pre>{errorInfo.componentStack}</pre>
              </>
            )}
            {error?.stack && !errorInfo && (
              <>
                <strong>Stack Trace:</strong>
                <pre>{error.stack}</pre>
              </>
            )}
          </div>
        )}
        <Button variant='danger' onClick={onReset} className='mt-3'>
          Return to Home
        </Button>
      </Alert>
    </Container>
  );
};

export default ErrorDisplay;
