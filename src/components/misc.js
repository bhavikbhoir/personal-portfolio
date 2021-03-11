import React, { Component } from 'react';
import {Row, Col, Button, Container, CardColumns} from 'react-bootstrap';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';
import { FaUser, FaMapMarkerAlt, FaGithub, FaMedium } from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';
import Iframe from 'react-iframe'
import vyorius from '../assets/vyorius.png'
import logo from '../assets/vyorius_logo.png'
import RCD from '../assets/React Decimal Counter.png'
import RCD_Home from '../assets/counter.gif'

const Styles = styled.div`
h2{
    text-align: center;
    font-weight: 700;
}
.card-columns {
    column-count: 1;
    text-align: left;
}
    width: 100%;
    padding: 1rem;
}
.card-img-top {
  width: 100%;
  margin: 0.5rem;
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

export const Misc = () => (
    <Styles>
        <h2>Miscellaneous Projects</h2>
        <CardColumns>    
            <Card>
            <Row>
                <Col xl={1} xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={RCD} width="auto"/>
                </Col>
                <Col xl={11} xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>React Decimal Counter</Card.Title>
                <Card.Text>
                The decimal counter increases the initial count by decimal places. Also, we will be saving the count in our local storage so that we don't lose the count on page refresh or when we close the browser/window.
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/react-counter" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://react-counters.herokuapp.com/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                <Card.Link href="https://medium.com/@bhvkbhoir95/react-decimal-counter-f4034a0917a1" target="_blank"><FaMedium/> Blog</Card.Link>
                </Card.Body>
                </Col>
                
                <Col lg={12}><img src={RCD_Home} width="100%"/></Col>

                <Col style={{textAlign: "center"}}>
                    <Row>
                        <Col>
                        <h6>Tech stack</h6>
                        <ul>
                            <li>React</li >
                            <li>React-Bootstrap</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        </Col>
                        <Col>
                        <h6>Tools</h6>
                        <ul>
                            <li>Heroku App for deployment</li>
                            <li>GitHub (Desktop/Git Terminal)</li>
                            <li>Medium (Publishing)</li>
                        </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Card>
            <Card>
            <Row>
                <Col xl={1} xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={logo} width="auto"/>
                </Col>
                <Col xl={11} xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>Vyorius</Card.Title>
                <Card.Text>
                    Converted a Figma wireframe into a prototype - Freelance.
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/vyoriustask" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://vyoriustask.herokuapp.com/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                </Card.Body>
                </Col>
                
                <Col lg={12}>
                <img src={vyorius} width="100%"/>
                </Col>

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
                            <li>Heroku App for deployment</li>
                            <li>GitHub (Desktop/Git Terminal)</li>
                        </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Card>
</CardColumns>
    </Styles>
)