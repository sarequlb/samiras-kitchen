import React from 'react';
import { IoBicycleSharp } from 'react-icons/io5';
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";

const AboutMyFood = () => {
    return (
        <div className='lg:flex justify-around bg-slate-900 text-white py-20 px-2  mb-36 rounded'>
        
            <div className='lg:text-start mb-20 lg:border-r-2 border-pink-600 lg:pr-32'>

                <BsCart2 className='text-2xl lg:text-start text-center inline text-pink-600'></BsCart2>
                <h1 className='lg:text-2xl font-bold text-pink-600'>Easy to Order</h1>
                <p className='text-sm lg:text-xl'>Food can <br /> order easily in our <br /> website</p>

            </div>
            <div className='lg:text-start  mb-20 lg:border-r-2 border-pink-600 lg:pr-32'>
                <IoBicycleSharp className='text-2xl inline text-pink-600'></IoBicycleSharp>
                <h1 className='lg:text-2xl font-bold text-pink-600'>Fast to Service</h1>
                <p>You Can Order <br /> easily and Go your <br /> home</p>
            </div>
            <div className='lg:text-start'>
                <HiOutlineBadgeCheck className='text-2xl inline text-pink-600'></HiOutlineBadgeCheck>
                <h1 className='lg:text-2xl  font-bold text-pink-600'>Best Quality</h1>
                <p>My Food <br /> Quality is better <br /> and Yummy</p>
            </div>
        </div>
    );
};

export default AboutMyFood;