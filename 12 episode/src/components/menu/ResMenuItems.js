import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";


const ResMenuItems = ({ itemdata }) => {

  const dispatch=useDispatch();
  const handleClick=(item)=>{
    dispatch(addItem(item));
  }
  return (
    <div className="flex flex-col gap-3">
      {itemdata.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-3 border rounded-lg bg-white shadow-sm"
        >
          {/* Item Info */}
          <div className="flex-1 pr-4">
            <h4 className="font-bold text-lg">{item?.card?.info?.name}</h4>
            <p className="text-gray-600 text-sm">
              {item?.card?.info?.description}
            </p>
            <p className="text-green-600 font-semibold">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </p>
          </div>

          {/* Item Image with Add Button */}
          <div className="relative w-[100px] h-[100px] flex-shrink-0">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item?.info?.name}
              className="w-full h-full object-cover rounded"
            />
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-500
               text-white font-semibold text-sm rounded shadow hover:bg-blue-700 transition duration-300"
              onClick={() =>handleClick(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResMenuItems;
