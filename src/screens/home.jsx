import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import Image from '../assets/homeimg.png';
import { Link, useNavigate } from 'react-router-dom';
import Categories from "./categories";
import Fateuil from '../assets/armchair1.png';
import Table from '../assets/table.png';
import DTable from '../assets/drsngtbl.png'
import Armchair from '../assets/armchair1.png';
import '../images.d.ts';


function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(localStorage.getItem("$authkey") != null);
  const goto = isLogged ? "Profile" : "Login";

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
              <Link to={"/" + goto.toLowerCase()} >{goto}</Link>
            </div>
            <div className="nav-right">
              
            </div>
          </nav>
          <div className="col-md-6 d-flex flex-column pt-4">
            <div className="title-wrapper">
              <h1 className="text1">Every Detail</h1>
              <h1 className="text matters-position">Matters</h1>
            </div>
            <p className=" description">
              Uncover the essentials to transform your living space into a warm and inviting retreat.
            </p>
            <button className="btnstyle position-absolute mt-4 ml-3 px-3 py-2 rounded-pill" onClick={() => navigate('/categories')}>Discover now</button>
          </div>
        </div>
        <div className='half left'>
          <img src={Image} alt="sofa" className="homeimg img-fluid" />
        </div>
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
            <img src={Armchair} className="product-img" alt="Armchair" />
            <div className="product-info-inline">
              <p className="product-description">Savannah Armchair</p>
              <p className="product-description1">999 DA</p>
            </div>
          </div>
          <div className='best-product'>
            <img src={Table} className="product-img" alt="Table" />
            <div className="product-info-inline">
              <p className="product-description">Aurore table</p>
              <p className="product-description1">999 DA</p>
            </div>
          </div>
          <div className='best-product'>
            <img src={DTable} className="product-img" alt="Dressing Table" />
            <div className="product-info-inline">
              <p className="product-description">Aurore Dressing table</p>
              <p className="product-description1">999 DA</p>
            </div>
          </div>
        </div>
        <button className="btnstyle1 position-absolute mt-4 ml-3 px-3 py-2 rounded-pill" onClick={() => navigate('/categories')}>View All</button>
      </div>

      <div className={`section ${currentSection === 2 ? 'active' : ''}`} id="section3">
        <div className="about-block">
          <h2 className="about-title">About Evedem</h2>
          <p className="about-text">
            Evedem is your destination for stylish, functional and affordable home furniture.
            We blend simplicity and elegance to help you create warm and inviting spaces.
          </p>
          <div className="about-features">
            <div className="feature-card">
              <h4>✨ Elegant Design</h4>
              <p>Minimalist and modern pieces to elevate your home.</p>
            </div>
            <div className="feature-card">
              <h4>🛋️ Comfort First</h4>
              <p>We prioritize comfort without compromising on style.</p>
            </div>
            <div className="feature-card">
              <h4>🤝 Customer Care</h4>
              <p>We’re here to support you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="logo">Evedem</h3>
            <p className="tagline">Every Detail Matters</p>
            <p><strong>Address :</strong> 13 Management 718 Thompson Lane Suite 108256. Nashville, États-Unis</p>
            <p><strong>Phone :</strong> (916) 456-089</p>
            <p><strong>Email :</strong> evedem@gmail.com</p>
          </div>
          <div className="footer-hours">
            <h4>Opening hours</h4>
            <div className='footer-texts'>
              <p>mon - fri : 7:00AM - 8:00PM</p>
              <p>saturday : 7:00AM - 3:30PM</p>
              <p>sunday : 7:00AM - 3:00PM</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Evedem</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
