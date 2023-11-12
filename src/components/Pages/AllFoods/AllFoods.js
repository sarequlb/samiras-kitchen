import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFood from '../AllFood/AllFood';
import './AllFoods.css'

const AllFoods = () => {
    // const {foods,count} = useLoaderData()
    const [foods, setFoods] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)

    useEffect(() =>{
         const url = `https://samiras-kitchen-server.vercel.app/foods?page=${page}&size=${size}',`
         fetch(url)
         .then(res => res.json())
         .then(data => {
            setCount(data.count)
            setFoods(data.foods)
         })
    },[page,size])


    const pages = Math.ceil(count / size);
    console.log(foods)
    return (
        <div className='mb-20'>

            <h1 className='lg:text-4xl text-3xl my-20'>Here is Our All <span className='text-pink-500'>Food Services</span></h1>
            {
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:mx-0 ml-24 justify-center align-center'>
                    {
                        foods.map(food => <AllFood key={food._id} food={food}></AllFood>)
                    }
                </div>
            }

            <div className="pagination flex justify-end mt-40">
                
                {
                    [...Array(pages).keys()].map(number => <button onClick={() => setPage(number)} className={page === number && 'selected'} key={number}>
                        {number}
                    </button>)
                }
                <select onChange={event => setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option selected value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default AllFoods;