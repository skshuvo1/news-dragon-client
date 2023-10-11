import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../../firebase/Provider/AuthProvider';
import { FaCircleUser } from 'react-icons/fa6';
import Navber from '../Navber/Navber';


const Header = () => {
    // console.log(users);
    // const {userSignIn} = useContext(authContext);
    // console.log(userSignIn);
    return (
        <div>
            <div className='text-center m-8'>
            <img className='m-auto' src={logo} alt="" />
            <h3>Journalism without Fear or Favor</h3>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className='flex'>
        <button className="btn btn-secondary">Secondary</button>
<Marquee speed={80}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sit ad. Cum totam ut quo harum distinctio corporis ducimus recusandae praesentium, alias animi dolore a, id accusantium inventore aperiam hic.</Marquee>
</div>

<Navber></Navber>


        </div>
    );
};

export default Header;