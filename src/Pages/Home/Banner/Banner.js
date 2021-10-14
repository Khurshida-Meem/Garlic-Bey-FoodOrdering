import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="home-banner d-flex justify-content-center align-items-center">
            <div>
                <Container>
                    <h1 className="fw-bold">SOLUTION OF YOUR HUNGER with <br /> <span className="secondary-text">GARLIC BEY</span></h1>
                    <p>We provide one of the best foods in town in cheap cost and superfast delivery service.</p>
                    <input type="text" placeholder="Search" className="px-3 pe-5 py-2 input-field rounded-pill w-75" />
                    <button className="search-btn py-2 px-4 secondary-btn rounded-pill">Search</button>
                </Container>
            </div>

        </div>
    );
};

export default Banner;