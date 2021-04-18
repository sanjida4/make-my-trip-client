import React, { useEffect, useState } from 'react';
import sajek from '../../../images/Sajek-Valley.jpg';
import pangthumai from '../../../images/pangthumai waterfall.jpg';
import kaptai from '../../../images/kaptai lake.jpg';
import PackageDetail from '../PackageDetail/PackageDetail';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <section id="packages">
            <h1 style={{ color: 'darkblue', marginTop: '90px' }} className="text-center">Our Packages</h1>

            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5">
                    {
                        packages.map(packages => <PackageDetail packages={packages} key={packages._id}></PackageDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Packages;