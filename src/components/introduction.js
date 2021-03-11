import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaUser, FaMedium, FaPhone, FaEnvelope, FaAt } from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';
import Cover from '../assets/cover.png'
import DP from '../assets/pp.jpg'

const Styles = styled.div`
    .row{
        width: 100%;
        text-align: justify;
        margin: 0px!important;
    }
    img{
        width: 75%;
        border-radius: 50%;
    }
    .col{
        text-align: center;
        margin: 0px!important;
    }
    // ul{
    //     display: flex;
    // }
    li{
        list-style: none;
    }
    .icons{
        display: flex;
        text-align: center;
        justify-content: center
    }
    .icons .col{
        display: inline-flex;
        justify-content: center;
    }
    #summary, #profile{
        display: grid;
			  -webkit-flex-wrap: wrap;
			      -ms-flex-wrap: wrap;
			          flex-wrap: wrap;
			  -webkit-justify-content: space-around;
			      -ms-flex-pack: distribute;
			          justify-content: space-around;
			  -webkit-box-align: center;
			  -webkit-align-items: center;
			      -ms-flex-align: center;
			          align-items: center;
			  -webkit-align-content: center;
			      -ms-flex-line-pack: center;
          align-content: center;
    }
    .icons li a{
        color: black;
        margin: 0 10px;
        font-size: 20px;
    }
    .contact {
        display: flex;
    }
    .contact li a {
        text-decoration: none;
        color: initial;
    }
    @media screen and (max-width: 1440px) {
        img{
            width: 85%;
            border-radius: 50%;
        }
        .contact{
            display: block;
        }
        .contact li:first-child{
            margin-bottom: 0.5rem
        }
    }
`;

export const Introduction = () => (
    <Styles>
                <Row className="introduction">
                    {/* <Col xl={12}>
                        <img src={Cover}/>
                        <h3 className="text-center">Engineer, Designer, Developer, Gamer, Sketch artist, Sports enthusiast, Blogger, and aiming for much more.</h3>
                    </Col>
                    <Col xl={12} className="text-center">
                    I am a creative and passionate Web Developer with experience in designing prototypes using Figma, InVision, Photoshop and developing interactive websites using HTML5, CSS3, Bootstrap, JavaScript, React JS, and Angular.
                    <br/>
                    <br/>
                    Designing and building interactive, responsive, scalable, user-friendly websites and applications complying with the cross-browser compatibility and World Wide Web Consortium (W3C) guidelines is truly a passion of mine. In addition to my knowledge base, I actively seek out new technologies and stay up to date on industry trends and advancements. This has allowed me to stay ahead of the curve and deliver exceptional work in all my previous roles.
                    </Col> */}
                    <Col xl={6} lg={6} id="summary">
                    <h2 style={{textAlign:"center", borderBottom: "2px solid darkgrey"}}>ABOUT ME</h2>
                    <br/>
                    Creative and passionate Web Developer with experience in designing and developing interactive websites.
                    <br/>
                    <br/>
                    Designing and building responsive, scalable, user-friendly websites and applications complying with the cross-browser compatibility and World Wide Web Consortium (W3C) guidelines is truly a passion of mine. 
                    <br/>
                    <br/>
                    In addition to my knowledge base, I actively seek out new technologies and stay up to date on industry trends and advancements. This has allowed me to stay ahead of the curve and deliver exceptional work in all my previous roles.
                    </Col>
                    <Col xl={6} lg={6} id="profile">
                        <Row>
                            <Col>
                                <img src={DP}/>
                            </Col>
                        </Row>
                        <Row style={{display: "inline-block", textAlign: "center", paddingTop: "0"}}>
                            <h3>Web Developer</h3>
                            {/* <Col className="icons">
                                <li><a href="https://www.linkedin.com/in/bhavikbhoir/"><FaLinkedin /></a></li>
                                <li><a href="https://github.com/bhavikbhoir"><FaGithub /></a></li>
                                <li><a href="https://medium.com/@bhvkbhoir95"><FaMedium /></a></li>
                                <li><a href="https://www.facebook.com/bbhoir"><FaFacebook /></a></li>
                                <li><a href="https://www.instagram.com/bhavik_08/"><FaInstagram /></a></li>
                                <li><a href="https://bbhoir.web.app/"><GoGlobe /></a></li>     
                                <br/>                    
                            </Col> */}
                            <Col className="contact">
                                <li><FaPhone /> <a href="tel:1-571-635-7991">+1 (571) 635-7991</a></li>
                                <li className="ml-3"><FaAt /> <a href = "mailto: bhvkbhoir95@gmail.com">bhvkbhoir95@gmail.com</a></li>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Styles>
);