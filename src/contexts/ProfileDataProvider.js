import React, { createContext } from "react";
import PfConfig from "../data/portfolioConfig.json"

export const ProfileDataContext = createContext(PfConfig);

const ProfileDataProvider = ({children}) =>{
    return (
        <ProfileDataContext.Provider value={PfConfig}>
            {children}
        </ProfileDataContext.Provider>
    );
}

export default ProfileDataProvider;
