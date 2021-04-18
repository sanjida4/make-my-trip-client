import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../../App';
import ProcessPayment from './ProcessPayment';

const Payment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [payment, setPayment] = useState(null);

    const onSubmit = data => {
        setPayment(data);
    };

    const handlePaymentSuccess = paymentId => {
        const paymentDetails = {
            ...loggedInUser,
            payment: payment,
            paymentId,
            paymentTime: new Date()
        };

        fetch('https://quiet-depths-98178.herokuapp.com/addPayment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {

                }
            })
    }

    console.log(watch("example"));

    return (
        <div className="row">
            <div style={{marginTop:'18%', marginLeft:'40%', display: payment ? 'none' : 'block' }} className="col-md-6">
                <h4 style={{color: 'darkblue'}}>Make Payment</h4>
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" /> <br/> <br/>
                    {errors.name && <span className="error">Name is required</span>}

                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" /> <br/> <br/>
                    {errors.email && <span className="error">Email is required</span>}

                    <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" /> <br/> <br/>
                    {errors.phone && <span className="error">Phone Number is required</span>}

                    <input type="submit" />
                </form>
            </div>
            <div style={{marginTop:'18%', marginLeft:'40%', display: payment ? 'block' : 'none' }} className="col-md-6">
                <h2>Please Pay </h2>
                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                
            </div>
        </div>
    );
};

export default Payment;