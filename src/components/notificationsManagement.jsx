import React, { useState, useEffect } from 'react';
import '../styles/notificationsManagement.css';
import { MdReport, MdAccessTime } from 'react-icons/md';

function NotificationManagement() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications([
      {
        id: '1',
        user: 'Sarah Whatever',
        postId: 'Post123',
        date: '2025-05-16',
        time: '10:30 AM',
      },
      {
        id: '2',
        user: 'David Noidea',
        postId: 'Post456',
        date: '2025-05-15',
        time: '08:45 PM',
      },
    ]);
  }, []);

  return (
    <div>
      <h4 className="notif-title">Notifications</h4>

      <div className="notif-container">
        {notifications.map((notif) => (
          <div className="notif-card" key={notif.id}>
            <MdReport className="notif-icon" />
            <div className="notif-content">
              <p className="notif-text">
                <strong>{notif.user}</strong> reported a post <span className="post-id">({notif.postId})</span>
              </p>
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

export default NotificationManagement;
