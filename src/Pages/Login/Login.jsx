import React from 'react';

import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { BsGoogle } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

   
    const location = useLocation()
    console.log('location in login page', location)
    const navigate = useNavigate()
    const { signIn, loading } = useContext(AuthContext)


    const handleLogin = async (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const email = form.get('email');
      const password = form.get('password');
  
      try {
          await signIn(email, password);
          navigate(location?.state ? location.state : '/dashboard');
      } catch (error) {
          console.error("Login Error:", error.message);
          toast.error(error.message);
      }
  };
    return (

        <div className=" container   mx-auto drop-shadow mt-12 lg:mt-40">
            <div className="max-w-3xl mx-auto lg:max-w-5xl"  >
          
        
         <div className="flex flex-row-reverse gap-6">
         <div className='flex-1 flex flex-col  justify-start'>
                <h2 className="text-2xl font-bold text-black  text-center  lg:text-4xl ">Login Here !</h2>
                    <form onSubmit={handleLogin} className="py-5" >
                    <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-medium">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered max-w-xl" required />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text text-xl font-medium">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name="password" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-fuchsia-500 text-white">Login</button>
        </div>

        <p className="py-3 text-lg">Create an account. <NavLink to="/register" className="text-fuchsia-500 font-bold">Sign Up.</NavLink>now</p>
                    </form>
                    </div>
                    <div className="flex-1 h-full">
                        <img className="" src="https://i.ibb.co/FmGmm4Q/illustration-login-for-ui-ux-design-vector.jpg" alt="" />
                    </div>
                
         </div>
            </div>

        </div>


    );
};

export default Login;