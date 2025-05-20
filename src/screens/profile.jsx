import React from 'react';
import Navbar from '../components/navbar';
import SideMenu from '../components/sidemenu';

import '../styles/Profile.css'

function profile() {
  return (
    <div className="layout">
      <Navbar />
      <div className="main">
        <SideMenu />
      </div>
    </div>
  );
}

 

export default profile;
