import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Jobs from './Components/Jobs';
import Applied from './Applied';
import Statistics from './Statistics';
import Blogs from './Blogs';
import HomePage from './Components/HomePage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
     { path: "/",
      element: <HomePage></HomePage>
    },
      {
        path: "/jobs",
    element: <Jobs></Jobs>
      },
      {
        path:"/applied",
    element: <Applied></Applied>
      },
      {
        path:"/statistics",
    element: <Statistics></Statistics>
      },
      {
        path:"/blogs",
    element: <Blogs></Blogs>
      }
   
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
