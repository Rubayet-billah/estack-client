import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import Spinner from '../Pages/SharedPages/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext);

    const location = useLocation();

    if (loader) {
        return <Spinner></Spinner>
    }

    if (user && user.uid) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
};

export default PrivateRoute;