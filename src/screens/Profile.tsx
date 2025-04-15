import React from 'react';
import {useState} from 'react';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import MyProfile from '../components/MyProfile';
import Dashboard from '../components/Dashboard';
import Notifications from '../components/Notifications';
import DeleteAccount from '../components/DeleteAccount';
import Logout from '../components/Logout';
import '../styles/Profile.css'

function Profile() {
  return (
    <div className="layout">
      <Navbar />
      <div className="main">
        <SideMenu />
      </div>
    </div>
  );
}

 

export default Profile;