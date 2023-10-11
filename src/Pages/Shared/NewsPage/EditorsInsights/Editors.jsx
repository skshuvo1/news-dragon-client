import React from 'react';
import img1 from './../../../../assets/1.png'
import img2 from './../../../../assets/2.png'
import img3 from './../../../../assets/3.png'
import moment from 'moment';
import { FaRegCalendarDays } from 'react-icons/fa6';

const Editors = () => {

  const dates = <div className='flex mt-4 items-center gap-3'>
    <FaRegCalendarDays></FaRegCalendarDays>
    <p className='text-zinc-400 flex-grow-0'>{moment().format("MMMM D, YYYY")}</p>

  </div>
  return (
    <div>
      <h2 className='font-bold text-2xl mx-auto my-6'>Editors Insights</h2>
      <div className='flex gap-6'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={img1} /></figure>
          <div className="card-body">
            <h2 className="card-title">Title</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {dates}

          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={img2} /></figure>
          <div className="card-body">
            <h2 className="card-title">Title</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {dates}
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={img3} /></figure>
          <div className="card-body">
            <h2 className="card-title">Title</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {dates}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editors;