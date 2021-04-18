import React, { useState } from 'react';
import BookingForm from '../BookingForm/BookingForm';
import './BookingCard.css';

const BookingCard = ({ booking, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="col-md-4 mb-5">
      <div className="card p-3">
        <div className="card-body text-center">
          <h5 style={{ color: 'darkblue', fontSize: '22px' }} className="card-title">{booking.subject}</h5>
          <h6>{booking.DepartureHour}</h6>
          <p>{booking.totalSpace} SPACES AVAILABLE</p>
          <button onClick={openModal} className="btn btn-primary text-uppercase">Book Tour</button>
          <BookingForm modalIsOpen={modalIsOpen} bookingOn={booking.subject} closeModal={closeModal} date={date}></BookingForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;