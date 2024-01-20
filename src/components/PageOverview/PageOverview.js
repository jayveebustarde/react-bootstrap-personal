import Section from '../Section/Section';
import { Col, Row, Stack } from 'react-bootstrap';

const PageOverview = ({ className, title, children }) => {
  return (
    <Section className={className} isHeader>
      <Row className='justify-content-md-center'>
        <Col xs lg='8'>
          <Stack gap={1} className='stack-justify'>
            <h2 className='fw-bold'>{title}</h2>
            {children}
          </Stack>
        </Col>
      </Row>
    </Section>
  );
};

export default PageOverview;
