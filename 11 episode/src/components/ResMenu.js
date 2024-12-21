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
      <ul className="flex flex-wrap border-2 gap-5 m-4">
        {itemCards.map((item) => (
          <li key={id} className="w-[270px] h-auto border-2 p-4 m-3
           shadow-lg bg-slate-100 rounded-xl
            hover:-translate-y-1 hover:scale-110">
            <img
              className="w-auto h-auto bg-cover rounded-lg"
              src={CDN_URL + item.card?.info?.imageId}
              alt={item.card?.info?.name}
            />
            <div className="resmenu-item-details">
              <h4 className="font-bold pt-2">{item.card?.info?.name}</h4>
              <p>
                {item.card?.info?.description || "No description available"}
              </p>
            </div>
            <div className="text-blue-800 font-bold text-lg pt-4">
              ₹{item.card?.info?.price / 100 ||item.card?.info?.defaultPrice/100 }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
