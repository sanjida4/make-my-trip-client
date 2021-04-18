import React from 'react';
import BookingShortList from '../BookingShortList/BookingShortList';

const BookingByDate = ({ bookings }) => {
    console.log(bookings);
    return (
        <div>
            <h2 style={{ color: 'darkblue' }} className="text-center mt-5">Bookings</h2>
            {
                bookings.length ?
                    <BookingShortList bookings={bookings}></BookingShortList>
                    :
                    <div className="p-5">
                        <h4 className="lead text-center">No bookings on this Date</h4>
                    </div>
            }
            <h4 className="mt-5 pt-4" style={{ color: 'darkblue' }}>Leave a review-</h4><br/>
            <div className="form-group">
                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Give your opinion "></textarea>
            </div>
        </div>
    );
};

export default BookingByDate;