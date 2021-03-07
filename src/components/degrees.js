import React, { Component } from 'react';
import {Row, Col, Button, Container, CardColumns} from 'react-bootstrap';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'

const Styles = styled.div`
h2{
    text-align: center;
}
.card{
    align-items: center;
}
.card-body{
    text-align: left;
}
.card-columns{
    column-count: 1;
    text-align: center;
}
.university-img{
    text-align: center;
}
@media screen and (max-width: 768px) {
    .card-columns{
        column-count: 1;
    }
}
img{
    width: 80%;
    height: 100%;
    // padding: 15px;
}
.degree-header{
    min-height: 135px
}
`;

export const Degrees = () => (
    <Styles>
        <h2>EDUCATION</h2>
            <CardColumns>
                <Card>
               <Card.Body>
                    <div className="degree-header">
                        <Row>
                            <Col className="university-img" lg={4} md={5} sm={5}>
                                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Texas_A%26M_University%E2%80%93Kingsville_seal.svg/1200px-Texas_A%26M_University%E2%80%93Kingsville_seal.svg.png" />
                            </Col>
                            <Col>
                                <Card.Title>Master of Science <br/> Electrical Engineering</Card.Title>
                                <Card.Text>
                                    GPA: 4.00/4.00
                                </Card.Text>
                                <Card.Text>
                                    <strong>Coursework:</strong> Digital Image Processing, Microwave Engineering, Digital Signal Processing, Wireless Networks, Principles of VLSI Design, Rapid Prototyping and ASIC Design.
                                </Card.Text>
                            </Col>
                        </Row>
                    </div>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
            
                <Card>
               <Card.Body>
                    <div className="degree-header">
                        <Row>
                            <Col className="university-img" lg={4} md={5} sm={5}>
                                <Card.Img variant="top" src="https://img2.pngio.com/mumbai-university-logo-png-4-png-image-university-of-mumbai-png-400_400.png" />
                            </Col>
                            <Col>
                                <Card.Title>Bachelor of Engineering <br/> Electronics and Telecommunications Engineering</Card.Title>
                                <Card.Text>
                                    GPA: 3.70/4.00
                                </Card.Text>
                                <Card.Text>
                                    <strong>Coursework:</strong> Wireless Communication, Mobile Communication, Embedded Systems, Applied Mathematics, Operating Systems (OS), Integrated Circuits, Digital Communication.
                                </Card.Text>
                            </Col>
                        </Row>
                    </div>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
                </CardColumns>
    </Styles>
)