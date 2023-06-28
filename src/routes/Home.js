import React from "react";
import MainWrapper from "../components/MainWrapper";
import Section from "../components/Section/Section";
import { Button, Col, Row, Stack } from "react-bootstrap";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import SkillsCard from "../components/SkillsCard/SkillsCard";

const Home = () => {
    const tools = [
        {
            icon: "Visualstudio",
            color: "#5d229c"
        },{
            icon: "Visualstudiocode",
            color: "#27aff3"
        }
    ]
    return (
        <MainWrapper>
            <Section isHeader>
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
            </Section>
            <Section>
                <SectionTitle>What I do</SectionTitle>
                <p>I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
                <Row>
                    <Col></Col>
                </Row>
                <SkillsCard tools={tools}>
                    <p>Lorem ipsum</p>
                </SkillsCard>
            </Section>
        </MainWrapper>
    );
}

export default Home;