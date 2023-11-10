import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/KitchenContexts';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { toast } from 'react-toastify';

const SignUp = () => {
    const [error, setError] = useState(null)
    const [success,setSuccess] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { createUser,googleSignIn,updateUser} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // if (!/(?=.*[A-Z])/.test(password)) {
        //     setError('please provide at least ONE uppercase')
        //     return;
        // }
        if (password.length < 6) {
            setError('please should be 6 characters')
            return;
        }
        if (password !== confirmPassword) {
            setError('passWord didnot match')
            return;
        }

        // if (!/(?=.*[!#$%&? "])/.test(password)) {
        //     setError('please add at least 1 special characters')
        //     return;
        // }
        setError('')
        createUser(email, password)
            .then(result => {
                const user = result.user; 
                handleUpdate(fullName)
                setSuccess(true)
                navigate(from ,{replace:true})
                
            })
            .catch(error => {
                setError(error.message)
            })

    const handleUpdate =(fullName) =>{
        const profile ={
            displayName: fullName
        }
        updateUser(profile)
        .then(() =>{

        })
        .catch(error => {})

    }

    }

    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result =>{
            navigate(from ,{replace:true})
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen w-full">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <h1 className='my-5 text-2xl'>Sign <span className='text-pink-500'>Up</span> Now!</h1>
                    <p>Already Have an account? <Link className='text-pink-500' to={'/signIn'}>Sign In</Link></p>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name <span className='text-error'>*</span></span>
                            </label>
                            <input type="text" placeholder="Name" name='fullName' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address <span className='text-error'>*</span></span>
                            </label>
                            <input type="email" placeholder="Email Address" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password <span className='text-error'>*</span></span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password <span className='text-error'>*</span></span>
                            </label>
                            <input type="password" placeholder="Confirm Password" name='confirmPassword' className="input input-bordered" required />

                        </div>
                        {success && <p className='text-success'>user created succesfully</p>}
                        <p className='mt-2 text-red-600'>{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className=" mt-2 mb-8 flex justify-center gap-5">
                        <button onClick={handleGoogleSignIn} className="btn"> <FcGoogle></FcGoogle>Google</button>
                        <span className='text-center text-sm'>or</span>
                        <button className="btn"> <BsFacebook></BsFacebook>Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;