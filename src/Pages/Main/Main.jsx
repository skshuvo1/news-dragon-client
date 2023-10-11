import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import LeftNav from '../Parts/LeftNav';
import RightPart from '../Parts/RightPart';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className="grid grid-cols-6 gap-4 text-center">
                <div className="col-start-1 col-end-2 col-span-2 "><LeftNav></LeftNav></div>
                <div className="col-start-2 col-end-6 col-span-3 "><Outlet></Outlet></div>
                <div className="col-start-6  col-span-2 "><RightPart></RightPart></div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;