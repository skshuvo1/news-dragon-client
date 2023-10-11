import React, { useRef } from 'react';
import { useContext } from 'react';
import { authContext } from '../../../firebase/Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa6';

const Login = () => {

  const { userSignIn } = useContext(authContext);
  const navigate = useNavigate();
  const passwordRef = useRef();
  const location = useLocation();
  const from = location.state?.from.pathname || '/category/0';

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // if(loading){
    //   return <span className="loading loading-spinner text-error"></span>
    // }

    userSignIn(email, password)
      .then(res => {
        const signedUser = res.user;
        console.log(signedUser);
        navigate(from, { replace: true })

      })
      .catch(error => console.log(error))
  }

  const handleShowPass = (e) => {
    const password = passwordRef.current;
    console.log(password);
    if (password.type === 'password') {
      password.type = 'text';
    }
    else (password.type = 'password')
  }




  return (
    <div>
      <div className='flex bg-gray-200 my-4 p-3 text-slate-500 '>
        <div className='flex m-auto gap-10'>
          <Link to='/'>Home</Link>
          <h4>About</h4>
          <h4>Career</h4>
        </div>


      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                  <p>New to here? Please <Link to='/register'>register</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;