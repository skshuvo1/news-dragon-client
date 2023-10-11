import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from './Qzone';
import bg from './../../assets/bg.png'


const RightPart = () => {
    return (
        <div className=''>
            <button className="btn mb-2 lowercase"><FaGoogle></FaGoogle>Sign In with Google</button>
            <button className="btn mb-4 lowercase"><FaGithub></FaGithub>Sign In with Github</button>
            <div>
                <h2 className='text-xl text-center font-bold mt-3 '>Find Us On</h2>
                <ul className='mt-3 '>
                    <button className='border border-gray-300 mb-2 gap-2 flex items-center w-full'><FaFacebook></FaFacebook>Facebook</button>
                    <button className='border border-gray-300 mb-2 gap-2 flex items-center w-full'><FaGithub></FaGithub>Github</button>
                    <button className='border border-gray-300 mb-2 gap-2 flex items-center w-full'><FaInstagram></FaInstagram>Instagrum</button>
                 
                </ul>
            </div>
        <div>
            <h2 className='text-orange-700 font-bold text-2xl mt-8'>Qzone</h2>
            <Qzone></Qzone>
        </div>
        <div>
            <img src={bg} alt="" />
        </div>
        </div>
    );
};

export default RightPart;