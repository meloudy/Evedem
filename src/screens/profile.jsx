import React from 'react';
import {useState} from 'react';
import Navbar from '../components/navbar';
import SideMenu from '../components/SideMenu';
import MyProfile from '../components/myprofile';
import Dashboard from '../components/dashboard.jsx';
import Notifications from '../components/notifications.jsx';

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