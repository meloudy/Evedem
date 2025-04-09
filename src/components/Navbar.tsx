import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <a href="../src/screens/Home" className="logo text-decoration-none">Evedem</a>
        </div>

        
        <div className="d-lg-none d-flex align-items-center" onClick={toggleMenu} style={{ cursor: "pointer" }}>
          <FaBars size={22} color="#6D7C7C" />
        </div>

      
        <ul className="nav-links d-none d-lg-flex justify-content-center links">
          <li><a href="#" className="sell text-decoration-none">Sell</a></li>
          <li><a href="#" className="products text-decoration-none">Products</a></li>
          <li><a href="#" className="contact text-decoration-none">Contact us</a></li>
          <button className="login-btn">Login</button>
        </ul>

        <div className="navbar-right d-none d-lg-flex">
          <div className="icons">
            <FaSearch />
            <FaShoppingCart />
            <MdNotifications size={21} />
            <FaUser />
          </div>
        </div>
      </div>

     
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>×</div>
        <ul className="mobile-links">
          <li><a href="#" className="sell text-decoration-none">Sell</a></li>
          <li><a href="#" className="products text-decoration-none">Products</a></li>
          <li><a href="#" className="contact text-decoration-none">Contact us</a></li>
          <button className="login-btn">Login</button>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
