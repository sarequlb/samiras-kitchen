import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcRating } from 'react-icons/fc';
import { AuthContext } from '../../../Contexts/KitchenContexts';

const FoodDetails = () => {
    const { user } = useContext(AuthContext)
    console.log(user.email)
    const foodDetails = useLoaderData()
    const { details, foodImage, foodName, _id, rating, price } = foodDetails
    console.log(foodDetails)

    const handleAddReview = (event) => {
        event.preventDefault()
        const form = event.target;
        const about = form.about.value;
        const rating = form.rating.value;


        const review = {
            about: about,
            rating: rating,
            email:user.email,
            foodImage: foodImage,
            photo: user?.photoURL,
            name:user?.displayName,
            title:foodName
        }

        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    alert('food added succesfully')
                    form.reset('')
                }
            })
    }
    return (
        <div className=" ">
            <div className="hero-content flex-col mt-56 mb-52 lg:flex-row">
                <img src={foodImage} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="lg:text-5xl text-3xl text-pink-500 font-bold">{foodName}</h1>
                    <p className="py-6">{details}</p>
                    <p className="py-6 font-bold text-lg">Price: {price} Taka</p>
                    <div className='flex justify-center'>
                        <FcRating></FcRating>
                        <p className='text-sm'>{rating}</p>
                    </div>
                </div>
            </div>
            
            <div className='mt-10 mb-20'>
                <h1 className='font-bold text-4xl mb-5'>Write a Review</h1>
                <form className='mx-20' onSubmit={handleAddReview}>
                    <textarea name='about' className="textarea textarea-bordered h-24 lg:w-1/5 mt-5 m-5" placeholder="about this food"></textarea> <br />
                    <input name='rating' type="text" placeholder="rating" defaultValue={''} className="input lg:w-1/5 input-bordered" required /> <br />
                    <input className='btn m-5' type='submit' value={'Add Your Review'} required></input>
                </form>
            </div>
        </div>
    );
};

export default FoodDetails;