import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/KitchenContexts';
import MyReview from './MyReview';
import useTitle from '../../../hooks/UseTitle';

const MyReviews = () => {
    useTitle('My Reviews')
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`, {

        })

            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete =(id) =>{
        const proceed = window.confirm('Are you sure, you want to delete this review')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const restReviews = reviews.filter(review => review._id !== id)
                    setReviews(restReviews)
                }
            })
        }
    }
    return (
        <div className="overflow-x-auto mt-20 mb-96">
            <h1 className='mb-10 text-2xl'>My Reviews</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input className='mx-0' type="text" value={'Delete'} />
                            </label>
                        </th>
                        <th>Food Name</th>
                        <th>About</th>
                        <th>Rating</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <MyReview handleDelete={handleDelete} key={review._id} review={review}></MyReview>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyReviews;