import React, { useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Categories from "../screens/Categories";
import Home from '../screens/Home';

export default function header() {
  const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header-section d-flex pt-4">
      <div className="circle-bg position-absolute"></div>

      <div className="container position-relative">
        <nav className="d-flex justify-content-between align-items-center mb-3">
         <Link to={'/'}><h2 className="logo">Evedem</h2></Link> 

          {/* Hamburger button */}
          <div className="d-md-none" onClick={toggleMenu}>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="d-none d-md-flex gap-4 align-items-center">
            <a href="#" className="text-dark text-decoration-none">Sell</a>
            <Link to={'/categories'} className="text-dark text-decoration-none">Products</Link>
            <a href="#" className="text-dark text-decoration-none">Contact us</a>
            <button className="loginbtn px-4 rounded-pill">Login</button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu d-md-none text-center">
            <a href="#" className="d-block text-dark mb-2 text-decoration-none">Sell</a>
            <a href="#" className="d-block text-dark mb-2 text-decoration-none">Products</a>
            <a href="#" className="d-block text-dark mb-2 text-decoration-none">Contact us</a>
            <button className="loginbtn px-4 rounded-pill">Login</button>
          </div>
        )}

        <div className="row">
          <div className="col-md-6 d-flex flex-column pt-4">
            <div className="title-wrapper">
              <h1 className="text1">Every Detail</h1>
              <h1 className="text matters-position">Matters</h1>
            </div>

            <p className="mt-2 text-light small fw-regular">
              Ucnover the essentials to transform your living space into 
            </p>
            <p className='small text-light fw-light description'>a warm and inviting retreat.</p>

            <button className="btnstyle position-absolute mt-4 ml-3 px-3 py-2 rounded-pill" onClick={()=>navigate('/categories')}>Discover now</button>
          </div>

          <div className="col-md-6 text-end">
          <img src="/imghome.png" alt="sofa" className="homeimg img-fluid" style={{ maxHeight: '100%', marginTop: '-40px', marginBottom:'0' }} />
          </div>
        </div>
      </div>
    </header>
  );
}
