import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Meals/Categories/Categories'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <About></About>
        </div>
    );
};

export default Home;
