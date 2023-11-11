import React, { useState } from 'react';
import useTitle from '../../../hooks/UseTitle';

const AddFoods = () => {
    const [error,setError] = useState(null)
    useTitle('Add Foods')
    const handleAddProduct = (event) =>{
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const foodImage = form.foodImage.value;
        const details = form.details.value;
        if(details.length < 100){
            setError('details about 100 characters')
            return
            
        }
        const food ={
            foodName:title,
            rating:rating,
            foodImage:foodImage,
            price:price,
            details:details
        }

        fetch('https://samiras-kitchen-server.vercel.app/foods',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(food)
        })
        .then(res => res.json())
        .then(data => {
           if(data.acknowledged === true){
                alert('food added succesfully')
                form.reset('')
           }
        })
    }

    return (
        <div>
            <div className='mb-52'>
            <h2 className='text-4xl my-20'>Add Your Product</h2>
            <form className='mx-20' onSubmit={handleAddProduct}>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-5'>
                    <input name='title' type="text" placeholder="title" className="input w-full input-bordered" required />
                    <input name='price' type="text" placeholder="price" className="input w-full input-bordered " required />
                    <input name='foodImage' type="text" placeholder="imageUrl" className="input w-full input-bordered" required />
                    <input name='rating' type="text" placeholder="rating" defaultValue={''} className="input w-full input-bordered" required />
                </div>
                <textarea name='details' className="textarea textarea-bordered h-24 w-full mt-5" placeholder="details"></textarea>
                <p className='text-red-500 my-10'>{error}</p>
                <input className='btn' type='submit' value={'Add Your Product'} required></input>
            </form>
        </div>
        </div>
    );
};

export default AddFoods;