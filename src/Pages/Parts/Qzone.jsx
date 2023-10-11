import React from 'react';
import qzone1 from './../../assets/qZone1.png'
import qzone2 from './../../assets/qZone2.png'
import qzone3 from './../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div>
            <img className='w-full' src={qzone1} alt="" />
            <img className='w-full' src={qzone2} alt="" />
            <img className='w-full' src={qzone3} alt="" />
        </div>
    );
};

export default Qzone;