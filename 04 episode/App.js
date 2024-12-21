import React from "react";
import ReactDOM from 'react-dom/client'; // Correctly import ReactDOM with 'client'
import resData from "./data";
import H


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



  
  const Search=()=>{
    return(
      <div className="search">
        <input className="search-text" type="text" placeholder="Search for restautrant"></input>
        <button className="search-button">Search</button>

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
