
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftNav = () => {
    const [categories, setCategories] = useState([])
    // console.log(categories
    //     );

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h2 className='mb-12 font-bold'>All Category</h2>
            <div>
            {
                categories.map(category => <p className='mb-4' key = {category.id} >
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
                
            }
            </div>
        </div>
    );
};

export default LeftNav