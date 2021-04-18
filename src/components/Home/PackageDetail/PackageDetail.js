import React from 'react';
import './PackageDetail.css';

const PackageDetail = ({packages}) => {
    return (
        <div className='col-md-4 text-center mt-3 mb-5 animation'>
            {
            packages.image ? <img style={{marginBottom:'20px'}} src={`data:image/jpg;base64,${packages.image.img}`} alt=""/>
            :
            <img style={{marginBottom:'20px'}} className="img-fluid mb-3" src={`http://localhost:5000/${packages.img}`} alt=""/>
        }

            <h4 className="mt-3 mb-3">{packages.name}</h4>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, aut. lorem ipsum dolor sit amet.<br/></p>
        </div>
    );
};

export default PackageDetail;