import React, { useState, useEffect } from 'react';
import '../styles/notificationsManagement.css';
import {
  MdCheckCircle,
  MdLocalShipping,
  MdShoppingCart,
  MdBlock,
  MdVerifiedUser,
  MdAccessTime
} from 'react-icons/md';

function UserNotifications() {
  const [userNotifs, setUserNotifs] = useState([]);

  useEffect(() => {
    setUserNotifs([
      {
        id: 'n1',
        type: 'payment',
        message: 'Your payment was successfully processed.',
        date: '2025-05-18',
        time: '11:00 AM',
      },
      {
        id: 'n2',
        type: 'shipped',
        message: 'Your order has been shipped.',
        date: '2025-05-17',
        time: '04:15 PM',
      },
      {
        id: 'n3',
        type: 'ordered',
        message: 'A client has ordered your product.',
        date: '2025-05-17',
        time: '09:20 AM',
      },
      {
        id: 'n4',
        type: 'banned',
        message: 'Your account has been banned.',
        date: '2025-05-16',
        time: '03:00 PM',
      },
      {
        id: 'n5',
        type: 'unbanned',
        message: 'Your account has been reinstated.',
        date: '2025-05-16',
        time: '06:45 PM',
      },
    ]);
  }, []);

 
  const getIcon = (type) => {
    switch (type) {
      case 'payment':
        return <MdCheckCircle className="notif-icon success" />;
      case 'shipped':
        return <MdLocalShipping className="notif-icon info" />;
      case 'ordered':
        return <MdShoppingCart className="notif-icon info" />;
      case 'banned':
        return <MdBlock className="notif-icon danger" />;
      case 'unbanned':
        return <MdVerifiedUser className="notif-icon success" />;
      default:
        return <MdCheckCircle className="notif-icon" />;
    }
  };

  return (
    <div>
      <h4 className="notif-title">Notifications</h4>
      <div className="notif-container">
        {userNotifs.map((notif) => (
          <div className="notif-card" key={notif.id}>
            {getIcon(notif.type)}
            <div className="notif-content">
              <p className="notif-text">{notif.message}</p>
              <p className="notif-date">
                <MdAccessTime className="time-icon" />
                {notif.date} at {notif.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserNotifications;
