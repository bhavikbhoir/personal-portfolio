import React, { Component } from 'react';
import {CardColumns} from 'react-bootstrap';
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
`;

export const Certificates = () => (
    <Styles>
        <h2>CERTIFICATIONS</h2>
        <CardColumns>
        <Card>
            <Card.Img variant="top" src={aws2} />
            <Card.Body>
            <Card.Text>
                AWS Solutions Training for Partners: Machine Learning (ML) on AWS for ML Practitioners - Technical (Classroom)
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={Web} />
            <Card.Body>
            <Card.Text>
                The Web Developer Bootcamp
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={C} />
            <Card.Body>
            <Card.Text>
                C Programming
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={Cpp} />
            <Card.Body>
            <Card.Text>
                C++ : From Beginner to Expert
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={LabView} />
            <Card.Body>
            <Card.Text>
                LabVIEW - Computer Vision and Image Processing
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={Matlab} />
            <Card.Body>
            <Card.Text>
                MATLAB - Image Processing
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={aws1} />
            <Card.Body>
            <Card.Text>
                AWS Solutions Training for Partners: Migrating to AWS - Technical (Classroom)
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={Python} />
            <Card.Body>
            <Card.Text>
                Python Bootcamp
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={SQL} />
            <Card.Body>
            <Card.Text>
                The complete SQL Bootcamp
            </Card.Text>
            </Card.Body>
        </Card><Card>
            <Card.Img variant="top" src={Tensorflow} />
            <Card.Body>
            <Card.Text>
                TensorFlow for Deep Learning with Python
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={Unity} />
            <Card.Body>
            <Card.Text>
                Game Development with Unity
            </Card.Text>
            </Card.Body>
        </Card>
        </CardColumns>     
    </Styles>
)