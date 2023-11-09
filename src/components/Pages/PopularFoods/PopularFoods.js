import React from 'react';
import PopularFood from './PopularFood';
import { Link } from 'react-router-dom';

const PopularFoods = ({foods}) => {
    return (
        <div >
            <h1 className='text-4xl font-bold font-serif mb-20'>Popular  <span className='text-pink-600'>Foods</span></h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center'>
                {
                    foods.map(food => <PopularFood key={food._id} food ={food}></PopularFood>)
                }
            </div>
            <Link to={'/allFoods'}><button className="btn btn-outline btn-secondary m-10">Se All Foods</button></Link>
        </div>
    );
};

export default PopularFoods;