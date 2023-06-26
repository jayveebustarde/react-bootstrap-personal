import React from "react";
import MainWrapper from "../components/MainWrapper";
import Section from "../components/Section";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

const Home = () => {
    return (
        <MainWrapper>
            <Section isHeader>
                <Container>
                    <Row>
                        <Col>
                            <Stack>
                                <h1>Jayvee Bustarde</h1>
                                <p className="lead">Full-stack .Net Developer</p>
                                <p>Lorem ipsum dolor amet</p>
                                <Stack direction="horizontal" gap={3}>
                                    <Button variant="primary">
                                        View Portfolio
                                    </Button>
                                    <Button variant="secondary">
                                        View Resume
                                    </Button>
                                </Stack>
                            </Stack>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Section>
        </MainWrapper>
    );
}

export default Home;