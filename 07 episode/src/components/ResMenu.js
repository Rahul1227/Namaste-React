import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import "./ResMenu.css";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const params=useParams();
  console.log('the res ID is',params)

  const fetchMenu = async () => {
    try {
      const res = await fetch(MENU_API + params.id);
      const data = await res.json();
      console.log(data);
      setResInfo(data);
    } catch (error) {
      console.error("Error fetching the menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, id } = resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards, title } =
    resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]
      ?.card?.card;
  console.log("printing the array", itemCards);

  return (
    <div className="resmenu-container">
      <h2 className="resmenu-title">Menu</h2>
      <h3 className="resmenu-subtitle">{name}</h3>
      <p className="resmenu-cuisines">{cuisines.join(", ")}</p>
      <h2 className="resmenu-section-title">Items available</h2>
      <h5 className="resmenu-section-title">{title}</h5>
      <ul className="resmenu-items">
        {itemCards.map((item) => (
          <li key={id} className="resmenu-item">
            <img
              src={CDN_URL + item.card?.info?.imageId}
              alt={item.card?.info?.name}
            />
            <div className="resmenu-item-details">
              <h4>{item.card?.info?.name}</h4>
              <p>
                {item.card?.info?.description || "No description available"}
              </p>
            </div>
            <div className="resmenu-item-price">
              ₹{item.card?.info?.price / 100 ||item.card?.info?.defaultPrice/100 }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
