import { useContext, useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProfileDataContext } from '../../contexts/ProfileContext/ProfileContext';
// import "./ProjectList.scss"

const ProjectList = ({ featuredOnly }) => {
  const profile = useContext(ProfileDataContext);

  const filteredProjects = useMemo(
    () =>
      featuredOnly
        ? profile.projects.filter((item) => item.isFeatured)
        : profile.projects,
    [featuredOnly, profile.projects],
  );

  return (
    <Row className='g-5 py-4'>
      {filteredProjects.map((item, index) => {
        return (
          <Col key={index} sm={12} md={6}>
            <ProjectCard project={item}></ProjectCard>
          </Col>
        );
      })}
    </Row>
  );
};

export default ProjectList;
