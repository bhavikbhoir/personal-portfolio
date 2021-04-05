import React, { Component } from 'react';
import {Row, Col, Button, Container, CardColumns} from 'react-bootstrap';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';
import { FaUser, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';
import Iframe from 'react-iframe'
import GC from '../assets/home-gc.jpg'
import WYT from '../assets/home-wyt.jpg'
import GC_Logo from '../assets/GC_logo.png'
import WYT_Logo from '../assets/WYT_logo.png'
import HG from '../assets/HG.jpg'
import HG_Logo from '../assets/HG_Logo.png'
import Fovies from '../assets/fovies-home.png'
import Fovies_Logo from '../assets/fovies_logo.jpg'

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

export const Forkaia = () => (
    <Styles>
        {/* <h2>Forkaia Projects</h2> */}
        <CardColumns>    
            <Card>
            <Row>
                <Col xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={GC_Logo} width="auto"/>
                </Col>
                <Col xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>GameChip</Card.Title>
                <Card.Text>
                    Prototype - Website still under development
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/GameChip" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://gamechip.herokuapp.com/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                </Card.Body>
                </Col>
                
                {/* <img src={GC} width="100%"/>

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
                        </ul>
                        </Col>
                        <Col>
                        <h6>Tools</h6>
                        <ul>
                            <li>Google Analytics</li>
                            <li>Heroku App for deployment</li>
                            <li>GitHub (Desktop/Git Terminal)</li>
                        </ul>
                        </Col>
                    </Row>
                </Col> */}
            </Row>
            </Card>

            <Card>
            <Row>
                <Col xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={WYT_Logo} width="auto"/>
                </Col>
                <Col xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>WhatYallThink</Card.Title>
                <Card.Text>
                    Prototype - Website still under development
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/Whatyallthink" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://whatyallthink.herokuapp.com/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                </Card.Body>
                </Col>
                
                {/* <img src={WYT} width="100%"/>

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
                        </ul>
                        </Col>
                        <Col>
                        <h6>Tools</h6>
                        <ul>
                            <li>Google Analytics</li>
                            <li>Heroku App for deployment</li>
                            <li>GitHub (Desktop/Git Terminal)</li>
                        </ul>
                        </Col>
                    </Row>
                </Col> */}
            </Row>
            </Card>

            <Card>
            <Row>
                <Col xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={HG_Logo} width="auto"/>
                </Col>
                <Col xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>Hiergraphics</Card.Title>
                <Card.Text>
                    Prototype - Website still under development
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/Hiergraphics" target="_blank"><FaGithub/> GitHub</Card.Link>
                {/* <Card.Link href="https://whatyallthink.herokuapp.com/" target="_blank"><GoGlobe/> Live Version</Card.Link> */}
                </Card.Body>
                </Col>
                
                {/* <img src={HG} width="100%"/>

                <Col style={{textAlign: "center"}}>
                    <Row>
                        <Col>
                        <h6>Tech stack</h6>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>T-SQL</li>
                        </ul>
                        </Col>
                        <Col>
                        <h6>Tools</h6>
                        <ul>
                            <li>XAMPP</li>
                            <li>Apache</li>
                            <li>SQL Server Studio</li>
                        </ul>
                        </Col>
                    </Row>
                </Col> */}
            </Row>
            </Card>

            <Card>
            <Row>
                <Col xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={Fovies_Logo} width="auto"/>
                </Col>
                <Col xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>Fovies</Card.Title>
                <Card.Text>
                    Prototype - Website still under development
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/Fovies" target="_blank"><FaGithub/> GitHub</Card.Link>
                {/* <Card.Link href="https://whatyallthink.herokuapp.com/" target="_blank"><GoGlobe/> Live Version</Card.Link> */}
                </Card.Body>
                </Col>
                
                {/* <img src={Fovies} width="100%"/>

                <Col style={{textAlign: "center"}}>
                    <Row>
                        <Col>
                        <h6>Tech stack</h6>
                        <ul>
                            <li>Angular</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        </Col>
                    </Row>
                        <div>
                        <h5>Tools</h5>
                        <ul>
                            <li>XAMPP</li>
                            <li>Apache</li>
                            <li>SQL Server Studio</li>
                        </ul>
                        </div>
                </Col> */}
            </Row>
            </Card>

        </CardColumns>
    </Styles>
)