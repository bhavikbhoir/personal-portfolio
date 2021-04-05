import React, { Component } from 'react';
import {Row, Col, Button, Container, CardColumns, Accordion} from 'react-bootstrap';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'

import C from '../assets/certificates/C.jpg'
import Cpp from '../assets/certificates/C++.jpg'
import LabView from '../assets/certificates/LabVIEW.jpg'
import Matlab from '../assets/certificates/Matlab.jpg'
import Python from '../assets/certificates/Python.jpg'
import SQL from '../assets/certificates/SQL.jpg'
import Tensorflow from '../assets/certificates/Tensorflow.jpg'
import Unity from '../assets/certificates/Unity.jpg'
import Web from '../assets/certificates/Web.jpg'
import AllStar from '../assets/certificates/AllStar.jpg'
import aws1 from '../assets/certificates/aws1.jpg'
import aws2 from '../assets/certificates/aws2.jpg'

const Styles = styled.div`
h2{
    text-align: center;
}
.card-columns{
    column-count: 2;
    widows: 2
}
.card-header, .card-header .btn{
    text-align: left;
}
.card-body{
    background-color: #39b2cc;
    color: white;
    padding: 0.5rem;
}
@media screen and (max-width: 991px){
    .card-columns{
        column-count: 1;
    }
}
.row{
    padding: 0!important;
}
`;

export const Certificates = () => (
    <Styles style={{width: "100%"}}>
        <h2>CERTIFICATIONS</h2>

        <Accordion defaultActiveKey="0">
            <Card>
                <Row>
                    <Col lg={6}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        AWS Solutions Training for Partners: Machine Learning (ML) on AWS for ML Practitioners - Technical (Classroom)
                        </Accordion.Toggle>
                        </Card.Header>
                    </Col>
                    <Col lg={6}>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body><Card.Img variant="top" src={aws2} /></Card.Body>
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col lg={6}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        The Web Developer Bootcamp
                        </Accordion.Toggle>
                        </Card.Header>
                    </Col>
                    <Col lg={6}>
                        <Accordion.Collapse eventKey="1">
                        <Card.Img variant="top" src={Web} />
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col lg={6}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        C Programming
                        </Accordion.Toggle>
                        </Card.Header>
                    </Col>
                    <Col lg={6}>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body><Card.Img variant="top" src={C} /></Card.Body>
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col lg={6}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        C++ : From Beginner to Expert
                        </Accordion.Toggle>
                        </Card.Header>
                    </Col>
                    <Col lg={6}>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body><Card.Img variant="top" src={Cpp} /></Card.Body>
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col lg={6}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        LabVIEW - Computer Vision and Image Processing
                        </Accordion.Toggle>
                        </Card.Header>
                    </Col>
                    <Col lg={6}>
                        <Accordion.Collapse eventKey="4">
                        <Card.Body><Card.Img variant="top" src={LabView} /></Card.Body>
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col lg={6}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                        MATLAB - Image Processing
                        </Accordion.Toggle>
                        </Card.Header>
                    </Col>
                    <Col lg={6}>
                        <Accordion.Collapse eventKey="5">
                        <Card.Body><Card.Img variant="top" src={Matlab} /></Card.Body>
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col lg={6}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="6">
                        AWS Solutions Training for Partners: Migrating to AWS - Technical (Classroom)
                        </Accordion.Toggle>
                        </Card.Header>
                    </Col>
                    <Col lg={6}>
                        <Accordion.Collapse eventKey="6">
                        <Card.Body><Card.Img variant="top" src={aws1} /></Card.Body>
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col lg={6}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="7">
                        Python Bootcamp
                        </Accordion.Toggle>
                        </Card.Header>
                    </Col>
                    <Col lg={6}>
                        <Accordion.Collapse eventKey="7">
                        <Card.Body><Card.Img variant="top" src={Python} /></Card.Body>
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col lg={6}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="8">
                        The complete SQL Bootcamp
                        </Accordion.Toggle>
                        </Card.Header>
                    </Col>
                    <Col lg={6}>
                        <Accordion.Collapse eventKey="8">
                        <Card.Body><Card.Img variant="top" src={SQL} /></Card.Body>
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col lg={6}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="9">
                        TensorFlow for Deep Learning with Python
                        </Accordion.Toggle>
                        </Card.Header>
                    </Col>
                    <Col lg={6}>
                        <Accordion.Collapse eventKey="9">
                        <Card.Body><Card.Img variant="top" src={Tensorflow} /></Card.Body>
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col lg={6}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="10">
                        Game Development with Unity
                        </Accordion.Toggle>
                        </Card.Header>
                    </Col>
                    <Col lg={6}>
                        <Accordion.Collapse eventKey="10">
                        <Card.Body><Card.Img variant="top" src={Unity} /></Card.Body>
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>        
        </Accordion>     
    </Styles>
)