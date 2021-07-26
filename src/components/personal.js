import React from 'react';
import {Row, Col, CardColumns} from 'react-bootstrap';
import styled from 'styled-components';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import {  FaGithub, FaFigma } from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';
import TGW from '../assets/Screens/TGW.png'
import TGWLogo from '../assets/TGW_logo.png'
import covid from '../assets/covid.png'
import covid_page from '../assets/Screens/Covid.png'
import FBBA from '../assets/FBBA.png'
import FootBBall from '../assets/Screens/FBB.png'
import FT from '../assets/FT.png'
import FT_video from '../assets/FT.mp4'
import FootyTabs from '../assets/FootyTabs.png'
import Pokedex from '../assets/pokedex.png'
import TPALogo from '../assets/pokedex-logo.png'
import RSP from '../assets/react-signature-pad.PNG'
import crs from '../assets/crs.jpg'
import sp from '../assets/sp.jpg'

const Styles = styled.div`
h2{
    text-align: center;
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
        <h2>Personal Projects</h2>
        <CardColumns>   
        <Card>
            <Row>
                <Col xl={1} xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={TGWLogo} width="auto"/>
                </Col>
                <Col xl={11} xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>The Gooners World</Card.Title>
                <Card.Text>
                    Your home for all things Arsenal F.C. 🔴⚪
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/the-gooners-world" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://the-gooners-world.web.app/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                </Card.Body>
                </Col>
                
                <img src={TGW} width="100%"/>

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
                </Col>
            </Row>
            </Card>

            <Card>
            <Row>
                <Col xl={1} xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={sp} width="auto"/>
                </Col>
                <Col xl={11} xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>React JS - Signature Pad</Card.Title>
                <Card.Text>
                Implement draw custom signature functionality in your React app similar to DocuSign and other e-sign applications.
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/React-Signature-Pad" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://csb-ygdnb.netlify.app/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                </Card.Body>
                </Col>
                
                <img src={RSP} width="100%"/>

                <Col style={{textAlign: "center"}}>
                    <Row>
                        <Col>
                        <h6>Tech stack</h6>
                        <ul className="d-block">
                            <li>React</li >
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        </Col>
                        <Col>
                        <h6>Tools</h6>
                        <ul className="d-block">
                            <li>Code-Sandbox</li>
                            <li>Netlify for deployment</li>
                            <li>GitHub (Desktop/Git Terminal)</li>
                        </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Card>

            <Card>
            <Row>
                <Col xl={1} xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={crs} width="auto"/>
                </Col>
                <Col xl={11} xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>Custom React Searchbar</Card.Title>
                <Card.Text>
                A custom searchbar to let users select and retrieve search results from their favorite search engines.
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/Custom_React_Searchbar" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://csb-hrmkl.netlify.app/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                </Card.Body>
                </Col>
                
                <img src="https://user-images.githubusercontent.com/43330221/121641382-b9e83a80-ca54-11eb-89f6-4a0e71e6f8ce.png" width="100%"/>

                <Col style={{textAlign: "center"}}>
                    <Row>
                        <Col>
                        <h6>Tech stack</h6>
                        <ul className="d-block">
                            <li>React</li >
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>JavaScript</li>
                        </ul>
                        </Col>
                        <Col>
                        <h6>Tools</h6>
                        <ul className="d-block">
                            <li>Code-Sandbox</li>
                            <li>Netlify for deployment</li>
                            <li>GitHub (Desktop/Git Terminal)</li>
                        </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Card>

            <Card>
            <Row>
                <Col xl={1} xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src="https://rawcdn.githack.com/bhavikbhoir/Narutoverse-Jutsu/661e2032d3ef71fa9f02cc07dbd5321355d6165e/thumbnail.png" width="auto"/>
                </Col>
                <Col xl={11} xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>Narutoverse-Jutsu</Card.Title>
                <Card.Text>
                Information on the jutsus used by Narutoverse's Sun vs Moon i.e Rasengan (Naruto) vs Sharingan (Sasuke).
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/Narutoverse-Jutsu" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://csb-oxp2u.netlify.app/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                </Card.Body>
                </Col>
                
                <img src="https://user-images.githubusercontent.com/43330221/121462388-24767900-c976-11eb-99e8-302063e5a028.png" width="100%"/>

                <Col style={{textAlign: "center"}}>
                    <Row>
                        <Col>
                        <h6>Tech stack</h6>
                        <ul className="d-block">
                            <li>React</li >
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>JavaScript</li>
                        </ul>
                        </Col>
                        <Col>
                        <h6>Tools</h6>
                        <ul className="d-block">
                            <li>Code-Sandbox</li>
                            <li>Netlify for deployment</li>
                            <li>GitHub (Desktop/Git Terminal)</li>
                        </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Card>

            <Card>
            <Row>
                <Col xl={1} xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={TPALogo} width="auto"/>
                </Col>
                <Col xl={11} xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>The Pokedex App</Card.Title>
                <Card.Text>
                    Know your Pokemon!
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/The-Pokedex-App" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://the-pokedex-app.web.app/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                </Card.Body>
                </Col>
                
                <img src={Pokedex} width="100%"/>

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
                            <li>Firebase for deployment</li>
                            <li>GitHub (Desktop/Git Terminal)</li>
                        </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Card>

            
            <Card>
            <Row>
                <Col xl={1} xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={covid} width="auto"/>
                </Col>
                <Col xl={11} xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>Covid Tracker</Card.Title>
                <Card.Text>
                    Know and track the COVID-19 pandemic.
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/Covid-Tracker" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="http://www.covid19-tracker.s3-website.ap-south-1.amazonaws.com/" target="_blank"><GoGlobe/> Live Version</Card.Link>
                </Card.Body>
                </Col>
                
                <img src={covid_page} width="100%"/>

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
                </Col>
            </Row>
            </Card>

            <Card>
            <Row>
                <Col xl={1} xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={FBBA} width="auto"/>
                </Col>
                <Col xl={11} xs={10}>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>The Foot'BB'all App</Card.Title>
                <Card.Text>
                Home of your favourite ball game.
                </Card.Text>
                <Card.Link href="https://github.com/bhavikbhoir/FootBBall-App" target="_blank"><FaGithub/> GitHub</Card.Link>
                <Card.Link href="https://the-footbball-app.web.app/" target="_blank"><GoGlobe/> Live Version</Card.Link >
                </Card.Body>
                </Col>
                
                <img src={FootBBall} width="100%"/>

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
                </Col>
            </Row>
            </Card>

            <Card>
            <Row>
                <Col xl={1} xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src={FT} width="auto"/>
                </Col>
                <Col xl={11} xs={10}>
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
                
                <img src={FootyTabs} width="100%"/>

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
                </Col>
            </Row>
            </Card>
        </CardColumns>
    </Styles>
)