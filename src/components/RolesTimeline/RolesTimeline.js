import React, { useContext } from "react";
import { Chrono } from "react-chrono";
import "../RolesTimeline/RolesTimeline.scss";
import { ProfileDataContext } from "../../contexts/ProfileContext/ProfileContext";

const RolesTimeline = () => {
  const profile = useContext(ProfileDataContext);
  return (
    <div>
      <Chrono
        items={profile.roles}
        mode="VERTICAL_ALTERNATING"
        hideControls="true"
        disableClickOnCircle="true"
        cardHeight="150"
        theme={{
          primary: "cornflowerblue",
        }}
      />
    </div>
  );
};

export default RolesTimeline;
