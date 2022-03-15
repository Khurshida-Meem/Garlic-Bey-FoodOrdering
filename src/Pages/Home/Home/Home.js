import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Menu from '../../Shared/Navbar/Menu';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Meals/Categories/Categories'

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Banner></Banner>
            <Categories></Categories>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;
