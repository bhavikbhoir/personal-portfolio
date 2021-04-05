import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import '../src/components/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Introduction } from './components/introduction';
import { Employers } from './components/employers';
import { Skills } from './components/skills';
import { Leftbar } from './components/leftbar';
import { Rightbar } from './components/rightbar';
import { Degrees } from './components/degrees';
import { Projects } from './components/projects';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Personal } from './components/personal';
import { Opentabs } from './components/opentabs';
import { Forkaia } from './components/forkaia';
import { Tamuk } from './components/tamuk';
import { Misc } from './components/misc';
import { TSkills } from './components/t-skills ';
import { Certificates } from './components/certificates';
import { Artwork } from './components/artwork';
import Timeline from './components/Timeline';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { Carousel } from './components/carousel';
import { Counter } from './components/counter';

export default class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render(){
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }

    const scrollToRef = (ref) => {
      const toShowDiv = document.querySelector(
        "#root"
      );
      if (toShowDiv) toShowDiv.scrollIntoView();
    };

    const workflowClicked = (evt) => {
      scrollToRef(evt);
    }

  return (
    <div className="App">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <Row>
          <Col lg={2} md={12} xs={12} className="p-0 navbar">
          <div className="left-header">
            <Leftbar />
          </div>
          </Col>
          <Col lg={8} md={12} xs={12}  className="p-0 data">
          <div className="main-content">
          <Router>
            <Switch>
            <Route exact path="/" component={Introduction} />
            <Route exact path="/Education" component={Degrees} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Projects/Personal" component={Personal} />
            <Route exact path="/Projects/Opentabs" component={Opentabs} />
            <Route exact path="/Projects/Forkaia" component={Forkaia} />
            <Route exact path="/Projects/TAMUK" component={Tamuk} />
            <Route exact path="/Projects/UOFM" component={Personal} />
            <Route exact path="/Projects/Misc" component={Misc} />
            <Route exact path="/Experience" component={Employers} />
            <Route exact path="/Skills" component={TSkills} className="T-Skills"/>
            <Route exact path="/Certificates" component={Certificates}/>
            <Route exact path="/Artwork" component={Artwork}/>
            </Switch>
          </Router>
            <Counter />
            <Timeline style={{width: "100%"}}/>
            {/* <Degrees /> */}
            <Projects style={{width: "100%"}}/>
            {/* <Employers /> */}
            {/* <TSkills /> */}
            <Certificates />
            <Carousel />
            {/* <Artwork /> */}
          </div>  
          </Col>
          <Col lg={2} md={12} className="p-0 social">
          <div className="right-header">
            <Rightbar />
                      <Button
                        className="scroll-btn"
                        variant="Light"
                        onClick={workflowClicked}
                      >
                        <FaArrowAltCircleUp />
                      </Button>
          </div>
          </Col>
        </Row>
        {/* <div className="footer">
            <p>Created using<br/>React v16.13.1</p>
        </div> */}
      </div>
      </div>
  );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}
