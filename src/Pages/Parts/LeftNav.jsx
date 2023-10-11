
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from './../../assets/1.png'
import img2 from './../../assets/2.png'
import img3 from './../../assets/3.png'
import { FaRegCalendarDays } from 'react-icons/fa6';
import moment from 'moment';


const LeftNav = () => {
    const [categories, setCategories] = useState([])
    const dates = <div className='flex mt-4 mb-2  ms-1items-center gap-3'>
    <FaRegCalendarDays></FaRegCalendarDays>
    <p className='text-zinc-400 flex-grow-0'>{moment().format("MMMM D, YYYY")}</p>

  </div>

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h2 className='mb-12 font-bold'>All Category</h2>
            <div className='flex flex-col justify-start items-start xl:ms-12 '>
            {
                categories.map(category => <p className='mb-4' key = {category.id} >
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
                
            }

            </div>
            <div className="card bg-base-100 shadow-xl mb-3">
  <figure><img src={img1}/></figure>
  <div className="card-body">
    <h2 className="card-title">Sports</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio ad blanditiis numquam, quae quam!</p>    
  </div>
  {dates}
</div>
            <div className="card bg-base-100 shadow-xl mb-3">
  <figure><img src={img2}/></figure>
  <div className="card-body">
    <h2 className="card-title">Sports</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio ad blanditiis numquam, quae quam!</p>    
  </div>
  {dates}
</div>
            <div className="card bg-base-100 shadow-xl mb-3">
  <figure><img src={img3}/></figure>
  <div className="card-body">
    <h2 className="card-title">Sports</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio ad blanditiis numquam, quae quam!</p>    
  </div>
  {dates}
</div>
        </div>
    );
};

export default LeftNav