import React from 'react';
import sajek from '../../../images/Sajek-Valley.jpg';
import pangthumai from '../../../images/pangthumai waterfall.jpg';
import kaptai from '../../../images/kaptai lake.jpg';
import PackageDetail from '../PackageDetail/PackageDetail';
import './Packages.css';

const packageData = [
    {
        name: 'Sajek Valley',
        img: sajek
    },
    {
        name: 'Pangthumai Waterfall',
        img: pangthumai
    },
    {
        name: 'Kaptai Lake',
        img: kaptai
    }
]

const Packages = () => {
    return (
        <section id="packages">
            <h1 style={{color: 'darkblue', marginTop: '90px'}} className="text-center">Our Packages</h1>

            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5">
                {
                    packageData.map(packages => <PackageDetail packages={packages} key={packages.name}></PackageDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Packages;