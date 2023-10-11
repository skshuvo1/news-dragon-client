import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from '../../Shared/Header/Header';

const LoginPage = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginPage;