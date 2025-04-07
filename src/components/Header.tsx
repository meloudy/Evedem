import React from 'react';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header-section  d-flex pt-4">
      <div className="circle-bg position-absolute"></div>

      <div className="container position-relative">
        <nav className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="logo">Evedem</h2>
          <div className="d-flex gap-4 align-items-center">
            <a href="#" className="text-dark text-decoration-none">Sell</a>
            <a href="#" className="text-dark text-decoration-none">Products</a>
            <a href="#" className="text-dark text-decoration-none">Contact us</a>
            <button className="loginbtn px-4 rounded-pill">Login</button>
          </div>
        </nav>

        <div className="row">
          <div className="col-md-6 d-flex flex-column pt-4">
            <div className="title-wrapper">
              <h1 className="text1">Every Detail</h1>
              <h1 className="text matters-position">Matters</h1>
            </div>

            <p className="mt-2 text-light small fw-regular">
              Ucnover the essentials to transform your living space into 
            </p>
            <p className='small text-light fw-regular'>a warm and inviting retreat.</p>

            <button className="btnstyle position-absolute mt-4 ml-3 px-3 py-2 rounded-pill">Discover now</button>
          </div>

       
          <div className="col-md-6 text-end">
            <img src="/imghome.png" alt="sofa" className="img-fluid pb-5" style={{ maxHeight: '90%' }} />
          </div>
        </div>
      </div>
    </header>
  );
}
