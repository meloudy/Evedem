import React, { useState } from "react";
import AdminSideMenu from '../components/adminsidemenu';
import '../styles/profile.css';
import "../styles/adminNavbar.css";
import { FaSearch, FaBars } from "react-icons/fa";

function Admin() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setShowSearchBar(!showSearchBar);

  return (
    <div className='layout'>
   
      <div className="admin-navbar">
        <div className="navbar-left">
          <span className="logo text-decoration-none">Evedem</span>
        </div>

        <div className="d-lg-none d-flex align-items-center" onClick={toggleMenu} style={{ cursor: "pointer" }}>
          <FaBars size={22} color="#6D7C7C" />
        </div>

        {/* <ul className="nav-links d-none d-lg-flex justify-content-center links">
          <li><a href="/" className="text-decoration-none">Dashboard</a></li>
          <li><a href="/" className="text-decoration-none">Users</a></li>
          <li><a href="/" className="text-decoration-none">Products</a></li>
        </ul> */}

        <div className="navbar-right d-none d-lg-flex">
          <FaSearch onClick={toggleSearch} style={{ cursor: "pointer" }} />
          <div className="admin-badge">AD</div>
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
          <li><a href="/" className="text-decoration-none">Dashboard</a></li>
          <li><a href="/" className="text-decoration-none">Users</a></li>
          <li><a href="/" className="text-decoration-none">Products</a></li>
        </ul>
      </div>

      {/* Contenu principal */}
      <div className='main'>
        <AdminSideMenu />
      </div>
    </div>
  );
}

export default Admin;
