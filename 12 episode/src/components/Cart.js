import React from "react";
import ResMenuItems from "./menu/ResMenuItems";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../store/cartSlice";

const Cart = () => {
  // Subscribing to the cart items from the store
  const cartItems = useSelector((store) => store.cart.items);

  // Dispatch for actions
  const dispatch = useDispatch();

  // Action to clear the cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Action to remove an item (this would require additional logic if specific items are to be removed)
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  // Calculate Grand Total
  const grandTotal = cartItems.reduce(
    (total, item) => total + (item?.card?.info?.price || item?.card?.info?.defaultPrice || 0),
    0
  ) / 100; // Assuming prices are in paise and converting to rupees

  // GST (18%)
  const gst = +(grandTotal * 0.18).toFixed(2);

  // Discount (10%)
  const discount = +(grandTotal * 0.1).toFixed(2);

  // Final Amount
  const finalAmount = +(grandTotal + gst - discount).toFixed(2);

  return (
    <div className="my-[120px] text-center w-6/12 mx-auto bg-white p-5">
      {/* Cart Header */}
      <h1 className="font-bold p-5 text-blue-500 text-2xl border-b-2 border-gray-200">
        Cart Items
      </h1>

      {/* Cart Items */}
      <div className="my-3 text-left">
        <ResMenuItems itemdata={cartItems} />
      </div>

      {/* Summary Section */}
      {cartItems.length===0?<>No food iteams added yet....</> :<div className="border-2 border-gray-200 pt-4 mt-4 text-left p-3">
        <h2 className="font-bold text-xl text-gray-700 mb-3">Summary</h2>
        <div className="flex justify-between">
          <p>Grand Total:</p>
          <p>₹{grandTotal}</p>
        </div>
        <div className="flex justify-between">
          <p>GST (18%):</p>
          <p>₹{gst}</p>
        </div>
        <div className="flex justify-between">
          <p>Discount (10%):</p>
          <p>-₹{discount}</p>
        </div>
        <div className="flex justify-between font-bold text-lg text-green-600 mt-3">
          <p>Final Amount:</p>
          <p>₹{finalAmount}</p>
        </div>
      </div>
}
      

      {/* Action Buttons */}
      {cartItems.length===0?<></>:<div className="flex border-t-2 border-gray-200 justify-between pt-4 mt-4">
        <button
          onClick={handleClearCart}
          className="clear-cart-bttn px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition duration-300"
        >
          Clear Cart
        </button>

        <button
          onClick={handleRemoveItem}
          className="clear-cart-bttn px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition duration-300"
        >
          Remove Item
        </button>
      </div>}
      
      
    </div>
  );
};

export default Cart;
