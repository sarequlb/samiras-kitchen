import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFood from '../AllFood/AllFood';

const AllFoods = () => {
    const foods = useLoaderData()
    console.log(foods)
    return (
        <div className='mb-96'>
            <h1 className='lg:text-4xl text-3xl my-20'>Here is Our All <span className='text-pink-500'>Food Services</span></h1>
            {
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center'>
                    {
                        foods.map(food => <AllFood key={food._id} food={food}></AllFood>)
                    }
                </div>
            }
        </div>
    );
};

export default AllFoods;