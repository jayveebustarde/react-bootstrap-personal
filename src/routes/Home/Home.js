import React from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Section from "../../components/Section/Section";
import { Col, Row, Stack } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import PfConfig from "../../data/portfolioConfig.json"
import MinorText from "../../components/MinorText/MinorText";
import PfButton from "../../components/PfButton/PfButton";

const Home = () => {
    return (
        <MainWrapper>
            <Section isHeader>
                <Row>
                    <Col>
                        <Stack>
                            <h1>{PfConfig.name}</h1>
                            <p className="lead">{PfConfig.position}</p>
                            <p>{PfConfig.overview}</p>
                            <Stack direction="horizontal" gap={3}>
                                <PfButton variant="primary">
                                    View Portfolio
                                </PfButton>
                                <PfButton variant="secondary">
                                    View Resume
                                </PfButton>
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </Section>
            <Section>
                <SectionTitle>What I do</SectionTitle>
                <p>{PfConfig.whatIDo.overview}</p>
                <Row className="mt-2 g-5">
                    {PfConfig.whatIDo.skills.map((item, index) => {
                        return (
                            <Col key={index} xs={6} md={6} lg={3}>
                                <SkillsCard tools={item.tools}>
                                    <h6>{item.title}</h6>
                                    <MinorText>{item.overview}</MinorText>
                                </SkillsCard>
                            </Col>
                        );
                    })}
                </Row>
            </Section>
        </MainWrapper>
    );
}

export default Home;