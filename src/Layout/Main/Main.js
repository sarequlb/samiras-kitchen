import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../../components/SharedPages/Headers/Headers';
import Footers from '../../components/SharedPages/Footers/Footers';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footers></Footers>
        </div>
    );
};

export default Main;