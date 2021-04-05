import React, { Component } from 'react';
import {Row, Col, Button, Container, CardColumns, CardGroup} from 'react-bootstrap';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';
import { FaUser, FaMapMarkerAlt, FaGithub, FaInfo, FaFigma } from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';
import Iframe from 'react-iframe'
import TGW from '../assets/TGW.png'
import TGWLogo from '../assets/TGW_logo.png'
import covid from '../assets/covid.png'
import covid_page from '../assets/Update2.png'
import FBBA from '../assets/FBBA.png'
import FootBBall from '../assets/FootBBall-App.png'
import FT from '../assets/FT.png'
import FT_video from '../assets/FT.mp4'
import FootyTabs from '../assets/FootyTabs.png'

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

export const Personal = () => (
    <Styles style={{width: "100%"}}>
        {/* <h2>Personal Projects</h2> */}
        <CardColumns>    
            <Card>
            <Row>
                <Col xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={TGWLogo} width="auto"/>
                </Col>
                <Col xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>The Gooners World</Card.Title>
                <Card.Text>
                    Your home for all things Arsenal F.C. 🔴⚪
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/the-gooners-world" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://the-gooners-world.web.app/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                </Card.Body>
                </Col>
                
                {/* <img src={TGW} width="100%"/>

                <Col style={{textAlign: "center"}}>
                    <Row>
                        <Col>
                        <h6>Tech stack</h6>
                        <ul className="d-block">
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
                        <ul className="d-block">
                            <li>Google Analytics</li>
                            <li>Firebase for deployment</li>
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
                <Card.Img variant="top" src={covid} width="auto"/>
                </Col>
                <Col xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>Covid Tracker</Card.Title>
                <Card.Text>
                    Know and track the COVID-19 pandemic.
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/Covid-Tracker" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="http://www.covid19-tracker.s3-website.ap-south-1.amazonaws.com/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                </Card.Body>
                </Col>
                
                {/* <img src={covid_page} width="100%"/>

                <Col style={{textAlign: "center"}}>
                    <Row>
                        <Col>     
                        <h5>Tech stack</h5>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap4</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                        </ul>
                        </Col>
                        <Col>
                        <h5>Tools</h5>
                        <ul>
                            <li>AWS</li>
                            <li>Google Analytics</li>
                            <li>Firebase for deployment</li>
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
                <Card.Img variant="top" src={FBBA} width="auto"/>
                </Col>
                <Col xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>The Foot'BB'all App</Card.Title>
                <Card.Text>
                Home of your favourite ball game.
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/FootBBall-App" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://the-footbball-app.web.app/" target="_blank"><GoGlobe/> Live Version</Card.Link >
                </Card.Body>
                </Col>
                
                {/* <img src={FootBBall} width="100%"/>

                <Col style={{textAlign: "center"}}>
                    <div>
                        A Football App built in react for checking the standings of major European Football leagues. At the moment you can check standings for Premier League, La Liga, Ligue 1, Serie A, Bundesliga and Eredivisie. You can also check updates from the UEFA Champions LEague.
                    </div>
                    <Row>
                        <Col>
                        <h5>Tech stack</h5>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap4</li>
                            <li>JavaScript</li>
                            <li>React JS</li>
                            <li>React Bootstrap</li>
                        </ul>
                        </Col>
                        <Col>
                        <h5>Tools</h5>
                        <ul>
                            <li>Google Analytics</li>
                            <li>Firebase for deployment</li>
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
                <Card.Img variant="top" src={FT} width="auto"/>
                </Col>
                <Col xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>FootyTabs</Card.Title>
                <Card.Text>
                A Chrome extension for Premier League Fans.
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/FootyTabs" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://footytabs.herokuapp.com/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                <Card.Link href="https://www.figma.com/proto/NiEeBSYBqWMtMlmWFVOLQQ/FootyTabs?node-id=69%3A7&scaling=scale-down" target="_blank"><FaFigma/> Prototype</Card.Link>
                </Card.Body>
                </Col>
                
                {/* <img src={FootyTabs} width="100%"/>

                <Col style={{textAlign: "center"}}>
                    <Row>
                        <Col>
                        <h5>Tech stack</h5>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap4</li>
                            <li>JavaScript</li>
                            <li>React JS</li>
                            <li>React Bootstrap</li>
                        </ul>
                        </Col>
                        <Col>
                        <h5>Tools</h5>
                        <ul>
                            <li>Figma</li>
                            <li>Google Analytics</li>
                            <li>Heroku App for deployment</li>
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