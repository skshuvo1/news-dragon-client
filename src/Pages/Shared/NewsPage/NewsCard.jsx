import React, { useState } from 'react';
import { FaBookmark, FaEye, } from "react-icons/fa6";
import { HiOutlineStar, HiShare, HiStar } from "react-icons/hi";
import { Link } from 'react-router-dom';
import moment from 'moment';
import Rating from 'react-rating';
// import { FaRegStar, FaStar } from 'react-icons/fa';


const NewsCard = ({ news }) => {
    // const [detail, setDetail] = useState()
    // console.log(detail);
    const { rating, _id, author, title, image_url, total_view, details } = news;
    // const date = author.published_date;
    // const newDate = date.slice(0, -8)

    const blogsStr = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...'
        }
        else {
            return str;
        }
    }

    return (
        <div className='mb-8 w-full border border-gray-300'>

            <header>

                <nav className="bg-gray-200 p-4 flex justify-between items-center">
                    <div className='flex gap-2'>
                        <img className='rounded-full w-8 h-8' src={image_url} alt="" />
                        <div>
                            <h4 className='font-bold'>{author.name}</h4>
                            {/* <p>{newDate}</p> */}
                            <p>{(moment(author.published_date).format('yyyy-MM-D'))}</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 text-xl">
                        <FaBookmark></FaBookmark>
                        <HiShare></HiShare>
                    </div>
                </nav>
            </header>

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='font-bold my-3 px-2 left-0'>{title}</p>
                </div>
                <figure><img className='w-full' src={image_url} alt="Shoes" /></figure>
                <div className='mb-4 border border-b-gray-200'>
                    <p className='mt-6 mb-2'>{blogsStr(details, 100)}</p>


                    <Link to={`/news/${_id}`} className='text-red-500 underline '>Read More</Link>
                </div>
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex gap-2 items-center ms-4'>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<HiOutlineStar></HiOutlineStar>}
                            placeholderSymbol={<HiStar className='text-red-500'></HiStar>}
                            fullSymbol={<HiStar></HiStar>}

                        ></Rating>
                        <p>{rating.number}</p>
                    </div>
                    <div className='flex me-4 gap-2 items-center'>
                        <FaEye></FaEye>
                        {total_view}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;