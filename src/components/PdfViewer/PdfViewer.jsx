import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Spinner, Alert } from 'react-bootstrap';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const onDocumentLoadError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <>
      {loading && (
        <div className='d-flex justify-content-center align-items-center py-5'>
          <Spinner animation='border' role='status' variant='primary'>
            <span className='visually-hidden'>Loading PDF...</span>
          </Spinner>
        </div>
      )}
      {error && (
        <Alert variant='danger'>
          Failed to load the PDF. Please try downloading it directly.
        </Alert>
      )}
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale={1.5}
            className='justify-content-md-center shadow-lg my-3'
          />
        ))}
      </Document>
    </>
  );
};

export default PdfViewer;
