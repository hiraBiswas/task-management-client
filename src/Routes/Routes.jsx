import {
  createBrowserRouter,
} from "react-router-dom";
import React from 'react';
import Main from '../Layout/Main'
import ErrorPage from '../Pages/Home/ErrorPage/ErrorPage'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import PrivateRoute from '../Routes/PrivateRoute'
import Dashboard from '../Layout/Dashboard'
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import ManageTask from "../Pages/Dashboard/ManageTask/ManageTask";
import Process from "../Pages/Process/Process";
import Guideline from "../Pages/GuideLine/Guideline";
import User from "../Pages/Home/User/User";
import Profile from "../Pages/Profile/Profile";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      }, 

      {
        path: '/process',
        element: <Process></Process>
    },

    {
      path: '/guideline',
      element: <Guideline></Guideline>
  },

  {
    path: '/users',
    element: <User></User>
},
     
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [

      {
        // This will match /dashboard
        index: true,
        element:<ManageTask></ManageTask>
      },

      {
        // This will match /dashboard
       path: 'manageTask',
        element:<ManageTask></ManageTask>
      },
    
      {
        path: 'addTask',
        element: <AddTask></AddTask>
      },

      {
        path: 'profile',
        element: <Profile></Profile>
      },
     
    ]
  }
]);