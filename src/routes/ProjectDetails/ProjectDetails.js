import React, { useEffect, useState } from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Section from "../../components/Section/Section";
import { Col, Image, Row, Stack } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import PageOverview from "../../components/PageOverview/PageOverview";
import Projects from "../../data/projectsConfig.json";
import { FaIndustry, FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./ProjectDetails.scss"

const ProjectSection = ({ projectSection }) => {
    return (
        <section className="mb-3">
            <h4 className="fw-bold">{projectSection.title}</h4>
            <Row>
                <Col lg={projectSection.imgInline ? 6 : 12}>
                    {projectSection.content.map((item, ix) => <p key={ix}>{item}</p>)}
                </Col>
                {projectSection.imgInline && (
                    <Col lg={6}>
                        <Image className="project-section-img" src={require(`../../assets/images/${projectSection.images[0]}`)} />
                    </Col>
                )}
            </Row>
            {projectSection.images && projectSection.images.length > 0 && !projectSection.imgInline && (
                <Row> {projectSection.images.map((img, ix) => <Col key={ix} lg={6}><Image className="project-section-img" src={require(`../../assets/images/${img}`)} /></Col>)} </Row>)
            }
        </section>
    );
}

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null)
    const navigate = useNavigate();
    
    useEffect(() => {
        const proj = Projects.find(x => x.id === id);
        if(proj){
            setProject(proj);
        } else {
            navigate("/");
        }
    }, [id, navigate]);

    if(!project) {
        return null;
    }

    return (
        <MainWrapper>
            <PageOverview title={"Case Study: " + project.title}>
                <p>{project.intro}</p>
            </PageOverview>
            <Section>
                <Stack>
                    <Row className="project-overview p-3 mx-0 mb-5">
                        <Col lg="3" className="project-image-container">
                            <Image src={require(`../../assets/images/${project.image}`)} alt="ProjectImage" className="project-intro-img rounded-2" />
                        </Col>
                        <Col>
                            <Stack gap={2}>
                                <h2 className="fw-bold">{project.client}</h2>
                                <span>
                                    <FaLocationDot /> <strong>Address:</strong> {project.address}
                                </span>
                                <span>
                                    <FaIndustry /> <strong>Industry:</strong> {project.industry}
                                </span>
                                {project.website && <span>
                                    <FaLink /> <strong>Website:</strong> <a href={project.website} target="_blank" rel="noopener noreferrer">{project.website}</a>
                                </span>}
                                <br />
                                <h5>Project requirements:</h5>
                                <ul>
                                    {project.requirements.map((item, index) => {
                                        return(
                                            <li key={index}>{item}</li>
                                        );
                                    })}
                                </ul>
                            </Stack>
                        </Col>
                    </Row>
                    {project.sections?.map((item, index) => <ProjectSection key={index} projectSection={item} />)}
                </Stack>
            </Section>
        </MainWrapper>
    );
};

export default ProjectDetails;