import './navbar.css'
import React from 'react';
import {  Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

  const {user, logOut}= useContext(AuthContext)
    const links =<>
    <li className="text-lg lg:text-xl font-semibold mr-5"><NavLink to="/">Home</NavLink></li>
    <li className="text-lg lg:text-xl font-semibold mr-5"><NavLink to="/guideline">Guideline</NavLink></li>
    <li className="text-lg lg:text-xl font-semibold mr-5"><NavLink to="/process">Process</NavLink></li>
    <li className="text-lg lg:text-xl font-semibold mr-5"><NavLink to="/users">Users</NavLink></li>
    {user && (
        <li className="text-lg lg:text-xl font-semibold mr-5">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
    </>

const profileLinks =<>
<li className="text-sm lg:text-sm font-medium text-black "><NavLink to="/requestedTruck">Requested Truck</NavLink></li>
<li className="text-sm lg:text-sm font-medium text-black "><NavLink to="">Approved Truck</NavLink></li>


</>



const handleSignOut=()=>{
     logOut()
     .then(result=>{
      console.log(result.user)
     })

     .then(error=>{
      console.error(error)
     })
}
    return (
       
        <div className='relative'
        style={{
          backgroundImage: "url('https://i.ibb.co/RcJgG4D/149-Photo-Room.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height:'100vh'
        }}
      >
        
      
           <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="white" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" dropdown-content mt-3 p-2 shadow z-40 bg-white text-amber-600 rounded-box w-52 ">
       {links}
      </ul>
    </div>
    <div className="flex flex-col items-center text-white">
       <h2 className='font-bold text-lg'><span className='text-4xl text-pink-400'>T</span>askMaster</h2>
    </div>
  </div>
  <div className="navbar-center hidden  lg:flex">
    <ul className=" text-white pr-5 menu-horizontal px-3">
      {links}
    </ul>
  </div>
  <div className="navbar-end ">
  {user ? (
            <div className="flex items-center">
             <div className="dropdown dropdown-hover">
  <label tabIndex={0} className="hover:underline"> <img
                src={user.photoURL} 
                alt="Profile"
                className="h-10 w-10 rounded-full mr-2"
              /></label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu -ml-20 p-2 shadow bg-base-100 rounded-box w-52">
 {profileLinks}
  </ul>
</div>
             
              <span className="text-lg font-semibold hidden text-white lg:block">{user.displayName}</span>
              <Link>
                <button onClick={handleSignOut} className="btn bg-amber-500 text-white ml-3">
                  Sign Out
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-fuchsia-500 text-white">Login</button>
            </Link>
          )}
            
         
</div>
        </div>
<div className='absolute left-5 top-32 lg:left-20 lg:top-64'>
  
<div className='max-w-sm bg-blend-darken lg:max-w-xl  '>
                  <h2 className='text-2xl font-bold text-start text-white lg:text-5xl'>Mastering Tasks,<br></br> Empowering Success.</h2>
                  <p className='text-sm  py-4 text-gray-300 text-start lg:hidden '> Our platform equips you with the tools to efficiently manage your tasks, set priorities, and optimize productivity.</p>
                  <p className='text-sm hidden  py-4 text-gray-300 text-start lg:text-lg lg:py-8 lg:block'> At ProTaskMasters, we believe in mastering tasks to empower your journey toward success. Our platform equips you with the tools to efficiently manage your tasks, set priorities, and optimize productivity. Join the league of task masters and unleash your full potential with ProTaskMasters. </p>
                  <Link to="/login">
              <button className="btn bg-fuchsia-500 border-none px-6 py-3 text-white hover:bg-white hover:text-fuchsia-500">{`Let's Explore`}</button>
            </Link>
        </div>
</div>
        </div>
    );
};


export default Navbar;