import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from './HeaderMain/HeaderMain';
import './Header.css';
import About from '../About/About';
import Packages from '../Packages/Packages';
import FeaturedPackage from '../FeaturedPackage/FeaturedPackage';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Header = () => {
    return (
        <div id="home" className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <About></About>
            <Packages></Packages>
            <FeaturedPackage></FeaturedPackage>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Header;