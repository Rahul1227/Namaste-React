import React from "react";
import ReactDOM from 'react-dom/client'; // Correctly import ReactDOM with 'client'
import resData from "./data";

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



  const Header=()=>{
    return(
      <div className="header">
        <div className="logo">
          <img src='https://th.bing.com/th/id/OIP.LaDpX3rqXRR7kKOG24zPbAHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='Logo'></img>
        </div>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>

        </div>

      


      </div>



    )
  }

  const Search=()=>{
    return(
      <div className="search">
        <input className="search-text" type="text" placeholder="Search for restautrant"></input>
        <button className="search-button">Search</button>

      </div>
    )
  }

  const Rescard=(props)=>{
    const {resData}=props;
    const {
      cloudinaryImageId,
      name,
      locality,
      cuisines,
      avgRating


    }=resData?.card?.card?.info;
    return(
      <div className="res-card">
        <div className="res-img">
          {/* <img src='https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1700465627/5c94a80a866bed890682dbf37726e82c.jpg' alt='reslogo'/> */}
          <img
            src={`https://dineout-media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
            alt='Res -Img'
          
          />

        </div>
        <div className="res-card-content">
          
          <h3>{name || "Restaurant Name Not Available"}</h3> 
          <h4>{locality|| "Near By location"} </h4>
          <h5>{cuisines.join(', ')|| "N/A"}</h5>
          <h5>Rating: {avgRating|| "Good Rating"}</h5>
        </div>

      </div>
    )
  }
  


  const Body=()=>{
    return (
      <div className="body">
        <Search/>
        <h2>Our top restautrant</h2>


        <div className="res-container">
          {
            resData.map((restInfo)=>{
              return <Rescard key={restInfo.card?.card?.info?.id} resData={restInfo}/>

            })
          }
          
          
        </div>

      </div>
    )

  }

  


  const AppLayout=()=>(
    <>
    <Header/>
    <Body/>
    /</>

  )


  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(<AppLayout/>);
