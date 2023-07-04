import React from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import { Col, Row, Stack } from "react-bootstrap";
import Section from "../../components/Section/Section";
import PdfViewer from "../../components/PdfViewer/PdfViewer";
import resumePdf from '../../assets/files/resume.pdf';
import { GrDocumentPdf } from "react-icons/gr";
import PfDlButton from "../../components/PfButton/PfDlButton";

const Resume =() => {
    const fileName = "JayveeBustarde.pdf";

    return (
        <MainWrapper>
            <Section isHeader>
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
                        <Stack gap={1} className="stack-justify">
                            <h1>Resume</h1>
                            <PfDlButton href={resumePdf} fileName={fileName} >
                                <GrDocumentPdf /> Download Pdf
                            </PfDlButton>
                        </Stack>
                    </Col>
                </Row>
            </Section>
            <Section>
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
                        <PdfViewer file={resumePdf}></PdfViewer>
                    </Col>
                </Row>
            </Section>
        </MainWrapper>
    );
};

export default Resume;