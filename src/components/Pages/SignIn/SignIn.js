import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/KitchenContexts';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {
    const [error,setError] = useState(null)
    const [userEmail, setUSerEmail] = useState(null)
    const { logIn, googleSignIn, resetPass } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const passWord = form.password.value;
        logIn(email, passWord)
            .then(result => {
                const user = result.user;
                navigate(from ,{replace:true})
                console.log(user)
            })
            .catch(error => {
                setError(error.message)
            })
        setError('')
    }

    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result =>{
            navigate(from ,{replace:true})
        })
        .catch(error => console.log(error))
    }



    const passwordReset = () => {
        if (!userEmail) {
            toast('please Enter your email')
        }
        resetPass(userEmail)
            .then(() => {
                alert('password reset email sent.please check your email')
            })
            .catch(error =>{
                setError(error.message)
            })
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUSerEmail(email)
    }

    return (
        <div className="hero min-h-screen w-full">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='my-5 text-2xl'>Log <span className='text-pink-500'>In</span> Now!</h1>
                    <p>Dont Have an account? <Link className='text-pink-500' to={'/signUp'}>Sign UP</Link></p>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleEmailBlur} type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <button onClick={passwordReset}><a className="label-text-alt link link-hover">Forgot password?</a></button>
                            </label>
                        </div>
                        <p className='mt-2 text-red-600'>{error}</p>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className=" mt-2 mb-8 flex justify-center gap-5">
                        <button onClick={handleGoogleSignIn} className="btn"> <FcGoogle></FcGoogle>Google</button>
                        <span className='text-center text-sm'>or</span>
                        <button className="btn"> <BsFacebook></BsFacebook>Facebook</button>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>

        </div>
    );
};

export default SignIn;