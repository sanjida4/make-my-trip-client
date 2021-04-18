import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="text-center">
                <h1 style={{color: 'darkblue', fontSize: '70px'}}>Travel With Us <br/> <span style={{fontSize: "40px"}}>For The Best Deal!</span></h1> <br/>
                <Link to="/booking" className="btn btn-light">Book Now</Link>
            </div>
        </main>
    );
};

export default HeaderMain;