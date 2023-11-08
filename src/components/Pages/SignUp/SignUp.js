import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen w-full">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <h1 className='my-5 text-2xl'>Sign Up Now!</h1>
                    <p>Already Have an account? <Link to={'/signIn'}>Sign In</Link></p>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name <span className='text-error'>*</span></span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address <span className='text-error'>*</span></span>
                            </label>
                            <input type="email" placeholder="Email Address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password <span className='text-error'>*</span></span>
                            </label>
                            <input type="email" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password <span className='text-error'>*</span></span>
                            </label>
                            <input type="password" placeholder="Confirm Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;