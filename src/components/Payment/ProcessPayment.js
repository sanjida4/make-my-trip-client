import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('sk_test_51IhHzkEomD5xmCWx4HySNeF53d3lyErRVt5EeQYCueXCVYifjEXCSaVzY8nyUilClUNb1dsEHX0b4qjYLPlbcxsQ00e9tlAWpr');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SplitCardForm handlePayment={handlePayment} ></SplitCardForm>
        </Elements>
    );
};

export default ProcessPayment;