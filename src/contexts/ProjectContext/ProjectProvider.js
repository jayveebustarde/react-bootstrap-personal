import { useState } from 'react';
import { ProjectContext } from './ProjectContext';

const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState(null);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
