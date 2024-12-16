import Rescard from "./ResCard";
import resData from "../utils/data";
import Search from "./Search";
import { useState } from "react";

const Body = () => {
  const [list, setList] = useState(resData);
  const [heading, setHeading]=useState('Nearby Restaurants');
  return (
    <div className="body">
      <Search />
      <div className="btn">
        <button
          className="top-rated-btn"
          onClick={() => {
            let newResData = resData.filter(
              (res) => res.card.card.info.avgRating > 4.5
            );
            newResData=newResData .sort((a, b) => b.card.card.info.avgRating - a.card.card.info.avgRating);
            setList(newResData);
            setHeading('Our Top Rated Restaurants');
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <h2>{heading}</h2>

      <div className="res-container">
        {list.map((restInfo) => {
          return (
            <Rescard key={restInfo.card?.card?.info?.id} resData={restInfo} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
