import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaUser, FaMedium } from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';

const Styles = styled.div`
.links{
    // display: inline-block!important;
    text-align: right;
    height:100vh;
    // right: 3vw;
    width: 14.33vw;
    position: fixed;
    display: flex;
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
.ul{
    width:100%;
    list-style: none;
}
li{
    width: 100%;
    list-style: none;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1.2rem;
    margin: 1rem 0;
}
a{
    font-size: 1.2rem;
    color: white;
    padding: .5rem 1rem;
}
.dropdown-item{
    color: black;
}
`;

export const Rightbar = () => (
    <Styles>
        <div className="links">
            <div className="ul">
                {/* <li><a target="_blank" href="https://www.linkedin.com/in/bhavikbhoir/"><FaLinkedin /></a></li> */}
                <li><a target="_blank" href="https://github.com/bhavikbhoir"><FaGithub /></a></li>
                <li><a target="_blank" href="https://medium.com/@bhvkbhoir95"><FaMedium /></a></li>
                <li><a target="_blank" href="https://www.facebook.com/bbhoir"><FaFacebook /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/bhavik_08/"><FaInstagram /></a></li>
                <li><a target="_blank" href="https://bbhoir.web.app/"><GoGlobe /></a></li>   
            </div>
        </div>
    </Styles>
);