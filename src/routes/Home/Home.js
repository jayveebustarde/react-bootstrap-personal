import React, { useContext } from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Section from "../../components/Section/Section";
import { Col, Row, Stack } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import MinorText from "../../components/MinorText/MinorText";
import PfButton from "../../components/PfButton/PfButton";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import RolesTimeline from "../../components/RolesTimeline/RolesTimeline";
import { ProfileDataContext } from "../../contexts/ProfileDataProvider";
import ProjectList from "../../components/ProjectList/ProjectList";

const Home = () => {
    const profile = useContext(ProfileDataContext);
    return (
        <MainWrapper>
            <Section isHeader>
                <Stack>
                    <h1>{profile.name}</h1>
                    <p className="lead">{profile.position}</p>
                    <p>{profile.overview}</p>
                    <Stack direction="horizontal" gap={3}>
                        {/* <PfButton variant="primary">
                            View Portfolio
                        </PfButton> */}
                        <Link to="/resume">
                            <PfButton variant="secondary">
                                <CgFileDocument /> View Resume
                            </PfButton>
                        </Link>
                    </Stack>
                </Stack>
            </Section>
            <Section>
                <SectionTitle>What I do</SectionTitle>
                <Row className="mt-1 g-5">
                    {profile.whatIDo.skills.map((item, index) => {
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
            <hr />
            <Section>
                <SectionTitle>Roles and Experience</SectionTitle>
                <RolesTimeline />
            </Section>
            <hr />
            <Section>
                <SectionTitle>Featured Projects</SectionTitle>
                <ProjectList />
            </Section>
        </MainWrapper>
    );
}

export default Home;