import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import {useSelector} from 'react-redux';

const Header = () => {
  const [btnText, setBtnText] = useState('Login');

  const cartItems=useSelector((store)=>store.cart.items)
  console.log('the cart items are',cartItems)

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo"></img>
        <div className="company-name">
          <Link to='/'>
            Food Panda
          </Link>
        </div>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/cart'>
            <div className="relative">
              <div className="cart-count absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </div>
              <div className="cart-icon w-10 h-10 flex items-center justify-center text-2xl">
                <LuShoppingCart />
              </div>
            </div>
            </Link>
          </li>
          <li>
            <button className="login-btn"
              onClick={() => {
                btnText === 'Login' ? setBtnText('Logout') : setBtnText('Login');
              }}
            >
              {btnText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
