import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingHeader = ({handleDateChange}) => {

    return (
        <main style={{ height: '900px' }} className="row d-flex ">
            <div style={{marginTop: '160px'}} className="col-md-6 offset-md-1">
                <h1 style={{ color: 'darkblue', marginLeft: '40px'}}>Choose a date</h1>
                <br/>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div style={{marginTop: '160px'}} className="col-md-4 offset-md-1">
                <h1 style={{ color: 'darkblue' }}>THE TRIP OF YOUR <br /> DREAM</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dicta reprehenderit. Corrupti, qui debitis dolor ad natus officiis impedit non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quos nesciunt dolores cupiditate reiciendis assumenda nemo a temporibus officiis!</p>
                <button type="button" class="btn btn-outline-info">LEARN MORE</button>
            </div>
            
        </main>
    );
};

export default BookingHeader;