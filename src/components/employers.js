import React from 'react';
import {Row, Col, CardColumns} from 'react-bootstrap';
import styled from 'styled-components';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import { FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import forkaia from '../assets/forkaia.png'
import buttonwood from '../assets/buttonwood.png'

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
  width: 70px;
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

export const Employers = () => (
  <Styles>
    <h2>WORK EXPERIENCE</h2>
    <CardColumns>
    <Card>
      <Row>
        <Col xl={1} xs={2} id="logo">
        <Card.Img variant="top" src="https://www.idexcel.com/img/idexcel-logo.png" width="auto"/>
        </Col>
        <Col xl={11} xs={10}>
        <Card.Body>
        <Card.Title>Idexcel Inc</Card.Title>
        <Card.Text>
          <FaUser /> Jr. Front End Developer
          <br/>
          <FaMapMarkerAlt /> Herndon, VA
        </Card.Text>
        </Card.Body>
        </Col>
        
        <Col xl={1}></Col>
        <Col xl={11}>
        <ul>
          <li>Improved the User interface of a finance-based application (Cync Software) by increasing the code quality and adding new features using React, React Hooks, Bootstrap, and SCSS.</li>
          <li>Performed UI testing and improved code coverage to 100% by mocking and stubbing the components using React Testing Library, Jest, Enzyme, Mocha, Sinon, and Chai.</li>
          <li>Participated in REST APIs and database testing/management using Node JS, Postman, JWT, Docker, AWS, PgAdmin, and PostgreSQL.</li>
          <li>Resolved several issues/bugs via JIRA, GitHub, and Confluence by following the user stories and wireframes.</li>
          <li>Performed Quality analysis and Code Security by inspecting components using Testing tools and SonarQube.</li>
          <li>Managed and worked on multiple microservices by integrating APIs with the front end. </li>
          <li>Involved in the analysis, design, development, and testing phases of the Software Development Lifecycle (SDLC).</li>
          <li>< strong>Technologies Used:</strong> HTML5, CSS3, SCSS, Bootstrap, JavaScript, TypeScript, React JS, Node JS, Express, MongoDB, PostgreSQL, Microservices, Babel, Webpack, Material UI, Microsoft Visual Studio, GitHub, Git, AWS, Docker. </li>
        </ul>
        </Col>
        </Row>
    </Card>
    
    <Card>
      <Row>
        <Col xl={1} xs={2} id="logo">
        <Card.Img variant="top" src="https://opentabs.org/images/logo.png" width="auto"/>
        </Col>
        <Col xl={11} xs={10}>
        <Card.Body>
        <Card.Title>OpenTabs</Card.Title>
        <Card.Text>
          <FaUser /> Web Developer
          <br/>
          <FaMapMarkerAlt /> Remote
        </Card.Text>
        </Card.Body>
        </Col>
        
        <Col xl={1}></Col>
        <Col xl={11}>
        <ul>
          <li>Moved the previous versions of website and browser extension to a modern and interactive version using React JS, React-Bootstrap, React Lifecycle Methods, and NPM (Node package manager) on the Front end and Node JS, JWT, Express and MongoDB for back end authentication to implement REST API calls. </li>
          <li>Increased the number of users by 200% by maintaining the application quality in collaboration with the Quality Assurance (QA) team and performed A/B testing using tools like Google Analytics and Chrome Lighthouse.</li>
          <li>Performed Unit testing using JEST, Enzyme, and React Testing Library.</li>
          <li>Optimized the code performance by reducing asset loading time and maintaining modular components.</li>
          <li>Maintained cross browser compatibility by making the extension responsive on Chrome, Safari, and Firefox.</li> 
          <li>Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on an everyday basis.</li>
          <li>Worked in an agile and Test Driven Development (TDD) environment with daily meetings discussing the design and development of the current project and future updates/features.</li>
          <li><strong>Technologies Used:</strong> HTML5, CSS3, Bootstrap, JavaScript, TypeScript, ECMAScript 6/7, React JS, Node JS, Express, MongoDB, Webpack, Material UI, Microsoft Visual Studio, Figma, Photoshop, GitHub, Trello, PuTTY. </li>
        </ul>
        </Col>
        </Row>
    </Card>

    <Card>
      <Row>
        <Col xl={1} xs={2} id="logo">
        <Card.Img variant="top" src={forkaia} width="auto"/>
        </Col>
        <Col xl={11} xs={10}>
        <Card.Body>
        <Card.Title>Forkaia</Card.Title>
        <Card.Text>
          <FaUser /> Web Developer
          <br/>
          <FaMapMarkerAlt /> Irvine, CA
        </Card.Text>
        </Card.Body>
        </Col>
        
        <Col xl={1}></Col>
        <Col xl={11}>
        <ul>
          <li>Developed Progressive web apps (PWA) and Single page applications (SPA) compatible with different devices and browsers from scratch using React JS, Angular, and other web technologies.</li>
          <li>Created mock-ups, wireframes, user flows, site maps from scratch using tools like Figma, InVision, Photoshop, and Dreamweaver in collaboration with the UX team. </li>
          <li>Increased application performance by 50% through optimization of the code and web elements.</li>
          <li>Designed various UI elements including logos, psd files, icons, videos, dashboards, and animations by following the typography, iconography, grid systems, color theory, and Web Content Accessibility Guidelines. </li>
          <li>Deployed Apps/websites on cloud platforms like Heroku, Firebase, and AWS using Git and Microsoft Visual Code. </li>
          <li>Designed login and registration pages including an authenticated user database using SQL and PHP. </li>
          <li>Maintained reliable code and debugged any issues by performing unit testing using web development tools.</li>
          <li>Collaborated onsite and remotely with designers and the back-end development team across multiple projects.</li>
          <li><strong>Technologies Used:</strong> HTML5, CSS3, CSS Pre-processors, Bootstrap, JavaScript, Typescript, React JS, Angular 8/9, T-SQL, PHP, XAMPP, Webpack, JSON, Gimp, Photoshop, Figma, Sketch, Visual Studio Code, Sublime Text Editor, JIRA, GitHub.</li>
        </ul>
        </Col>
        </Row>
    </Card>
    
    <Card>
      <Row>
        <Col xl={1} xs={2} id="logo">
        <Card.Img variant="top" src={buttonwood} width="auto"/>
        </Col>
        <Col xl={11} xs={10}>
        <Card.Body>
        <Card.Title>Buttonwood gaming</Card.Title>
        <Card.Text>
          <FaUser /> Game Design and Development Intern
          <br/>
          <FaMapMarkerAlt /> Cambridge, MA
        </Card.Text>
        </Card.Body>
        </Col>
        
        <Col xl={1}></Col>
        <Col xl={11}>
        <ul>
          <li>Speeded up the prototype development by designing game screens in Unity through C#/JavaScript using agile prototyping methodology.</li>
          <li>Created pixel-perfect graphic elements including icons, PSD files, buttons, animations, images for the game screens.</li>
          <li>Lead the UI design team of 6 members and wrote efficient and reusable code for various UI sections of the game.</li>
          <li>Performed analysis, debugging, and troubleshooting of bugs, issues, and failures.</li>
          <li>Conducted product analysis to understand the best path forward for design challenges.</li>
          <li><strong>Technologies Used:</strong> C#, .NET, JavaScript, Unity game engine, Jira, Slack, Trello, Visual Studio, and Microsoft Word.</li>
        </ul>
        </Col>
        </Row>
    </Card>
    </CardColumns>  
  </Styles>
)