import Rescard from "./ResCard";
import { useState, useEffect } from "react";
import {MY_api, SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList]=useState([]);
  const [heading, setHeading] = useState("Nearby Restaurants");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(MY_api);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      // Using setTimeout is get real api like feel

      setTimeout(() => {
        setList(data.cards); // Properly set the list after a delay
        setOriginalList(data.cards);
      }, 400);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  if (list.length === 0) {
    return <Shimmer />;
  }

  const handleClick=()=>{
    const searchlist = originalList.filter((res) =>{
      return res.card.card.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase())
  });
    setList(searchlist);
    
  }

  const handleKeyPress=(e)=>{
    if(e.key==='Enter'){
      handleClick();
    }
  }

  return (
    <div className="body">
      {/* This is the search functionality */}
      <div className="search">
        <input
          className="search-text"
          type="text"
          placeholder="Search for restautrant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        ></input>
        <button
          className="search-button"
          onClick={handleClick}
         
        >
          Search
        </button>
      </div>

      <div className="btn">
        <button
          className="top-rated-btn"
          onClick={() => {
            let newResData = originalList.filter(
              (res) => res.card.card.info.avgRating > 4.5
            );
            newResData = newResData.sort(
              (a, b) => b.card.card.info.avgRating - a.card.card.info.avgRating
            );
            setList(newResData);
            setHeading("Our Top Rated Restaurants");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <h2>{heading}</h2>

      <div className="res-container">
        {list.map((restInfo) => {
          return (
            <Link to={'/res/'+restInfo.card?.card?.info?.id}><Rescard key={restInfo.card?.card?.info?.id} resData={restInfo} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;





