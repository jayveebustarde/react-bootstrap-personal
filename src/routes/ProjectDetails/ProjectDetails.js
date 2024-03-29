import { useContext, useEffect } from 'react';
import MainWrapper from '../../components/MainWrapper/MainWrapper';
import Section from '../../components/Section/Section';
import { Stack } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import PageOverview from '../../components/PageOverview/PageOverview';
import Projects from '../../data/projectsConfig.json';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import { ProjectContext } from '../../contexts/ProjectContext/ProjectContext';
import ProjectOverview from '../../components/ProjectOverview/ProjectOverview';
import ProjectFooter from '../../components/ProjectFooter/ProjectFooter';
import './ProjectDetails.scss';

const ProjectDetails = () => {
  const { id } = useParams();
  const { project, setProject } = useContext(ProjectContext);
  const navigate = useNavigate();

  useEffect(() => {
    const proj = Projects.find((x) => x.id === id);
    if (proj) {
      setProject(proj);
    } else {
      navigate('/');
    }
  }, [id, navigate, setProject]);

  if (!project) {
    return null;
  }

  return (
    <MainWrapper>
      <PageOverview title={'Case Study: ' + project.title}>
        <p>{project.intro}</p>
      </PageOverview>
      <hr className='dark-hr' />
      <Section>
        <Stack>
          <ProjectOverview />
          {project.sections?.map((item, index) => (
            <ProjectSection key={index} projectSection={item} />
          ))}
        </Stack>
      </Section>
      <ProjectFooter />
    </MainWrapper>
  );
};

export default ProjectDetails;
