import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import '../Section/Section.scss';
import { DarkModeContext } from '../../contexts/DarkModeContext/DarkModeContext';

const Section = ({ className, isHeader, children }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  let sectionClass = 'p-2 px-lg-5 py-lg-4 section ' + (className ?? '');
  if (isHeader && !isDarkMode) {
    sectionClass += ' bg-light';
  }

  return (
    <section className={sectionClass}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
