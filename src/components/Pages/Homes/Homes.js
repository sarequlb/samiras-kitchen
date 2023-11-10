import React from 'react';
import Banner from '../Banner/Banner'
import AboutMyFood from '../AboutMyFood/AboutMyFood'
import Discount from '../Discount/Discount'
import { useLoaderData } from 'react-router-dom';
import PopularFoods from '../PopularFoods/PopularFoods';
import CustomerReviews from '../CustomerReviews/CustomerReviews';

const Homes = () => {
    const foods = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <AboutMyFood></AboutMyFood>
            <PopularFoods foods={foods}></PopularFoods>
            <Discount></Discount>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Homes;