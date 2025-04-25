import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Image from '../assets/homeimg.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Categories from "./Categories";
import Fateuil from '../assets/armchair1.png';
import Table from '../assets/table.png';
import DTable from '../assets/drsngtbl.png'
import Armchair from '../assets/armchair1.png';


function home() {
  const [currentSection, setCurrentSection] = useState(0);

  
  const handleScroll = () => {
    const scrollY = window.scrollY; 
    const sectionHeight = window.innerHeight; 
    const newSection = Math.floor(scrollY / sectionHeight); 

    
    if (newSection !== currentSection) {
      setCurrentSection(newSection);
    }
  };

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <div className="App">
      <div className={`section ${currentSection === 0 ? 'active' : ''}`} id="section1">
        <div className='half right'> 
        <nav className="home-navbar">
        <Link to="/" className="logo">Evedem</Link>
  <div className="nav-left">
   
    <Link to="/">Home</Link>
    <Link to="/categories">Products</Link>
    <Link to="/sell">Sell</Link>
  </div>
  
</nav>
       
        <div className="col-md-6 d-flex flex-column pt-4">
            <div className="title-wrapper">
              <h1 className="text1">Every Detail</h1>
              <h1 className="text matters-position">Matters</h1>
            </div>
             <p className=" description">
              Ucnover the essentials to transform your living space into a warm and inviting retreat.
            </p>

            
           
            <button className="btnstyle position-absolute mt-4 ml-3 px-3 py-2 rounded-pill">Discover now</button>
          </div>
        </div>
        <div className='half left'>
        <div className="nav-right">
           <button className="login-btn">Login</button>
        </div>
          <img src={Image} alt="sofa" className="homeimg img-fluid"/></div>
        

      </div>
      <div className={`section ${currentSection === 1 ? 'active' : ''}`} id="section2">
        <h1 className='collection-text'>Discover Evedem's collection</h1>
        <nav className="collection-navbar">
           <Link to="/">Best seller</Link>
           <Link to="/categories">Products</Link>
           <Link to="/sell">Sell</Link>
        </nav>
        <div className='best-seller'>
        <div className='best-product'>
  <img src={Armchair} className="product-img" />
  <div className="product-info-inline">
    <p className="product-description">Savannah Armchair</p>
    <p className="product-description1">999 DA</p>
  </div>
</div>

  <div className='best-product'>
  <img src={Table} className="product-img" />
  <div className="product-info-inline">
    <p className="product-description">Aurore table</p>
    <p className="product-description1">999 DA</p>
  </div>
</div>

  <div className='best-product'>
  <img src={DTable} className="product-img" />
  <div className="product-info-inline">
    <p className="product-description">Aurore Dressing table</p>
    <p className="product-description1">999 DA</p>
  </div>
</div>

</div> <button className="btnstyle1 position-absolute mt-4 ml-3 px-3 py-2 rounded-pill">View All</button>

      </div>
      <div className={`section ${currentSection === 2 ? 'active' : ''}`} id="section3">
        <h1>Section 3</h1>
      </div>
    </div>
  );
}

export default home;
