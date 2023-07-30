import React from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Section from "../../components/Section/Section";
import ProjectList from "../../components/ProjectList/ProjectList";
import PageOverview from "../../components/PageOverview/PageOverview";

const Projects = () => {
    return (
        <MainWrapper>
            <PageOverview>
                <h1>Portfolio</h1>
            </PageOverview>
            <Section>
                <ProjectList />
            </Section>
        </MainWrapper>
    );
};

export default Projects;