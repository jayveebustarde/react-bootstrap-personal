import MainWrapper from '../../components/MainWrapper/MainWrapper';
import { Helmet } from 'react-helmet-async';
import { Col, Row } from 'react-bootstrap';
import Section from '../../components/Section/Section';
import PdfViewer from '../../components/PdfViewer/PdfViewer';
import resumePdf from '../../assets/files/resume.pdf';
import { BsFillFileTextFill } from 'react-icons/bs';
import PfDlButton from '../../components/PfButton/PfDlButton';
import PageOverview from '../../components/PageOverview/PageOverview';

const Resume = () => {
  const fileName = 'JayveeBustarde.pdf';

  return (
    <MainWrapper>
      <Helmet>
        <title>Resume | Jayvee Bustarde</title>
        <meta name='description' content='View and download the resume of Jayvee Bustarde, Full-stack .Net Developer.' />
        <meta property='og:title' content='Resume | Jayvee Bustarde' />
      </Helmet>
      <PageOverview title={'Resume'}>
        <PfDlButton href={resumePdf} fileName={fileName}>
          <BsFillFileTextFill /> Download Pdf
        </PfDlButton>
      </PageOverview>
      <hr className='dark-hr' />
      <Section>
        <Row className='justify-content-md-center overflow-auto'>
          <Col></Col>
          <Col className='p-5'>
            <PdfViewer file={resumePdf}></PdfViewer>
          </Col>
          <Col></Col>
        </Row>
      </Section>
    </MainWrapper>
  );
};

export default Resume;
