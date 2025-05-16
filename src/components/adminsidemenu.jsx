import React, { useState, useEffect, useRef } from 'react'; 
import '../styles/SideMenu.css';
import { MdNotifications, MdDashboard, MdLogout, MdShoppingCart, MdPeople } from "react-icons/md";
import Dashboard from './admindashboard';
import Notifications from './notifications';
import OrderManagement from './orderManagement';
import UserManagement from './userManagement';

function Adminsidemenu() {
  const [showLogout, setShowLogout] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const logoutRef = useRef(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const onClose = () => {
    setShowLogout(false);
  };

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
      case 'dashboard':
        return <Dashboard />;
      case 'notifications':
        return <Notifications />;
      case 'orders':
        return <OrderManagement />;
      case 'users':
        return <UserManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className='cont'>
      <div className="sidemenu">

        <button
          className={`btn ${activeComponent === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleButtonClick('dashboard')}
        >
          <MdDashboard className="icon" />
          Dashboard
        </button>

        <button
          className={`btn ${activeComponent === 'orders' ? 'active' : ''}`}
          onClick={() => handleButtonClick('orders')}
        >
          <MdShoppingCart className="icon" />
          Order Management
        </button>

        <button
          className={`btn ${activeComponent === 'users' ? 'active' : ''}`}
          onClick={() => handleButtonClick('users')}
        >
          <MdPeople className="icon" />
          User Management
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
            <button>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Adminsidemenu;
