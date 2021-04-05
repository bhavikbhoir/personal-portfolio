import React, { Component } from 'react';
import {Row, Col, Button, Container, CardColumns} from 'react-bootstrap';
import styled from 'styled-components';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import { FaGithub } from 'react-icons/fa';

const Styles = styled.div`
h2{
    text-align: center;
    // font-weight: 700;
}
.card-columns {
    column-count: 1!important;
    text-align: left;
}
.card-columns .card{
    width: 100%;
    padding: 1rem;
}
.card-img-top {
//   width: 100%;
    // margin: 0.5rem;
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
img{
    // margin: 2rem 0;
    // border-radius: 25px;
}
a{
    color: #113476;
}
ul{
    text-align: left;
    font-size: 0.875rem;
}
`;

export const Tamuk = () => (
    <Styles>
        {/* <h2>TAMUK Projects</h2> */}
        <CardColumns>    
            <Card>
            <Row>
                {/* <Col xl={1} xs={2} id="logo" style={{paddingRight: "0"}}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Texas_A%26M_University%E2%80%93Kingsville_seal.svg/1200px-Texas_A%26M_University%E2%80%93Kingsville_seal.svg.png" width="auto"/>
                </Col> */}
                <Col>
                <Card.Body style={{paddingLeft: "0"}}>
                <Card.Title>Thesis <br/> Quality Analysis of Lossy Image Compression techniques<br/><small>July 2018 – April 2019</small></Card.Title>            
                <Card.Link href="https://github.com/bhavikbhoir/Thesis" target="_blank"><FaGithub/> GitHub</Card.Link>
                </Card.Body>
                </Col>

                <Col xs={12} style={{textAlign: "center"}}>
                    <Row style={{textAlign: "left"}}>
                        <Col>
                        <h6>Abstract</h6>
                        In today’s digital world, image compression is a crucial aspect of data transmission and storage which has led to an increasing focus on various image compression algorithms. The objective of image compression is the reduction of the number of bits required to store an image and preserve the quality levels of the original image. This research will discuss a few lossy image compression techniques like image compression based on wavelets, image compression based on a Feed-Forward Neural Network and two hybrid compressions methods based on the both wavelet functions and Neural Networks. The hybrid technique will compress the input image first by the wavelet-based compression algorithm, and then the output image will be further compressed by a Feed-Forward neural network. Another hybrid technique, in which the image is first compressed using a neural network and then by the wavelet-based algorithm is also analyzed. This research aims at examining how the two proposed hybrid methods perform on various types of images in comparison to the two individual techniques. The compression performance of these techniques in terms of parameters such as compression ratio, peak signal to noise ratio and human visual system based parameters determines the efficiency of these hybrid techniques.
                        </Col>
                    </Row>
                </Col>

                {/* <Col style={{textAlign: "center"}}>
                    <Row>
                        <Col>
                        <h6>Tech stack</h6>
                        <ul>
                            <li>MATLAB</li >
                            <li>Python</li>
                            <li>Microsoft Word</li>
                            <li>Microsoft PowerPoint</li>
                        </ul>
                        </Col>
                    </Row>
                </Col> */}
            </Row>
            
            </Card>

        </CardColumns>
    </Styles>
)