import React, { useState } from "react";
import "../styles/adminNavbar.css";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function AdminNavbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setShowSearchBar(!showSearchBar);

  return (
    <>
      <div className="admin-navbar">
        <div className="navbar-left">
          {/* <Link to="/" className="logo text-decoration-none">Evedem Admin</Link> */}
        </div>

        <div className="d-lg-none d-flex align-items-center" onClick={toggleMenu} style={{ cursor: "pointer" }}>
          <FaBars size={22} color="#6D7C7C" />
        </div>

        <ul className="nav-links d-none d-lg-flex justify-content-center links">
          {/* <li><Link to="/" className="text-decoration-none">Dashboard</Link></li>
          <li><Link to="/" className="text-decoration-none">Users</Link></li>
          <li><Link to="/" className="text-decoration-none">Products</Link></li> */}
        </ul>

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
          {/* <li><Link to="/" className="text-decoration-none">Dashboard</Link></li>
          <li><Link to="/" className="text-decoration-none">Users</Link></li>
          <li><Link to="/" className="text-decoration-none">Products</Link></li> */}
        </ul>
      </div>
    </>
  );
}

export default AdminNavbar;
