import React, { useContext, useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import "../RolesTimeline/RolesTimeline.scss";
import { ProfileDataContext } from "../../contexts/ProfileContext/ProfileContext";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

const RolesTimeline = () => {
  const [cardTheme, setCardTheme] = useState({});
  const { isDarkMode } = useContext(DarkModeContext);
  const profile = useContext(ProfileDataContext);

  useEffect(() => {
    if (isDarkMode) {
      setCardTheme({
        cardBgColor: "#1d2a3a",
        primary: "cornflowerblue",
      });
    } else {
      setCardTheme({
        primary: "cornflowerblue",
        cardBgColor: "red",
      });
    }
  }, [isDarkMode]);

  return (
    <div>
      <Chrono
        items={profile.roles}
        mode="VERTICAL_ALTERNATING"
        hideControls="true"
        disableClickOnCircle="true"
        cardHeight="150"
        enableDarkToggle="true"
        theme={cardTheme}
      />
    </div>
  );
};

export default RolesTimeline;
