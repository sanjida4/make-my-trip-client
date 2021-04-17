import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse container" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mt-4">
                    <li className="nav-item active">
                        <a className="nav-link ms-5" href="#home">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5" href="#packages">Packages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5" href="#reviews">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5" href="#contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;