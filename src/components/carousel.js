/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
import React, { Component } from 'react';
import {Row, Col, Button, Container, CardColumns, CardGroup} from 'react-bootstrap';
import styled from 'styled-components';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
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

const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Kakashi Hatake of the Sharingan',
            // desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
            image: kakashi,
        },
    },
    {
        player: {
            title: 'The Joker',
            // desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
            image: joker,
        },
    },
    {
        player: {
            title: "Superman vs Batman",
            // desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
            image: svb,
        },
    },
    {
        player: {
            title: 'Captain Cold vs The Flash',
            // desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
            image: cold,
        },
    },
    {
        player: {
            title: 'The Villains of Gotham City',
            // desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
            image: bvillains,
        },
    },
    {
        player: {
            title: 'Batman vs Superman',
            // desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: bvs,
        },
    },
    {
        player: {
            title: "Ray Palmer - The Atom",
            // desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
            image: atom,
        },
    },
    {
        player: {
            title: 'Slade Wilson - Deathstroke',
            // desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
            image: deathstroke,
        },
    },
    {
        player: {
            title: 'Thomas Wayne vs Reverse Flash (Flashpoint Paradox)',
            // desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
            image: flashpoint,
        },
    },
    {
        player: {
            title: 'Harvey Dent - Two Face',
            // desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: Dent,
        },
    },
    {
        player: {
            title: 'The Killing Joke',
            // desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: TKJ,
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * 22}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 1};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image} alt={item.player.title} />
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

export const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="art-carousel">
        <h2>ARTWORK</h2>
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button
                    className="carousel__btn carousel__btn--prev"
                    onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button
                    className="carousel__btn carousel__btn--next"
                    onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};
