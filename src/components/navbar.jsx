import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { Link, Navigate, useNavigate } from 'react-router-dom';

function navbar() {
  const navigate = useNavigate();
  const [isLogged, _] = useState(localStorage.getItem("$authkey") != null);
  const goto = isLogged ? "profile" : "login"
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setShowSearchBar(!showSearchBar);
  };


  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo text-decoration-none">Evedem</Link>
        </div>

        <div className="d-lg-none d-flex align-items-center" onClick={toggleMenu} style={{ cursor: "pointer" }}>
          <FaBars size={22} color="#6D7C7C" />
        </div>

        <ul className="nav-links d-none d-lg-flex justify-content-center links">
          <li><a href="/sell" className="sell text-decoration-none">Sell</a></li>
          <li><Link to="/categories" className="products text-decoration-none">Products</Link></li>
          <li><a href="#" className="contact text-decoration-none pr-1">Contact us</a></li>
          
        </ul>

        <div className="navbar-right d-none d-lg-flex">
          <div className="icons">
            <FaSearch onClick={toggleSearch} style={{ cursor: "pointer" }} />
            <FaShoppingCart onClick={() => navigate('/mycart')} />
            <FaUser onClick={() => navigate("/" + goto)} />
          </div>
        </div>
      </div>

      {showSearchBar && (
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            autoFocus
          />
        </div>
      )}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>×</div>
        <ul className="mobile-links">
          <li><a href="#" className="sell text-decoration-none">Sell</a></li>
          <li><Link to="/categories" className="products text-decoration-none">Products</Link></li>
          <li><a href="#" className="contact text-decoration-none">Contact us</a></li>
          <button className="login-btn" onClick={ () => {Navigate("/" + goto)}}>{goto}</button>
        </ul>
      </div>
    </>
  );
}

export default navbar;
