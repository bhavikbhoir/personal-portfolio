import React, { Component } from 'react';
import {Row, Col, Button, Container, CardColumns} from 'react-bootstrap';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';
import { FaUser, FaMapMarkerAlt, FaGithub, FaInfoCircle } from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';
import Iframe from 'react-iframe'
import opentabsscreen from '../assets/opentabs.png'

const Styles = styled.div`
h2{
    text-align: center;
    // font-weight: 700;
}
.card-columns {
    column-count: 1;
    text-align: left;
}
.card-columns .card{
    width: 100%;
    padding: 1rem;
}
.card-img-top {
  width: 100%;
//   margin: 0.5rem;
  border-radius: 0.25rem;
}
#logo{
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-justify-content: end;
      -ms-flex-pack: distribute;
          justify-content: end;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-align-content: center;
      -ms-flex-line-pack: center;
    align-content: center;
}
img{
    // margin: 2rem 0;
    // border-radius: 25px;
}
a{
    color: #113476;
}
ul{
    text-align: left;
    font-size: 0.875rem;
}
`;

export const Opentabs = () => (
    <Styles>
        {/* <h2>OpenTabs Projects</h2> */}
        <CardColumns>    
            <Card>
            <Row>
                <Col xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src="https://opentabs.org/images/logo.png" width="auto"/>
                </Col>
                <Col xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>OpenTabs</Card.Title>
                <Card.Text>
                <FaUser /> Web Developer
                <br/>
                <FaMapMarkerAlt /> Remote
                </Card.Text>
                <Card.Link href="https://chrome.google.com/webstore/detail/opentabs/igeeighenacaciapkehcacnojlegbnpa?hl=en" target="_blank"><FaInfoCircle/> About</Card.Link>
                <Card.Link href="https://app.opentabs.org/tabbing" target="_blank"><GoGlobe/> Live Version</Card.Link>
                </Card.Body>
                </Col>
                
                {/* <img src={opentabsscreen} width="100%"/>
                
                <Col style={{textAlign: "center"}}>
                    <Row>
                        <Col>
                        <h6>Tech stack</h6>
                        <ul>
                            <li>React</li >
                            <li>React-Bootstrap</li>
                            <li>React-Hooks</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Node JS</li>
                            <li>MongoDb</li>
                        </ul>
                        </Col>
                        <Col>
                        <h6>Tools</h6>
                        <ul>
                            <li>Google Analytics</li>
                            <li>Hostinger for deployment/hosting</li>
                            <li>PuTTY</li>
                            <li>GitHub (Desktop/Git Terminal)</li>
                        </ul>
                        </Col>
                    </Row>
                </Col> */}
                </Row>
            </Card>
        </CardColumns>
    </Styles>
)