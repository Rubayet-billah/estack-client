import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext);

    const location = useLocation();

    if (loader) {
        return <div>Loading...</div>
    }

    if (user && user.uid) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
};

export default PrivateRoute;