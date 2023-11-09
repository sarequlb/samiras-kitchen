import React from 'react';
import { Link } from 'react-router-dom';

const PopularFood = ({ food }) => {
    console.log(food)
    const { details, foodImage, foodName, _id } = food;
    return (
        <div className="card w-2/3 bg-base-100 shadow-xl">
            <figure><img className='w-96' src={foodImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {foodName}
                </h2>
                <p>{details.slice(0,20)}<Link to={`/food/${_id}`}>...Read More</Link></p>
                <div className="card-actions justify-end">
                <Link to={`/food/${_id}`}><button  className="btn btn-xs">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PopularFood;