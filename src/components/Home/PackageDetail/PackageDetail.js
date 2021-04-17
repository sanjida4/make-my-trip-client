import React from 'react';

const PackageDetail = ({packages}) => {
    return (
        <div className='col-md-4 text-center mt-3 mb-5'>
            <img style={{height: '200px', width: '350px', marginBottom:'20px'}} src={packages.img} alt=""/>
            <h4>{packages.name}</h4>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, aut. lorem ipsum dolor sit amet.<br/>{packages.departure} <br/> {packages.arrival}</p>
        </div>
    );
};

export default PackageDetail;