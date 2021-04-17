import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
    ]
    const ourAddress = [
        {name: "Uttara, Dhaka" , link: "//google.com/map"},
        {name: "Dhanmondi" , link: "//google.com/map"},
       
    ]
    const packages = [
        {name: "Sajek Valley"},
        {name: "Kaptai Lake"},
        {name: "Marayong Tong, Bandarban"},
        {name: "Rangamati"},
        {name: "Sitakundo Waterfalls"},
        {name: "Sylhet"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                <FooterCol key={2} menuTitle="" menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Packages" menuItems={packages}/>
                    <FooterCol key={4} menuTitle="Our Addresses" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            {/* <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li> */}
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <p>+8801725585851</p>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;