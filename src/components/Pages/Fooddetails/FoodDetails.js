import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcRating } from 'react-icons/fc';

const FoodDetails = () => {
    const foodDetails = useLoaderData()
    const {details, foodImage, foodName, _id,rating,price} = foodDetails
    console.log(foodDetails)
    return (
        <div className="card lg:w-3/4 w- lg:card-side bg-base-100 shadow-xl mx-auto my-40">
            <figure><img src={foodImage} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                <p className='font-bold font-mono'>Price: {price}</p>
                <div className="card-actions justify-end">
                    <div className='flex justify-center'>

                    <FcRating></FcRating>
                    <p className='text-sm'>{rating}</p>
                    </div>
                 
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;