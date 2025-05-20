import React, { useState, useEffect, useRef } from 'react';
import '../styles/SideMenu.css';
import { FaUser } from "react-icons/fa";
import { MdNotifications, MdDashboard, MdLogout } from "react-icons/md";
import Profile from './myprofile';
import Dashboard from './dashboard';
import Notifications from './notifications';
import Logout from '../api/user/logout'
import { Navigate } from 'react-router-dom';

function SideMenu() {
  const [showLogout, setShowLogout] = useState(false);
  const [activeComponent, setActiveComponent] = useState('profile');
  const logoutRef = useRef(null);


  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const onClose = () => {
    setShowLogout(false);
  };
  const onLogout = () => {
    Logout()
    localStorage.clear()
    location.assign("/")
  }

  if (localStorage.getItem("$authkey") == null) {
    localStorage.clear()
    return <Navigate to="/login" />
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (logoutRef.current && !logoutRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (showLogout) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLogout]);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return <Profile />;
      case 'dashboard':
        return <Dashboard />;
      case 'notifications':
        return <Notifications />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className='cont'>
      <div className="sidemenu">
        <button
          className={`btn ${activeComponent === 'profile' ? 'active' : ''}`}
          onClick={() => handleButtonClick('profile')}
        >
          <FaUser className="icon" />
          My Profile
        </button>

        <button
          className={`btn ${activeComponent === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleButtonClick('dashboard')}
        >
          <MdDashboard className="icon" />
          Dashboard
        </button>

        <button
          className={`btn ${activeComponent === 'notifications' ? 'active' : ''}`}
          onClick={() => handleButtonClick('notifications')}
        >
          <MdNotifications className="icon" />
          Notifications
        </button>

        <button
          className='btn'
          onClick={() => setShowLogout(!showLogout)}
        >
          <MdLogout className="icon" />
          Log out
        </button>
      </div>

      <div className="content">
        {renderComponent()}
      </div>

      {showLogout && (
        <div className='logout-panel' ref={logoutRef}>
          <p className='logout-text'>Are you sure you want to log out?</p>
          <div className='btns'>
            <button onClick={onClose}>Cancel</button>
            <button onClick={onLogout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideMenu;
