import React from 'react';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="text-center">
                <h1 style={{color: 'darkblue', fontSize: '70px'}}>Travel With Us <br/> <span style={{fontSize: "40px"}}>For The Best Deal!</span></h1> <br/>
                <button type="button" class="btn btn-light ">Book Now</button>
            </div>
        </main>
    );
};

export default HeaderMain;