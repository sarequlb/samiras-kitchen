import React from 'react';
import { FcRating } from 'react-icons/fc';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MyReview = ({ review,handleDelete }) => {
    const { _id, about, foodImage, rating, title } = review;
    return (
        <tr>
            <th className='w-0'>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost w-0'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                foodImage &&
                                <img src={foodImage} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                           <h1 className='lg:text-1xl font-bold'>{title}</h1>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {about}
            </td>
            <td>
                <div className='flex gap-2 items-center'>
                    <FcRating></FcRating>
                    <h1>{rating}</h1>
                </div>
            </td>
            <th>
                <Link to={`/reviews/${_id}`}><FiEdit></FiEdit></Link>
            </th>
        </tr>
    );
};

export default MyReview;