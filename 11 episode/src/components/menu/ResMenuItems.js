import React from "react";
import { CDN_URL } from "../../utils/constants";

const ResMenuItems = ({ itemdata }) => {
  return (
    <div className="flex flex-col gap-3">
      {itemdata.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-3 border rounded-lg bg-white shadow-sm"
        >
          {/* Item Info */}
          <div className="flex-1">
            <h4 className="font-bold text-lg">{item?.card?.info?.name}</h4>
            <p className="text-gray-600 text-sm">{item?.card?.info?.description}</p>
            <p className="text-green-600 font-semibold">
              ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
            </p>
          </div>

          {/* Item Image */}
          <div className="w-[100px] h-[100px] flex-shrink-0">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item?.info?.name}
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResMenuItems;
