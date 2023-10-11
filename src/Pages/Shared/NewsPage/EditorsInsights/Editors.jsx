import React from 'react';
import img1 from './../../../../assets/1.png'
import img2 from './../../../../assets/2.png'
import img3 from './../../../../assets/3.png'

const Editors = () => {
    return (
       <div>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img1} /></figure>
  <div className="card-body">
    <h2 className="card-title">Title</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img2} /></figure>
  <div className="card-body">
    <h2 className="card-title">Title</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img3} /></figure>
  <div className="card-body">
    <h2 className="card-title">Title</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
       </div>
    );
};

export default Editors;