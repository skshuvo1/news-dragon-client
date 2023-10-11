import React, { useRef } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../../firebase/Provider/AuthProvider';
import { FaEye } from 'react-icons/fa6';


const Register = () => {
  const navigate = useNavigate();
  const passwordRef = useRef()

    const {createUser} = useContext(authContext);
   

const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
       .then(res => {
           const loggedUser = res.user;
           console.log(loggedUser);
           navigate('/category/0')
        
       })
       .catch(error => {
        console.log(error.message);
       })
}   

const handleShowPass = (e) => {
  const password = passwordRef.current;
  if(password.type === 'password'){
    password.type = 'text';
  }
  else(password.type = 'password')
}



    return (
        <div>
            <div className='flex bg-gray-200 my-4 p-3 text-slate-500 '>
    <div className='flex m-auto gap-10'>
    <Link to='/'>Home</Link>
    <h4>About</h4>
    <h4>Career</h4>
    </div>
  
    <Link to='/register'><button>Register</button></Link>
</div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Please Register</h1>
      </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className='flex justify-between items-center'>
          <input type="password" placeholder="password" ref={passwordRef} name='password' className="input input-bordered w-full z-0 relative" required />
          <FaEye className='z-10 absolute right-12' onClick={handleShowPass}></FaEye>
          </div>
          <label className="label">
            <p>Already have an account? Please <Link className='underline text-blue-600' to='/login'>Login</Link></p>
          </label>
        </div>
        <div className='flex gap-4 mt-3'>
        <input type="checkbox"  className="checkbox" />
        <label><p>Accept our <Link className='underline text-blue-600' to='/terms'>terms & conditions</Link></p></label>

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          {/* <p>{user}</p> */}
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;