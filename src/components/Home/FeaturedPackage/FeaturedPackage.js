import React from 'react';
import cruise from '../../../images/cruise.jpg';

const FeaturedPackage = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img style={{height:'250px', marginTop:'20px'}} className="img-fluid" src={cruise} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1 style={{color: 'darkblue'}}>Cruise Ship Tours</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, similique excepturi sapiente.
                        </p>
                        <button className="btn btn-info">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPackage;