import PfConfig from '../../data/portfolioConfig.json';
import { ProfileDataContext } from './ProfileContext';

const ProfileProvider = ({ children }) => {
  return (
    <ProfileDataContext.Provider value={PfConfig}>
      {children}
    </ProfileDataContext.Provider>
  );
};

export default ProfileProvider;
