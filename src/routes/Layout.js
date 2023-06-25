import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, Image, Stack, Button } from 'react-bootstrap';
import { BsFillPersonFill, BsFillFileTextFill, BsFillEnvelopePaperFill, BsLinkedin, BsGithub } from "react-icons/bs";
import profileImg from "../assets/images/bwprofile.jpg";

const CircleIconLink = () => {
    const linkedinUrl = "https://www.linkedin.com/in/jayveebustarde/";
    const githubUrl = "https://github.com/jayveebustarde";
    return (
        <Stack direction="horizontal" gap={3} className="icons-stack">
            <Button variant="light" className="circle-icon-link" href={linkedinUrl} target="_blank">
                <BsLinkedin className="inverse-icon "/>
            </Button>
            <Button variant="light" className="circle-icon-link" href={githubUrl} target="_blank">
                <BsGithub className="inverse-icon" />
            </Button>
        </Stack>
    );
}

const HeaderNavLink = ({BsIcon, hrefLink, navText}) => {
    return (
        <Nav.Link as={NavLink} to={hrefLink} className={({ isActive }) => isActive ? "active-nav-link" : "" }>
            <BsIcon className="link-icon mx-2"/>{navText}
        </Nav.Link>
    );
}

const Layout = () => {
    return (
        <>
            <header className="app-header text-center">
                <Container fluid>
                    <Row>
                        <Col className=" header-sidebar">
                            <Navbar expand="lg" className="flex-column">
                                <div className="nav-header">
                                    <Navbar.Brand href="#">
                                        <h4 className="m-auto py-3 header-brand">Jayvee Bustarde</h4>
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="sidebar-nav" />
                                </div>
                                <Navbar.Collapse id="sidebar-nav">
                                    <Nav className="flex-column">
                                        <Stack gap={2} align="center">
                                            <div className="image-container">
                                                <Image src={profileImg} alt="profile" className="profile-img" roundedCircle />
                                            </div>
                                            <p>Hey! I am Jayvee, a software developer. Welcome to my personal website.</p>
                                            < CircleIconLink />
                                        </Stack>
                                        <hr />
                                        <HeaderNavLink BsIcon={BsFillPersonFill} hrefLink="/" navText="About Me" />
                                        <HeaderNavLink BsIcon={BsFillFileTextFill} hrefLink="/resume" navText="Resume" />
                                        <HeaderNavLink BsIcon={BsFillEnvelopePaperFill} hrefLink="/contact" navText="Contact" />
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </header>
            <Outlet />
        </>
    );
}

export default Layout;