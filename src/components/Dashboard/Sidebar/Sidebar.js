import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://quiet-depths-98178.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link style={{color: 'darkblue'}} to="/dashboard">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link style={{color: 'darkblue'}} to="/">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {isAdmin && <div>
                    <li>
                        <Link style={{color: 'darkblue'}} to="/allUsers">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Bookings</span>
                        </Link>
                    </li>
                    <li>
                        <Link style={{color: 'darkblue'}} to="/addAdmin">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link style={{color: 'darkblue'}} to="/addPackage">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Add Package</span>
                        </Link>
                    </li>
                    <li>
                        <Link style={{color: 'darkblue'}} to="/managePackage">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Packages</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <Link style={{color: 'darkblue'}} to="/"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;