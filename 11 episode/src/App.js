import React, { lazy, Suspense,useState } from "react";
import ReactDOM from "react-dom/client"; // Correctly import ReactDOM with 'client'
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResMenu from "./components/menu/ResMenu";
import UserContext from "./context/UserContext";

// import About from './components/About'

// using the lazy loading technique to import the about page

const About=lazy(()=>import('./components/About'));




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

    const AppLayout = () => {
      const [userName, setUserName] = useState("Rahul Ya"); // Moved inside the component
    
      return (
        <UserContext.Provider value={{ userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      );
    };    
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
      element:<Suspense fallback={<h1 style={{marginTop:'150px'}}>Loading........</h1>}>
                <About/>
              </Suspense>   
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
