import React from 'react';
import Banner from '../Banner/Banner'
import AboutMyFood from '../AboutMyFood/AboutMyFood'
import Discount from '../Discount/Discount'
import { useLoaderData } from 'react-router-dom';
import PopularFoods from '../PopularFoods/PopularFoods';

const Homes = () => {
    const foods = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <AboutMyFood></AboutMyFood>
            <PopularFoods foods={foods}></PopularFoods>
            <Discount></Discount>
        </div>
    );
};

export default Homes;