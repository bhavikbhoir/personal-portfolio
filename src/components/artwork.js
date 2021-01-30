import React, { Component } from 'react';
import {Row, Col, Button, Container, CardColumns} from 'react-bootstrap';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'

import atom from '../assets/artwork/atom.jpg'
import bvillains from '../assets/artwork/bvillains.jpg'
import bvs from '../assets/artwork/bvs.jpg'
import cold from '../assets/artwork/cold.jpg'
import deathstroke from '../assets/artwork/deathstroke.jpg'
import Dent from '../assets/artwork/Dent.jpg'
import flashpoint from '../assets/artwork/flashpoint.jpg'
import joker from '../assets/artwork/joker.jpg'
import lantern from '../assets/artwork/lantern.jpg'
import svb from '../assets/artwork/svb.jpg'
import TKJ from '../assets/artwork/TKJ.jpg'
import kakashi from '../assets/artwork/kakashi.jpg'

const Styles = styled.div`
h2{
    text-align: center;
}
.card-columns{
    column-count: 2;
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

export const Artwork = () => (
    <Styles>
        <h2>ARTWORK</h2>
        <CardColumns>
        <Card>
            <Card.Img variant="top" src={kakashi} />
            <Card.Body>
            <Card.Text>
                Kakashi Hatake of the Sharingan
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={lantern} />
            <Card.Body>
            <Card.Text>
                Hal Jordan - Green Lantern
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={atom} />
            <Card.Body>
            <Card.Text>
                Ray Palmer - The Atom
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={bvillains} />
            <Card.Body>
            <Card.Text>
                Batman Villains
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={bvs} />
            <Card.Body>
            <Card.Text>
                Batman vs Superman
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={deathstroke} />
            <Card.Body>
            <Card.Text>
                Slade Wilson - Deathstroke
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={joker} />
            <Card.Body>
            <Card.Text>
                The Joker
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={flashpoint} />
            <Card.Body>
            <Card.Text>
                Thomas Wayne vs Reverse Flash (Flashpoint Paradox)
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={Dent} />
            <Card.Body>
            <Card.Text>
                THarvey Dent - Two Face
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={cold} />
            <Card.Body>
            <Card.Text>
                Captain Cold vs The Flash
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={svb} />
            <Card.Body>
            <Card.Text>
                Superman vs Batman
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={TKJ} />
            <Card.Body>
            <Card.Text>
                The Killing Joke
            </Card.Text>
            </Card.Body>
        </Card>
        </CardColumns>     
    </Styles>
)