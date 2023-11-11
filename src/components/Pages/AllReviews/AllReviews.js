import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CustomerReview from '../CustomerReviews/CustomerReview';

const AllReviews = () => {
    const reviews = useLoaderData()
    // console.log(allReviews)
    return (
        <div className='mb-96'>
            <h1 className='text-4xl my-20 font-bold'>What customer say about our food?</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    reviews.map(review => <CustomerReview review={review}></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default AllReviews;