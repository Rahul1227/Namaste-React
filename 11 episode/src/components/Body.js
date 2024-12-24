import Rescard,{withPromotedLabel} from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOffline from "../customhooks/useOffline";
import useFetchResList from "../customhooks/useFetchResList";
import TicTacToe from "../game/TicTacToe";
import UserContext from "../context/UserContext";
import { useContext } from "react";


const Body = () => {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [heading, setHeading] = useState("Nearby Restaurants");
  const [searchText, setSearchText] = useState("");

  const data=useContext(UserContext);

  const fetchedList = useFetchResList();

  // Update the state when the data is fetched
  useEffect(() => {
    if (fetchedList.length > 0) {
      setList(fetchedList);
      setOriginalList(fetchedList);
    }
  }, [fetchedList]);

  // console.log('printing the reslist',originalList)
  const PromotedLabel=withPromotedLabel(Rescard);
  const handleClick = () => {
    const searchlist = originalList.filter((res) => {
      return res.card.card.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setList(searchlist);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const onlineStatus = useOffline();
  if (!onlineStatus) {
    return (
      <div className="offline-page">
        Opps!!! Seems like you are offline. Try reconnecting your internet
        <TicTacToe/>
       
      </div>
    );
  }

  if (list.length === 0) {
    return <Shimmer />;
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
        <button className="search-button" onClick={handleClick}>
          Search
        </button>
      </div>
       {/* creating the input field */}
      <input
         type="text"
         className="border-2 border-black"
         value={data.userName}
         onChange={(e)=>data.setUserName(e.target.value)}
      />


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
            <Link to={"/res/" + restInfo.card?.card?.info?.id}>
              {
          
              
               restInfo.card?.card?.info?.promoted?
               <PromotedLabel key={restInfo.card?.card?.info?.id} resData={restInfo}/>
                :
                <Rescard key={restInfo.card?.card?.info?.id} resData={restInfo}/>

              }
                
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
