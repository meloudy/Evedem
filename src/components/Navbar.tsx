import React from "react";
import "../styles/Navbar.css";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";

function Navbar() {
  return (
    <div className="navbar ">
      <div className="navbar-left">
        <a href='#' className="logo text-decoration-none">Evedem</a>
       
        
      </div>
      <ul className="nav-links d-flex justify-content-center links ">
          <li><a href="#" className="sell text-decoration-none">Sell</a></li>
          <li><a href="#" className="products  text-decoration-none">Products</a></li>
          <li><a href="#" className="contact  text-decoration-none">Contact us</a></li>
          <button className="login-btn">Login</button>
        </ul>
      <div className="navbar-right">
        
        <div className="icons">
          <FaSearch />
          
          <FaShoppingCart />
          <MdNotifications size={21} />
          <FaUser />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
