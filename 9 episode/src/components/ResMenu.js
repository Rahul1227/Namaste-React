import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import "./ResMenu.css";
import { useParams } from "react-router-dom";
import useResMenu from "../customhooks/useResMenu";

const ResMenu = () => {
  const param=useParams();
  const resInfo=useResMenu(param.id)

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
