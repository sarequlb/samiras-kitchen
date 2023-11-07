import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../../components/SharedPages/Headers/Headers';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;