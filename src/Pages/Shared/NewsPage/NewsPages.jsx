import React from 'react';
import { Outlet } from 'react-router-dom';
import RightPart from '../../Parts/RightPart';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const NewsPages = () => {
    return (
        <div>
            
            <Header></Header>
            <div className="grid grid-cols-6 gap-4 text-center">
                <div className="col-start-1 col-end-6 col-span-3"><Outlet></Outlet></div>
                <div className="col-start-6 col-end-7 col-span-2 "><RightPart></RightPart></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NewsPages;