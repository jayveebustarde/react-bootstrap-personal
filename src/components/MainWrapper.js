import React from "react";
import { Stack } from "react-bootstrap";

const MainWrapper = ({ children }) => {
    return (
        <Stack gap={0} className="main-wrapper">
            {children}
        </Stack>
    );
}

export default MainWrapper;