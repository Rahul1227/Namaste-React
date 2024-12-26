import React, { useState } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../../customhooks/useResMenu";
import ResMenuHeader from "./ResMenuHeader";

const ResMenu = () => {
  const param = useParams();
  const resInfo = useResMenu(param.id);

  // for controlling the child component state
  const[showIndex, setShowIndex]=useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, id } = resInfo?.data?.cards[2]?.card?.card?.info;

  const allCards = resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // Step 1: Filter categories
  const filteredCategories = allCards.filter(
    (res) =>
      res?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // Step 2: Map filtered categories to a simpler structure
  const categories = filteredCategories.map((category) => ({
    title: category?.card?.card?.title,
    itemCards: category?.card?.card?.itemCards,
  }));

  return (
    <div className="bg-white w-6/12 mt-[120px] mx-auto flex flex-col gap-3">
      <div>
        <h2 className="text-blue-500 text-center">{name}</h2>
        <h3 className="text-center font-bold">{cuisines.join(", ")}</h3>
        <h3 className="text-blue-500 font-bold m-5 text-xl">Menu</h3>
      </div>
      {/* controlled component */}
      {categories.map((category, index) => (
        <ResMenuHeader key={index} category={category}
          showIndex={index==showIndex}
          setShowIndex={()=>setShowIndex(index==showIndex ? null:index)}  
        />
      ))}
    </div>
  );
};

export default ResMenu;
