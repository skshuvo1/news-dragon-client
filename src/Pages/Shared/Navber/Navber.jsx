import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../firebase/Provider/AuthProvider';
import { FaCircleUser } from 'react-icons/fa6';

const Navber = () => {
    const { user, logOut } = useContext(authContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className='flex bg-gray-200 my-4 p-3 text-slate-500 '>
                <div className='flex m-auto gap-10'>
                    <Link className='hover:bg-slate-300 p-2 rounded' to='/category/0'>Home</Link>
                    <h4 className='hover:bg-slate-300 p-2 rounded'>About</h4>
                    <h4 className='hover:bg-slate-300 p-2 rounded'>Career</h4>
                </div>

                {
                    user ? <div className='flex gap-2 items-center'>
                        <FaCircleUser className='text-2xl '></FaCircleUser>

                        <Link to='/'><button className='hover:bg-slate-300 p-2 rounded' onClick={handleLogOut}>LogOut</button></Link>
                    </div> :
                        <Link className='hover:bg-slate-300 p-2 rounded' to='/login'><button>Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navber;