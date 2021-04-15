import React from 'react';
import './Reviews.css';
import elizabeth from '../../../images/elizabeth.jpg';
import chris from '../../../images/chris.jpg';
import tom from '../../../images/tom.png';
import Review from '../Review/Review';

const reviewData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi sunt iure! Praesentium et tenetur eveniet sunt earum omnis sapiente.',
        name: 'Chris Evans',
        from: 'America',
        img: chris
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi sunt iure! Praesentium et tenetur eveniet sunt earum omnis sapiente.',
        name: 'Elizabeth Olsen',
        from: 'California',
        img: elizabeth
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi sunt iure! Praesentium et tenetur eveniet sunt earum omnis sapiente.',
        name: 'Tom Holland',
        from: 'Brooklyn',
        img: tom
    }
]

const Reviews = () => {
    return (
        <section id="reviews" className='reviews my-5 py-5'>
            <div className="container">
               <div className="section-header text-center">
                   <h5 className="text-primary text-uppercase">Reviews</h5>
                   <h1 style={{color: 'darkblue'}}>What Our Customer Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviewData.map(review => <Review review={review} key={review.name}></Review>)
                    }
                </div>
           </div>
        </section>
    );
};

export default Reviews;