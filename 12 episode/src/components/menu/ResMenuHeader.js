import React, { useState } from "react";
import ResMenuItems from "./ResMenuItems";

const ResMenuHeader = ({ category,showIndex,setShowIndex }) => {
  
  const handleClick=()=>{
    setShowIndex();
  }

  return (
    <div className="flex flex-col flex-wrap border-b-2 border-gray-200">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center text-black text-xl p-4 cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {category.title} ({category.itemCards?.length || 0})
        </span>
        <span>{showIndex ? "⬆️" : "⬇️"}</span>
      </div>
      {/* Accordion Content */}
      {showIndex &&(
        <div className="bg-gray-100 p-4">
          <ResMenuItems itemdata={category.itemCards} />
        </div>
      )}
    </div>
  );
};

export default ResMenuHeader;
