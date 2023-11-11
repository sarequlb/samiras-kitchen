import React from 'react';
import kitchenLogo from '../../../assets/kitchenLogo.jpg'

const Footers = () => {
    return (
        <footer className="footer footer-center p-10 bg-slate-900 text-primary-content">
            <aside>
                <img className='w-1/2' src={kitchenLogo} alt="" />
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footers;