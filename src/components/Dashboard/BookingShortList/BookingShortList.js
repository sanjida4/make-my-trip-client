import React from 'react';

const BookingShortList = ({bookings}) => {
    return (
        <table className="table table-borderless text-center mt-5">
            <thead>
                <tr style={{backgroundColor: '#FFFAFA'}}>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody style={{backgroundColor: '#FFFAFA'}}>
                {
                  bookings.map((booking, index) => 
                        
                    <tr>
                        <td>{booking.name}</td>
                        <td>{booking.phone}</td>
                        <td>{booking.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default BookingShortList;