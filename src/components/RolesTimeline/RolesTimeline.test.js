import { render } from '@testing-library/react';
import { ProfileDataContext } from '../../contexts/ProfileContext/ProfileContext';
import { DarkModeContext } from '../../contexts/DarkModeContext/DarkModeContext';
import RolesTimeline from './RolesTimeline';

describe('<RolesTimeline />', () => {
  const mockContextValue = {
    roles: [
      {
        title: '2023 - 2023',
        cardTitle: 'Role 1',
        cardSubtitle: 'Role 1 address',
        cardDetailedText: 'Role 1 details',
      },
    ],
  };
  const mockDarkModeContext = {
    isDarkMode: true,
    setIsDarkMode: () => null,
  };
  it('renders correctly', () => {
    render(
      <DarkModeContext.Provider value={mockDarkModeContext}>
        <ProfileDataContext.Provider value={mockContextValue}>
          <RolesTimeline />
        </ProfileDataContext.Provider>
      </DarkModeContext.Provider>,
    );
  });
});
