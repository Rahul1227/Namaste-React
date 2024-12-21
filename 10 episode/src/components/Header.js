import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnText,setBtnText]=useState('Login')
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
          
          <li>Cart</li>
          <li><button className="login-btn"
            onClick={()=>{
              // if(btnText=='Login'){
              //   setBtnText('Logout')
              // }else{
              //   setBtnText('Login')
              // }

              // same as above task but with ternery operator
              btnText=='Login'? setBtnText('Logout'):setBtnText('Login')
            }}
          >{btnText}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
