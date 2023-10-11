import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import Editors from './EditorsInsights/Editors';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2 className='font-bold float-left my-4 text-2xl'>Dragon news</h2>

            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src={news.image_url} /></figure>
  <div className="card-body">
    <h2 className="card-title">{news.title}</h2>
    <p>{news.details}</p>
    <div className="card-actions justify-start">
      
     <Link to={`/category/${news.category_id}`}> <button className="btn btn-outline btn-secondary "><HiArrowNarrowLeft></HiArrowNarrowLeft>All news in this category</button></Link>
    </div>
  </div>
</div>
<Editors></Editors>
        </div>
        
    );
};

export default News;