import MainWrapper from '../../components/MainWrapper/MainWrapper';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section/Section';
import ProjectList from '../../components/ProjectList/ProjectList';
import PageOverview from '../../components/PageOverview/PageOverview';

const Projects = () => {
  return (
    <MainWrapper>
      <Helmet>
        <title>Portfolio | Jayvee Bustarde</title>
        <meta name='description' content="Browse Jayvee Bustarde's portfolio of software development projects." />
        <meta property='og:title' content='Portfolio | Jayvee Bustarde' />
      </Helmet>
      <PageOverview title={'Portfolio'} />
      <hr className='dark-hr' />
      <Section>
        <ProjectList />
      </Section>
    </MainWrapper>
  );
};

export default Projects;
