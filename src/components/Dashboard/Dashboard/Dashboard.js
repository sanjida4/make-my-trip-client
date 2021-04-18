import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import BookingByDate from '../BookingByDate/BookingByDate';

const containerStyle = {
    backgroundColor: "#FFF0F5",
    height: "100%"
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [bookings, setBookings] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/bookingsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className=" container-fluid row">
                <div className="col-md-2  col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 mt-5 pt-5 px-5 mx-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-4 col-sm-12 col-12">
                    <BookingByDate bookings = {bookings}></BookingByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;