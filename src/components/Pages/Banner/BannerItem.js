import React from 'react';
import './Banner.css'
const BannerItem = ({ slide }) => {
    const { image, next, prev, id } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img alt="" src={image} className="w-full h-full rounded-xl" />
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 right-10 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mx-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 lg:left-24 top-1/3 w-2/5">
                <h1 className='lg:text-5xl  text-2xl font-bold'>Welcome to <span className=' text-pink-600'>Samira's</span> Kitchen</h1>
            </div>
            <div className='absolute flex justify-center transform -translate-y-1/2 lg:left-24 bottom-36 lg:bottom-60 top-2/4 w-2/5'>
                <p className='lg:text-2xl font-bold'>Tasty & <span className='text-pink-600'>Delicious</span>  Foods</p>
            </div>
            <div className='absolute flex justify-center transform -translate-y-1/2 left-24 top-2/3 lg:w-2/5 bottom-56 lg:bottom-28'>
                <button className="btn btn-outline btn-secondary">Check Foods</button>
            </div>
        </div>
    );
};

export default BannerItem;