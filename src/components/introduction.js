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
        width: 50%;
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
        justify-content: center;
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
        <h2>ABOUT ME</h2>
            <Row className="introduction">
                <Col xl={6} lg={6} id="summary">
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
                        <Col className="contact">
                                <li><FaPhone /> <a href="tel:1-571-635-7991">+1 (571) 635-7991</a></li>
                                <li className="ml-3"><FaAt /> <a href = "mailto: bhvkbhoir95@gmail.com">bhvkbhoir95@gmail.com</a></li>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Styles>
);