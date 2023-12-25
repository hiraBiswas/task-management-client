import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { SiTask } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { MdOutlineManageHistory } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


const Dashboard = () => {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate(); 
console.log(user)
  const handleSignOut = () => {
    logOut()
   
      .then(result => {
        console.log(result.user);
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="flex">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-violet-950 items-center  ">
        <div className="">

        <Outlet />
      </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-fuchsia-700 text-base-content">
            {/* Sidebar content here */}
            <Link to="/">

                <h2 className='font-bold text-lg text-white py-5 '><span className='text-violet-950 text-4xl '>T</span>askMaster</h2>
              
            </Link>

            <li>
              <img
                className="h-20 w-20 rounded-full mx-auto"
                src={user.photoURL}
                alt=""
              />
            </li>
            
              <>
              <li className='text-lg font-bold text-white'>
                  <NavLink to="/dashboard/manageTask"><MdOutlineManageHistory className='text-3xl text-white mr-3' />Manage Task</NavLink>
                </li>
                <li className='text-lg font-bold text-white'>
                  <NavLink to="/dashboard/addTask"><IoIosAddCircleOutline  className='text-3xl text-white mr-3'/>Add Task</NavLink>
                </li>
                
              </>
     

            <hr />

            <NavLink to="/dashboard/profile" className='flex gap-3 items-center '> 
            <CiHome  className='text-3xl text-white mt-5 ml-4' /> 
              <h2 className="text-white text-lg font-bold mt-5 ml-4">
                Home
              </h2>
              
            </NavLink>

            
            {/* <Link to="/profile" className='flex gap-3 items-center '> 
            <CgProfile className='text-3xl text-white mt-5 ml-4' /> 
              <h2 className="text-white text-lg font-bold mt-5 ml-4">
               Profile
              </h2>
              
            </Link> */}

            <Link className='flex gap-3 items-center '> 
              <button onClick={handleSignOut} className="text-white text-lg font-bold mt-5 ml-4">
                Logout 
              </button>
              <IoIosLogOut className='text-3xl text-white mr-3 mt-5' />
            </Link>
          </ul>
        </div>
      </div>
     
    </div>
  );
};

export default Dashboard;