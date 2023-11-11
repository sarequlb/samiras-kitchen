import React, { useEffect, useState } from 'react';
import CustomerReview from './CustomerReview';
import { Link } from 'react-router-dom';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.slice(0, 3)))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold my-20'>Some customer Reviews</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    reviews.map(review => <CustomerReview review={review}></CustomerReview>)

                }
            </div>
            <div className='mb-60'>
                <Link to={'/allReviews'}><button className="btn btn-outline btn-secondary">See All Reviews</button></Link>
            </div>
        </div>
    );
};

export default CustomerReviews;