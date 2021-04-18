import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import BookTour from '../BookTour/BookTour';
import './Booking.css';
import BookingHeader from '../BookingHeader/BookingHeader';

const Booking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div className="booking-container container-fluid">
            <Navbar></Navbar>
            <BookingHeader handleDateChange={handleDateChange}></BookingHeader>
            <BookTour date={selectedDate}></BookTour>
            <Footer></Footer>
        </div>
    );
};

export default Booking;