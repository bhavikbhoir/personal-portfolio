import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar'
import { FaBook, FaCertificate, FaHome, FaIdBadge, FaLightbulb, FaPencilAlt, FaRProject, FaSketch, FaStar } from 'react-icons/fa';

const Styles = styled.div`
.navbar, .nav{
    // display: inline-block!important;
    width: min-content;
    height:100vh;
    position: fixed;
    display: grid;
			  -webkit-flex-wrap: wrap;
			      -ms-flex-wrap: wrap;
			          flex-wrap: wrap;
			  -webkit-justify-content: space-around;
			      -ms-flex-pack: distribute;
			          justify-content: space-around;
			  -webkit-box-align: center;
			  -webkit-align-items: center;
			      -ms-flex-align: center;
			          align-items: center;
			  -webkit-align-content: center;
			      -ms-flex-line-pack: center;
          align-content: center;
}
.nav-item{
    width: 100%;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1rem;
}
a{
    color: white;
}
.dropdown-item{
    color: black;
}
svg {
    width: 15px;
    height: 15px;
    margin-top: -2px
}
.col {
    padding-left: 0;
}
`;

export const Leftbar = () => (
    <Styles>
        <div>
        {/* <Navbar collapseOnSelect expand="lg">
        <Navbar.Collapse id="responsive-navbar-nav"> */}
        <Nav activeKey="/">
            <Row style={{width: "100%", margin: "0", padding: "0", display: "block"}}>
                <Col>
                <Nav.Item>
            <Nav.Link href="/"><FaHome /> Home</Nav.Link>
            </Nav.Item>
            </Col>
            <Col>

            <Nav.Item>
            <Nav.Link href="/Education"><FaBook/> Education</Nav.Link>
            </Nav.Item>
            </Col>
            <Col className="d-flex">
            <FaLightbulb style={{width: "16px", height: "16px", margin: "14px -10px 0 16px", color: "white"}}/><NavDropdown title="Projects" id="nav-dropdown" eventKey="/Projects">
                <NavDropdown.Item href="/Projects/Personal">Personal</NavDropdown.Item>
                <NavDropdown.Item href="/Projects/Opentabs">OpenTabs</NavDropdown.Item>
                <NavDropdown.Item href="/Projects/Forkaia">Forkaia</NavDropdown.Item>
                <NavDropdown.Item href="/Projects/TAMUK">Texas A&M University</NavDropdown.Item>
                {/* <NavDropdown.Item href="/Projects/UOFM">University of Mumbai</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Projects/Misc">Miscellaneous</NavDropdown.Item>
            </NavDropdown>
                </Col>
            </Row>
            <Row style={{width: "120%", margin: "0", padding: "0", display: "block"}}>
                <Col>
            
            <Nav.Item>
            <Nav.Link href="/Experience"><FaIdBadge/> Experience</Nav.Link>
            </Nav.Item>
            </Col>
            <Col>
            <Nav.Item>
            <Nav.Link href="/Skills"><FaStar /> Skills</Nav.Link>
            </Nav.Item>
            </Col>
            <Col>
            <Nav.Item>
            <Nav.Link href="/Certificates"><FaCertificate/> Certifications</Nav.Link>
            </Nav.Item>
            </Col>
            </Row>
            <Row style={{width: "100%", margin: "0", padding: "0", display: "block"}}>
            <Col>
            <Nav.Item>
            <Nav.Link href="/Artwork"><FaPencilAlt/> Artwork</Nav.Link>
            </Nav.Item>
            </Col>
            </Row>
        </Nav>
        
  {/* </Navbar.Collapse>
</Navbar> */}
        </div>
    </Styles>
);