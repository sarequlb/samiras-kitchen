import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/KitchenContexts';
import { FcRating } from 'react-icons/fc';

const CustomerReview = ({ review }) => {
    const { user } = useContext(AuthContext)
    console.log(review)
    return (
        <div className='my-20'>

            <div className="card w-3/4 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{review.title}</h2>
                    <div>
                        <h1 className='text-start my-5'>{review.about}</h1>
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex gap-3 '>
                            <div>
                                {
                                    review?.photo ? <figure><img className='w-10 rounded-full' src={user?.photoURL} alt="Movie" /></figure> :
                                        <>
                                            <div className="avatar placeholder">
                                                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                                    <span className="text-1xl">{review.name[0]}</span>
                                                </div>
                                            </div>
                                        </>
                                }
                            </div>
                            <div>
                                <h1>{review.name}</h1>
                            </div>
                        </div>
                        <div className="card-actions justify-end  items-center">
                            <FcRating></FcRating>
                            <h1>5.9</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;