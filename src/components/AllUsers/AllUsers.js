import React, { useEffect, useState } from 'react';
import BookingDataTable from '../Dashboard/BookingDataTable/BookingDataTable';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AllUsers = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://quiet-depths-98178.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
         <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", height: "100vh", right: 0, backgroundColor: "#FFF5EE" }}>
                <h4 className="mt-4 mb-5" style={{color: 'darkblue'}}>All Users</h4>
                <BookingDataTable bookings={bookings}></BookingDataTable>
            </div>
        </div>
    );
};

export default AllUsers;