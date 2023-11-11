import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/KitchenContexts';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';

const Headers = () => {

    const { user, logOut } = useContext(AuthContext)

    const navItem = <>

        <Link to={'/'} className='mx-4  lg:font-semi-bold'>Home</Link>

        {
            user?.email ? <>
                <Link to={'/reviews'} className='mx-4  lg:font-semi-bold'>My Reviews</Link>
                <Link to={'/addFoods'} className='mx-4  lg:font-semi-bold'>Add Foods</Link>
            </> : <></>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => {
                console.log(error)
            })
    }

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
                <h1 className="btn btn-ghost normal-case text-2xl font-bold">Samira's Kitchen</h1>
            </div>
            <div className="lg:navbar-center hidden lg:flex">
                <div className='mx-5'>
                    {navItem}
                </div>
            </div>
            <div className="navbar-end lg:mx-10">
                <div className="indicator">
                    {
                        user?.email ? <>
                            {
                                user?.photoURL ? <div className="avatar">
                                    <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img alt='' src={user?.photoURL} />
                                    </div>
                                </div> : <div className="avatar placeholder">
                                    <div className="bg-red-500 text-neutral-content rounded-full w-10">
                                        <span className="text-1xl">{user.displayName[0]}</span>
                                    </div>
                                </div>
                            }

                            <button onClick={handleLogOut} className='mx-5'><FaSignOutAlt></FaSignOutAlt></button>
                        </> : <Link className='btn btn-accent' to={'/signIn'}>Sign In</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Headers;