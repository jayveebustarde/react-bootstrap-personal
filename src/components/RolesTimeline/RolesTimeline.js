import React from "react";
import { Chrono } from "react-chrono";
import "../RolesTimeline/RolesTimeline.scss";

const RolesTimeline = ({ roles }) => {
    return (
        <div>
            <Chrono
                items={roles}
                mode="VERTICAL_ALTERNATING"
                hideControls="true"
                disableClickOnCircle="true"
                cardHeight="100"
                theme={{
                  primary: 'cornflowerblue'
                }}
            />
        </div>
    );
}

export default RolesTimeline;