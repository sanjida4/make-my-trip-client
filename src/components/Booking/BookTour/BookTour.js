import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Sajek Valley',
        DepartureHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'Pangthumai Waterfall',
        DepartureHour: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'Kaptai Lake',
        DepartureHour: '5:00 PM - 6:00 PM',
        totalSpace: 10
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        subject: 'Sylhet',
        DepartureHour: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        subject: 'Sitakundo Waterfall',
        DepartureHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]

const BookTour = ({date}) => {
    return (
        <section>
            <h2 style={{color: 'darkblue'}} className="text-center">Available Tours on {date.toDateString()}</h2>
            <div className="row mt-5">
                {
                    bookingData.map((booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>))
                }
            </div>
        </section>
    );
};

export default BookTour;