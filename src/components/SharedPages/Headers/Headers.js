import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {

    const navItem = <>
        <Link className='mx-4  lg:font-semi-bold'>Home</Link>
        <Link className='mx-4  lg:font-semi-bold'>My Reviews</Link>
        <Link className='mx-4  lg:font-semi-bold'>Add Service</Link>
    </>
    return (
        <div className="navbar bg-slate-900 text-white py-7">
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-slate-900 text-white">
                        {navItem}
                    </ul>
                </div>
            </div>
            <div className="lg:navbar-start lg:mx-10">
                <a className="btn btn-ghost normal-case text-xl">Samira's Kitchen</a>
            </div>
            <div className="lg:navbar-center hidden lg:flex">
                <div className='mx-5'>
                    {navItem}
                </div>
            </div>
            <div className="navbar-end lg:mx-10">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <button><Link>Sign in</Link></button>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Headers;