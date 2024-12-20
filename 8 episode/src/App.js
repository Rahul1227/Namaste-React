import React from "react";
import ReactDOM from "react-dom/client"; // Correctly import ReactDOM with 'client'
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About'
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResMenu from "./components/ResMenu";

/*
  Low level designing of the app
   1--> Header
    - logo
    - Nav Items

  2--> Body
    - Res-container
      -Res-card
    
  3--> Footer
    - CopyRight
    - Address
    -Link
    - Contact Info

    */

const AppLayout = () => (
  <>
    <Header />
    <Outlet/>
    
  </>
);

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
      path:'/about',
      element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/res/:id',
        element:<ResMenu/>
      }
  ],
    errorElement:<Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
