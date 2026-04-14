import { useContext, useMemo } from 'react';
import { Chrono } from 'react-chrono';
import 'react-chrono/dist/style.css';
import '../RolesTimeline/RolesTimeline.scss';
import { ProfileDataContext } from '../../contexts/ProfileContext/ProfileContext';
import { DarkModeContext } from '../../contexts/DarkModeContext/DarkModeContext';

const RolesTimeline = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const profile = useContext(ProfileDataContext);

  const cardTheme = useMemo(
    () =>
      isDarkMode
        ? { cardBgColor: '#1d2a3a', primary: 'cornflowerblue' }
        : { primary: 'cornflowerblue', cardBgColor: '#ffffff' },
    [isDarkMode],
  );

  return (
    <div>
      <Chrono
        items={profile.roles}
        mode='VERTICAL_ALTERNATING'
        hideControls={true}
        disableToolbar={true}
        disableClickOnCircle={true}
        cardHeight={150}
        darkMode={isDarkMode}
        enableDarkToggle={false}
        theme={cardTheme}
      />
    </div>
  );
};

export default RolesTimeline;
