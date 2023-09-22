import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
  Stack,
} from "react-bootstrap";
import {
  BsFillEnvelopePaperFill,
  BsFillFileTextFill,
  BsFillPersonFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import profileData from "../../data/portfolioConfig.json";
import profileImg from "../../assets/images/bwprofile.jpg";
import "../HeaderNav/HeaderNav.scss";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

const CircleIconLink = () => {
  const linkedinUrl = "https://www.linkedin.com/in/jayveebustarde/";
  const githubUrl = "https://github.com/jayveebustarde";
  return (
    <Stack direction="horizontal" gap={3} className="icons-stack">
      <Button
        variant="light"
        className="circle-icon-link"
        href={linkedinUrl}
        target="_blank"
      >
        <BsLinkedin className="inverse-icon " />
      </Button>
      <Button
        variant="light"
        className="circle-icon-link"
        href={githubUrl}
        target="_blank"
      >
        <BsGithub className="inverse-icon" />
      </Button>
    </Stack>
  );
};

const HeaderNavLink = ({ BsIcon, hrefLink, navText, onNavLinkClick }) => {
  return (
    <Nav.Link
      as={NavLink}
      to={hrefLink}
      className={({ isActive }) => (isActive ? "active-nav-link" : "")}
      onClick={onNavLinkClick}
    >
      <BsIcon className="link-icon mx-2" />
      {navText}
    </Nav.Link>
  );
};

const HeaderNav = () => {
  const [navExpanded, setNavExpanded] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const handleNavClick = () => setNavExpanded(false);

  return (
    <header className="app-header text-center">
      <Container fluid>
        <Row>
          <Col className=" header-sidebar">
            <Navbar
              expand="lg"
              className="flex-column"
              expanded={navExpanded}
              onToggle={(expanded) => setNavExpanded(expanded)}
            >
              <div className="nav-header">
                <Navbar.Brand href="/">
                  <h4 className="m-auto py-3 header-brand">
                    {profileData.name}
                  </h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="sidebar-nav" />
              </div>
              <Navbar.Collapse id="sidebar-nav">
                <Nav className="flex-column">
                  <Stack gap={2} align="center">
                    <div className="image-container">
                      <Image
                        src={profileImg}
                        alt="profile"
                        className="profile-img"
                        roundedCircle
                      />
                    </div>
                    <p>{profileData.heading}</p>
                    <CircleIconLink />
                  </Stack>
                  <hr />
                  <HeaderNavLink
                    BsIcon={BsFillPersonFill}
                    hrefLink="/"
                    navText="About Me"
                    onNavLinkClick={handleNavClick}
                  />
                  <HeaderNavLink
                    BsIcon={BsFillFileTextFill}
                    hrefLink="/resume"
                    navText="Resume"
                    onNavLinkClick={handleNavClick}
                  />
                  <HeaderNavLink
                    BsIcon={FaLaptopCode}
                    hrefLink="/projects"
                    navText="Projects"
                    onNavLinkClick={handleNavClick}
                  />
                  <HeaderNavLink
                    BsIcon={BsFillEnvelopePaperFill}
                    hrefLink="/contact"
                    navText="Contact"
                    onNavLinkClick={handleNavClick}
                  />
                  <hr />
                  <div className="w-100 d-flex justify-content-center">
                    <Button
                      variant="light"
                      className="circle-icon-link"
                      onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                      {!isDarkMode && (
                        <MdOutlineDarkMode className="norm-icon" />
                      )}
                      {isDarkMode && (
                        <MdOutlineLightMode className="inverse-icon " />
                      )}
                    </Button>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderNav;
