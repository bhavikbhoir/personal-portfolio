import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Personal } from './personal';
import { Opentabs } from './opentabs';
import { Forkaia } from './forkaia';
import { Tamuk } from './tamuk';
import { Misc } from './misc';

const Styles = styled.div`
#portfolio{
    text-align: center;
}
.col{
    display: flex;
    -webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-justify-content: flex-start;
	-ms-flex-pack: distribute;
	justify-content: flex-start;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-align-content: center;
	-ms-flex-line-pack: center;
    align-content: center;
}
a{
    color: #ec0024;
}
img{
    margin: 0.5rem 0;
}
.nav-tabs{
    display: flex;
    border-bottom: 1px solid transparent;
    justify-content: center;
}
.nav-link{
    color: #09f;
    background: transparent;
    margin: 0 1rem;
}
.nav-link.active{
    color: #09f;
    background: transparent;
    border: 1px solid #09f;
}
.tab-content{
    margin-top: -1px;
    padding: 1rem;
    border: 1px solid lightgray;
    border-radius: 0.25rem;
}
.nav-link:hover{
    color: #6c3;
    background: transparent;
    border: 1px solid #6c3;
}
h6{
    color: #113476;
}
.action-buttons .col{
    padding: 0;
}
.action-buttons{
    width: 100%;
    margin: 0.25rem 0;
}
// .action-buttons a:last-child{
//     margin-left: 0.5rem;
// }
.first-row .img-container:nth-child(1), .img-container:nth-child(2), .img-container:nth-child(3){
    height: 300px;
    transform: translate(0, 25%)
}
.second-row .img-container:nth-child(1), .img-container:nth-child(2), .img-container:nth-child(3){
    height: 600px;
    transform: translate(0, 25%)
}
a svg{
    margin-right: 0.25rem;
}
`;

export const Projects = () => (
            <Styles style={{width: "100%"}}>
                <div id="portfolio">
                    <h2>PROJECTS</h2>
                    <Tabs defaultActiveKey="personal">
                    <Tab eventKey="all" title="All">                        
                        <Personal />
                        <Forkaia />
                        {/* <Tamuk /> */}
                        <Misc />
                        <Opentabs />
                    </Tab>
                    <Tab eventKey="personal" title="Personal">
                      <Personal />
                    </Tab>
                    <Tab eventKey="opentabs" title="OpenTabs">
                        <Opentabs />
                    </Tab>
                    <Tab eventKey="forkaia" title="Forkaia">
                        <Forkaia />
                    </Tab>
                    <Tab eventKey="tamuk" title="TAMUK">
                        <Tamuk />
                    </Tab>
                    <Tab eventKey="misc" title="Miscellaneous">
                        <Misc />
                    </Tab>
                    </Tabs>
                </div>
            </Styles>
        )