import React from "react";
import { Stack } from "react-bootstrap";
import "../MainWrapper/MainWrapper.scss";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const MainWrapper = ({ children }) => {
    return (
        <Stack gap={0} className="main-wrapper">
            <ScrollToTop />
            {children}
        </Stack>
    );
}

export default MainWrapper;