import React from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";
import { SiTask } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Dashboard = () => {

  const { user, logOut } = useContext(AuthContext);
console.log(user)
  const handleSignOut = () => {
    logOut()
      .then(result => {
        console.log(result.user);
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
              <img
                className="h-24 w-24 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </Link>
            
              <>
              <li>
                  <NavLink to="/dashboard/manageTask"><SiTask />Manage Task</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addTask">Add Task</NavLink>
                </li>
                
              </>
     

            <hr />

            <Link>
              <button onClick={handleSignOut} className="text-black mt-5 ml-4">
                Logout
              </button>
            </Link>
          </ul>
        </div>
      </div>
     
    </div>
  );
};

export default Dashboard;