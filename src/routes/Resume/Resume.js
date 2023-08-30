import React from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import { Col, Row } from "react-bootstrap";
import Section from "../../components/Section/Section";
import PdfViewer from "../../components/PdfViewer/PdfViewer";
import resumePdf from "../../assets/files/resume.pdf";
import { GrDocumentPdf } from "react-icons/gr";
import PfDlButton from "../../components/PfButton/PfDlButton";
import PageOverview from "../../components/PageOverview/PageOverview";

const Resume = () => {
  const fileName = "JayveeBustarde.pdf";

  return (
    <MainWrapper>
      <PageOverview title={"Resume"}>
        <PfDlButton href={resumePdf} fileName={fileName}>
          <GrDocumentPdf /> Download Pdf
        </PfDlButton>
      </PageOverview>
      <Section>
        <Row className="justify-content-md-center overflow-auto">
          <Col></Col>
          <Col className="p-5">
            <PdfViewer file={resumePdf}></PdfViewer>
          </Col>
          <Col></Col>
        </Row>
      </Section>
    </MainWrapper>
  );
};

export default Resume;
