import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/UseTitle';

const UpdateReview = () => {
    useTitle('Update Reviews')
    const StoredReview = useLoaderData()
    const {about,rating,email,_id} = StoredReview;
    const handleInputChange =(event) =>{
        event.preventDefault()
        const form = event.target;
        const about = form.about.value;
        const rating = form.rating.value
        const newReview = {
            about,
            rating
        }
        console.log(newReview)
        fetch(`http://localhost:5000/reviews/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        alert('updated successfully')
    }
    return (
        <div className="hero min-h-screen w-full">
            <h1>Update Reviews</h1>
            <div className="hero-content w-full">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleInputChange} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="" defaultValue={email} readOnly className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">About</span>
                            </label>
                            <input type="text" placeholder="" defaultValue={about} name='about' className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="" defaultValue={rating} name='rating' className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateReview;