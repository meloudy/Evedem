import React, { useState } from 'react';
import '../styles/SideMenu.css';
import { FaUser } from "react-icons/fa";
import { MdNotifications, MdDashboard, MdDelete, MdLogout } from "react-icons/md";
import Profile from '../components/MyProfile';
import Dashboard from '../components/Dashboard';
import Notifications from '../components/Notifications';
import DeleteAccount from '../components/DeleteAccount';
import Logout from '../components/Logout';

function SideMenu() {
 
  const [activeComponent, setActiveComponent] = useState('profile');
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return <Profile />;
      case 'dashboard':
        return <Dashboard />;
      case 'notifications':
        return <Notifications />;
      case 'deleteAccount':
        return <DeleteAccount />;
      case 'logout':
        return <Logout />;
      default:
        return <Profile/>;
    }
  };

  return (
  <div className='container'>
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
  className={`btn ${activeComponent === 'deleteAccount' ? 'active' : ''}`}
  onClick={() => handleButtonClick('deleteAccount')}
>
  <MdDelete className="icon" />
  Delete Account
</button>

<button
  className={`btn ${activeComponent === 'logout' ? 'active' : ''}`}
  onClick={() => handleButtonClick('logout')}
>
  <MdLogout className="icon" />
  Log out
</button>

     </div>
      <div className="content">
        {renderComponent()}
      </div>
</div>
  );
}

export default SideMenu;
