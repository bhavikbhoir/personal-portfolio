import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUser, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion'
import { Card, Button } from "react-bootstrap";

export default (props) => {
    return (
      <>
      <VerticalTimeline className="timeline">
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="September 2020 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Idexcel Inc</h3>
            <h3 className="vertical-timeline-element-title"><FaUser /> Jr. Front End Developer</h3>
            <h4 className="vertical-timeline-element-subtitle"><FaMapMarkerAlt /> Herndon, VA</h4>
            <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Responsibilities
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
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
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2020 - September 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">OpenTabs</h3>
            <h3 className="vertical-timeline-element-title"><FaUser /> Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle"><FaMapMarkerAlt /> Remote</h4>
            <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Responsibilities
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
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
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2019 - April 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Forkaia</h3>
            <h3 className="vertical-timeline-element-title"><FaUser /> Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle"><FaMapMarkerAlt /> Irvine, CA</h4>
            <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Responsibilities
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
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
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="August 2017 - May 2019"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Master of Science - Electrical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Texas A&M University - Kingsville</h4>
            <p>
                GPA: 4.00/4.00
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2018 - December 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Buttonwood Gaming</h3>
            <h3 className="vertical-timeline-element-title"><FaUser /> Game Design and Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle"><FaMapMarkerAlt /> Cambridge, MA</h4>
            <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Responsibilities
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                <ul>
                    <li>Speeded up the prototype development by designing game screens in Unity through C#/JavaScript using agile prototyping methodology.</li>
                    <li>Created pixel-perfect graphic elements including icons, PSD files, buttons, animations, images for the game screens.</li>
                    <li>Lead the UI design team of 6 members and wrote efficient and reusable code for various UI sections of the game.</li>
                    <li>Performed analysis, debugging, and troubleshooting of bugs, issues, and failures.</li>
                    <li>Conducted product analysis to understand the best path forward for design challenges.</li>
                    <li><strong>Technologies Used:</strong> C#, .NET, JavaScript, Unity game engine, Jira, Slack, Trello, Visual Studio, and Microsoft Word.</li>
                </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="July 2013 - May 2017"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Bachelor of Engineering - Electronics & Telecommunication Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Mumbai</h4>
            <p>
                GPA: 3.70/4.00
            </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
            Creative Direction, Visual Design
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            // icon={<StarIcon />}
        /> */}
        </VerticalTimeline>

      </>
    )
}
