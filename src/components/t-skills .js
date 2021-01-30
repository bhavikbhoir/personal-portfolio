import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import styled from 'styled-components';
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'

const Styles = styled.div`
.card-columns{
  text-align: left
}
.card-title {
  text-align: center;
  background: #39b2cc;
  color: white;
  padding: 0.5rem;
}
.card-text{
  font-size: 14px;
  width: 250px
}
.card-body{
  padding: 0;
}
.ag-theme-alpine{
  height: 80%;
  width: 100%;
  /* overflow: scroll; */
  overflow-y: auto;
  overflow-x: auto;
  text-align: left!important;
}
.ag-header-icon{
display: none;
}
.ag-center-cols-container, .ag-header-container, .ag-header-row{
height: 100%;
width: 100%!important;
overflow-y: hidden;
}
.ag-cell:nth-child(2), .ag-header-cell:nth-child(2){
left: 33%!important
}
.ag-cell:nth-child(3), .ag-header-cell:nth-child(3){
left: 66%!important;
}
.grid-container{
height: 250px;
}
`

export const TSkills = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  
  
  const [showtTechnologies, setShowTechnologies] = useState(true);
  const [showJS, setShowJS] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showDB, setShowDB] = useState(false);
  const [showIDE, setShowIDE] = useState(false);
  const [showMethods, setShowMethods] = useState(false);
  const [showOS, setShowOS] = useState(false);
  const [showMOffice, setShowMOffice] = useState(false);

  const [technologies, setTechnologies] = useState([
    { Skill: "HTML", Projects: "OpenTabs", Experience: 2  },
    { Skill: "CSS/CSS Pre-processors", Projects: "OpenTabs", Experience: 2 },
    { Skill: "Bootstrap", Projects: "OpenTabs", Experience: 2  },
    { Skill: "JavaScript", Projects: "OpenTabs", Experience: 2 },
    { Skill: "PHP", Projects: "OpenTabs", Experience: 1 },
    { Skill: "C#", Projects: "OpenTabs", Experience: 2  },
    { Skill: ".NET", Projects: "OpenTabs", Experience: 2 },
    { Skill: "C", Projects: "OpenTabs", Experience: 1 },
    { Skill: "C++", Projects: "OpenTabs", Experience: 1 },
    { Skill: "Python", Projects: "OpenTabs", Experience: 1 },
    { Skill: "AJAX", Projects: "OpenTabs", Experience: 1 }
  ]);

  const [JS, setJS] = useState([
    { Skill: "React", Projects: "OpenTabs", Experience: 2  },
    { Skill: "React-Bootstap", Projects: "OpenTabs", Experience: 2 },
    { Skill: "React-Hooks", Projects: "OpenTabs", Experience: 1 },
    { Skill: "Redux", Projects: "OpenTabs", Experience: 2  },
    { Skill: "Angular", Projects: "OpenTabs", Experience: 2 },
    { Skill: "Node JS", Projects: "OpenTabs", Experience: 1 },
    { Skill: "TypeScript", Projects: "OpenTabs", Experience: 2  },
    { Skill: "ECMAScript 6/7", Projects: "OpenTabs", Experience: 2 },
    { Skill: "jQuery", Projects: "OpenTabs", Experience: 1 },
    { Skill: "JSON", Projects: "OpenTabs", Experience: 1 }
  ]);

  const [tools, settools] = useState([
    { Skill: "Git/GitHub", Projects: "OpenTabs", Experience: 2  },
    { Skill: "Figma", Projects: "OpenTabs", Experience: 2 },
    { Skill: "JIRA", Projects: "OpenTabs", Experience: 1 },
    { Skill: "Confluence ", Projects: "OpenTabs", Experience: 2  },
    { Skill: "AWS", Projects: "OpenTabs", Experience: 2 },
    { Skill: "Docker", Projects: "OpenTabs", Experience: 1 },    
    { Skill: "Photoshop", Projects: "OpenTabs", Experience: 1 },
    { Skill: "Dreamweaver", Projects: "OpenTabs", Experience: 1 },
    { Skill: "WordPress", Projects: "OpenTabs", Experience: 1 } 
  ]);

  const [DB, setDB] = useState([
    { Skill: "PostgreSQL", Projects: "OpenTabs", Experience: 2  },
    { Skill: "MySQl", Projects: "OpenTabs", Experience: 2 },
    { Skill: "T-SQL", Projects: "OpenTabs", Experience: 1 },
    { Skill: "MongoDB ", Projects: "OpenTabs", Experience: 2  }
  ]);

  const [IDE, setIDE] = useState([
    { Skill: "Visual Studio Code", Projects: "OpenTabs", Experience: 2  },
    { Skill: "Microsoft Visual Studio", Projects: "OpenTabs", Experience: 2 },
    { Skill: "Sublime Text Editor", Projects: "OpenTabs", Experience: 1 },
    { Skill: "NetBeans", Projects: "OpenTabs", Experience: 1 }
  ]);

  const [methodologies, setMethodologies] = useState([
    { Skill: "Model-View-Controller (MVC)", Projects: "OpenTabs", Experience: 2  },
    { Skill: "Figma", Projects: "OpenTabs", Experience: 2 },
    { Skill: "Responsive Web Design", Projects: "OpenTabs", Experience: 1 },
    { Skill: "Progessive Web Applications (PWA) ", Projects: "OpenTabs", Experience: 2  },
    { Skill: "Search Engine Optimization (SEO)", Projects: "OpenTabs", Experience: 2 },
    { Skill: "Document Object Model (Real & Virtual DOM)", Projects: "OpenTabs", Experience: 1 },    
    { Skill: "Content Delivery Networks (CDNs)", Projects: "OpenTabs", Experience: 1 },
    { Skill: "Flux Architecture", Projects: "OpenTabs", Experience: 1 },
    { Skill: "HTTP, FTP Protocols", Projects: "OpenTabs", Experience: 1 } ,
    { Skill: "Agile/Scrum Environment", Projects: "OpenTabs", Experience: 1 } 
  ]);

  const [OS, setOS] = useState([
    { Skill: "Windows", Projects: "OpenTabs", Experience: 2  },
    { Skill: "MAC OS", Projects: "OpenTabs", Experience: 2 },
    { Skill: "Linux", Projects: "OpenTabs", Experience: 1 }
  ]);

  const [moffice, setMOffice] = useState([
    { Skill: "Microsoft Word", Projects: "OpenTabs", Experience: 2  },
    { Skill: "PowerPoint", Projects: "OpenTabs", Experience: 2 },
    { Skill: "Outlook", Projects: "OpenTabs", Experience: 1 },
    { Skill: "Excel", Projects: "OpenTabs", Experience: 1 }
  ]);

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }


  return (
    <Styles>
      <h2>TECHNICAL SKILLS</h2>
      <CardColumns>
        <Card>
          <Card.Body>
            <Card.Title>Web Technologies</Card.Title>
            <Card.Text>
            <ul>
              <li>HTML</li>
              <li>CSS/CSS Pre-processors</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>C#</li>
              <li>.NET</li>
              <li>C</li>
              <li>C++</li>
              <li>Python</li>
              <li>AJAX</li>
            </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>JavaScript Libraries</Card.Title>
            <Card.Text>
              <ul>
                <li>React</li>
                <li>React-Bootstap</li>
                <li>React-Hooks</li>
                <li>Redux</li>
                <li>Angular</li>
                <li>Node JS</li>
                <li>TypeScript</li>
                <li>ECMAScript 5/6</li>
                <li>jQuery</li>
                <li>JSON</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Tools</Card.Title>
            <Card.Text>
              <ul>
                <li>Git/GitHub</li>
                <li>Figma</li>
                <li>JIRA</li>
                <li>Confluence</li> 
                <li>AWS</li>
                <li>Docker</li>    
                <li>Photoshop</li>
                <li>Dreamweaver</li>
                <li>WordPress</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      {/* </CardDeck>

      <CardDeck> */}
          <Card>
          <Card.Body>
            <Card.Title>Methodologies</Card.Title>
            <Card.Text>
              <ul>
                <li>Model-View-Controller (MVC)</li>
                <li>Figma</li>
                <li>Responsive Web Design</li>
                <li>Progessive Web Applications (PWA)</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Document Object Model (Real & Virtual DOM)</li>
                <li>Content Delivery Networks (CDNs)</li>
                <li>Flux Architecture</li>
                <li>HTTP, FTP Protocols</li>
                <li>Agile/Scrum Environment</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Databases</Card.Title>
            <Card.Text>
              <ul>
                <li>PostgreSQL</li>
                <li>MySQl</li>
                <li>T-SQL</li>
                <li>MongoDB</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>IDEs</Card.Title>
            <Card.Text>
              <ul>
                <li>Visual Studio Code</li>
                <li>Microsoft Visual Studio</li>
                <li>Sublime Text Editor</li>
                <li>NetBeans</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      {/* </CardDeck>

      <CardDeck> */}
        <Card>
          <Card.Body>
            <Card.Title>Operating Systems</Card.Title>
            <Card.Text>
              <ul>
                <li>Windows</li>
                <li>MAC OS</li>
                <li>Linux</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Microsoft Office</Card.Title>
            <Card.Text>
              <ul>
                <li>Word</li>
                <li>PowerPoint</li>
                <li>Outlook</li>
                <li>Excel</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>

    {/* <div className="ag-theme-alpine">
    <h4 onClick={() => {setShowTechnologies(!showtTechnologies)}}>Web Technologies <FaArrowAltCircleDown /></h4>  
    {showtTechnologies && <div className="grid-container">
      <AgGridReact onGridReady={onGridReady} rowData={technologies} suppressContextMenu={true}>
        <AgGridColumn field="Skill" />
        <AgGridColumn field="Projects" style={{left: "33%"}}/>
        <AgGridColumn field="Experience" style={{left: "66%"}}/>
      </AgGridReact>
      </div>}
    <h4>JavaScript Libraries <FaArrowAltCircleDown onClick={() => {setShowJS(!showJS)}} /></h4>
    {showJS && <div className="grid-container">
      <AgGridReact onGridReady={onGridReady} rowData={JS} suppressContextMenu={true}>
        <AgGridColumn field="Skill" />
        <AgGridColumn field="Projects" />
        <AgGridColumn field="Experience" />
      </AgGridReact>
    </div>}
    <h4>Tools <FaArrowAltCircleDown onClick={() => {setShowTools(!showTools)}} /></h4>
    {showTools && <div className="grid-container">
      <AgGridReact onGridReady={onGridReady} rowData={tools} suppressContextMenu={true}>
        <AgGridColumn field="Skill" />
        <AgGridColumn field="Projects" />
        <AgGridColumn field="Experience" />
      </AgGridReact>
    </div>}
    <h4>Databases <FaArrowAltCircleDown onClick={() => {setShowDB(!showDB)}} /></h4>
    {showDB && <div className="grid-container">
    <AgGridReact onGridReady={onGridReady} rowData={DB} suppressContextMenu={true}>
    <AgGridColumn field="Skill" />
    <AgGridColumn field="Projects" />
    <AgGridColumn field="Experience" />
    </AgGridReact>
    </div>}
    <h4>IDE's <FaArrowAltCircleDown onClick={() => {setShowIDE(!showIDE)}} /></h4>
    {showIDE && <div className="grid-container">
    <AgGridReact onGridReady={onGridReady} rowData={IDE} suppressContextMenu={true}>
    <AgGridColumn field="Skill" />
    <AgGridColumn field="Projects" />
    <AgGridColumn field="Experience" />
    </AgGridReact>
    </div>}
    <h4>Methodologies <FaArrowAltCircleDown onClick={() => {setShowMethods(!showMethods)}} /></h4>
    {showMethods && <div className="grid-container">
    <AgGridReact onGridReady={onGridReady} rowData={methodologies} suppressContextMenu={true}>
    <AgGridColumn field="Skill" />
    <AgGridColumn field="Projects" />
    <AgGridColumn field="Experience" />
    </AgGridReact>
    </div>}
    <h4>Operating Systems <FaArrowAltCircleDown onClick={() => {setShowOS(!showOS)}} /></h4>
    {showOS && <div className="grid-container">
    <AgGridReact onGridReady={onGridReady} rowData={OS} suppressContextMenu={true}>
    <AgGridColumn field="Skill" />
    <AgGridColumn field="Projects" />
    <AgGridColumn field="Experience" />
    </AgGridReact>
    </div>}
    <h4>Microsoft Office <FaArrowAltCircleDown onClick={() => {setShowMOffice(!showMOffice)}} /></h4>
    {showMOffice && <div className="grid-container">
    <AgGridReact onGridReady={onGridReady} rowData={moffice} suppressContextMenu={true}>
    <AgGridColumn field="Skill" />
    <AgGridColumn field="Projects" />
    <AgGridColumn field="Experience" />
    </AgGridReact>
    </div>}
    </div>
     */}
    </Styles>
  );
};
