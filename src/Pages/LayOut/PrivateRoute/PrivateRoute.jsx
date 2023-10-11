import React, { useContext } from 'react';
import { authContext } from '../../../firebase/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(authContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;