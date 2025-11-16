import { useContext } from 'react';
import { Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import IconMap from '../IconMap/IconMap.js';
import { ProjectContext } from '../../contexts/ProjectContext/ProjectContext.jsx';
import '../ProjectSection/ProjectSection.scss';
import { getProjectImageUrl } from '../../utils/imageLoader'; 

const ProjectSection = ({ projectSection }) => {
  const { project } = useContext(ProjectContext);

  return (
    <section className='mb-3'>
      <p
        className={
          'mb-3 fw-bold ' +
          (projectSection.isMainSection ? 'h3 mt-3' : 'lead text-muted')
        }
      >
        {projectSection.title}
      </p>
      {projectSection.displayTools && (
        <Row md='auto' className='justify-content-center'>
          {project.tech.map((item, index) => {
            const tool = IconMap[item];
            if (!tool) {
              return null;
            }
            const iconStyle = { color: tool.color };
            return (
              <Col key={index} className='text-center p-3'>
                <OverlayTrigger
                  overlay={<Tooltip id={tool.name}>{tool.name}</Tooltip>}
                  placement='top'
                >
                  <span className=''>
                    <tool.icon style={iconStyle} className='proj-tech' />
                  </span>
                </OverlayTrigger>
              </Col>
            );
          })}
        </Row>
      )}
      {projectSection.content && (
        <Row>
          <Col xl={projectSection.imgInline ? 6 : 12}>
            {projectSection.content.map((item, ix) => (
              <p key={ix} className='text-justify'>
                {item}
              </p>
            ))}
          </Col>
          {projectSection.imgInline && projectSection.images?.[0] && (
            <Col xl={6} className='text-center'>
              {(() => {
                const inlineImgSrc = getProjectImageUrl(
                  projectSection.images[0],
                );
                if (!inlineImgSrc) return null;

                return (
                  <Image
                    className='project-section-img rounded-4'
                    src={inlineImgSrc}
                    alt={projectSection.title || 'Project section image'}
                  />
                );
              })()}
            </Col>
          )}
        </Row>
      )}  
      {projectSection.images && projectSection.images.length > 0 && !projectSection.imgInline && (
          <Row className='my-3'>
            {projectSection.images.length === 1 && <Col />}

            {projectSection.images.map((img, ix) => {
              const imgSrc = getProjectImageUrl(img);
              if (!imgSrc) return null;

              const colSize = projectSection.images.length === 1 && projectSection.fullWidthImg ? 12 : 6;

              return (
                <Col
                  className='text-center'
                  key={ix}
                  lg={colSize}
                >
                  <Image
                    className='project-section-img rounded-3'
                    src={imgSrc}
                    alt={projectSection.title || 'Project section image'}
                  />
                </Col>
              );
            })}

            {projectSection.images.length === 1 && <Col />}
          </Row>
        )}
    </section>
  );
};

export default ProjectSection;
