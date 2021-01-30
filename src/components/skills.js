import React, { Component } from 'react';
import {Row, Col, Button, Container, CardColumns} from 'react-bootstrap';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';

const Styles = styled.div`
h2{
    text-align: center;
}
* {box-sizing: border-box}

.container {
  width: 100%;
//   background-color: #ddd;
  display: inline-flex;
}

.container p{
    // margin: 1rem -0.5rem;
    width: 20%;
}

.skills {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto 0;
  color: white;
  transition: all 0.5s ease;
}

.html {width: 90%; background-color: #4CAF50; transition: background-color 0.5s ease;}
.css {width: 80%; background-color: #2196F3;}
.js {width: 80%; background-color: #f44336;}
.php {width: 60%; background-color: #808080;}

.bootstrap {width: 80%; background-color: #4CAF50; transition: background-color 0.5s ease;}
.react {width: 75%; background-color: #2196F3;}
.angular {width: 65%; background-color: #f44336;}
.node {width: 65%; background-color: #4CAF50;}
.php {width: 60%; background-color: #808080;}
`;

export const Skills = () => (
    <Styles>
    <h2>TECHNICAL SKILLS</h2>
    
    <div class="container">
    <p>HTML</p>
    <div class="skills html">90%</div>
    </div>
    
    <div class="container">
    <p>CSS</p>
    <div class="skills css">80%</div>
    </div>
    
    <div class="container">
    <p>JavaScript</p>
    <div class="skills js">80%</div>
    </div>
    
    <div class="container">
    <p>Bootstrap</p>
    <div class="skills bootstrap">80%</div>
    </div>

    <div class="container">
    <p>React JS</p>
    <div class="skills react">75%</div>
    </div>
    
    <div class="container">
    <p>Angular JS/7/8/9</p>
    <div class="skills angular">65%</div>
    </div>
    
    <div class="container">
    <p>Node JS</p>
    <div class="skills node">65%</div>
    </div>
    
    <div class="container">
    <p>PHP</p>
    <div class="skills php">60%</div>
    </div>
    </Styles>
)