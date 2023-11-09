import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/KitchenContexts';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()

    if (loader) {
        return <div>

            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if (!user) {
        return <Navigate to={'/signIn'} state={{ from: location }} replace></Navigate>
    }
    return (
        children
    );
};

export default PrivateRoutes;