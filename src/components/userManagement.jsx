import React, { useState, useEffect } from 'react';
import '../styles/usermanagement.css';
import { MdPeople, MdAdminPanelSettings, MdEmail, MdPhone, MdHome } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

function UserManagement() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalAdmins, setTotalAdmins] = useState(0);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setUsers([
      {
        id: '1',
        name: 'Elisabeth idc',
        email: 'elisaidc@gmail.com',
        status: 'Active',
        creation: '10/10/2010',
        imgSrc: 'https://randomuser.me/api/portraits/women/1.jpg',
        city: 'Bejaia',
        country: 'Algeria',
        phone: '0774587431',
        about:
          'Passionate about interior design and modern furniture. Always looking for aesthetic and practical solutions to make every home more cozy ✨',
      },
      {
        id: '2',
        name: 'Sarah whatever',
        email: 'sarahw@gmail.com',
        status: 'Banned',
        creation: '11/11/2011',
        imgSrc: 'https://randomuser.me/api/portraits/women/2.jpg',
        city: 'Algiers',
        country: 'Algeria',
        phone: '0771234567',
        about: 'Loves minimalist design and creative spaces.',
      },
      {
        id: '3',
        name: 'David noidea',
        email: 'davidni@gmail.com',
        status: 'Active',
        creation: '12/12/2012',
        imgSrc: 'https://randomuser.me/api/portraits/men/3.jpg',
        city: 'Oran',
        country: 'Algeria',
        phone: '0777654321',
        about: 'Enthusiast of vintage furniture and sustainable living.',
      },
    ]);
  }, []);

  useEffect(() => {
    setTotalUsers(280);
    setTotalAdmins(2);
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const toggleUserStatus = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        const newStatus = user.status === 'Active' ? 'Banned' : 'Active';
        return { ...user, status: newStatus };
      }
      return user;
    });

    setUsers(updatedUsers);

    const updatedSelectedUser = updatedUsers.find((u) => u.id === userId);
    setSelectedUser(updatedSelectedUser);
  };

  return (
    <div>
      <h4 className="user-title">Users</h4>
      <div className="user-summary-cards">
        <SummaryCard icon={<MdPeople size={40} color="#6a948a" />} count={totalUsers} label="Total users" />
        <SummaryCard icon={<MdAdminPanelSettings size={40} color="#6a948a" />} count={totalAdmins} label="Total admins" />
      </div>

      <table className="user-table">
        <thead>
          <tr className="headers">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user.id} onClick={() => handleUserClick(user)} className="clickable-row">
              <td>{idx + 1}</td>
              <td>
                <div className="user-info">
                  {/* <img src={user.imgSrc} className='profile-avatar'></img> */}
                  <span>{user.name}</span>
                </div>
              </td>
              <td>{user.email}</td>
              <td>
                {user.status === 'Active' ? (
                  <span className="status-active">Active</span>
                ) : (
                  <span className="status-banned">Banned</span>
                )}
              </td>
              <td>{user.creation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <AnimatePresence>
        {selectedUser && (
          <UserProfilePanel
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
            onToggleStatus={toggleUserStatus}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

const UserProfilePanel = ({ user, onClose, onToggleStatus }) => {
  return (
    <motion.div
      className="profile-panel"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.4 }}
    >
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>
      <img className="panel-avatar" src={user.imgSrc} alt={user.name} />
      <h2>{user.name}</h2>
      <p>
        <MdEmail /> {user.email}
      </p>
      <p>
        <MdPhone /> {user.phone}
      </p>
      <p>
        <MdHome /> {user.city}, {user.country}
      </p>
      <p className="about">{user.about}</p>
      <div className="btn">
        {user.status === 'Active' ? (
          <button className="ban" onClick={() => onToggleStatus(user.id)}>
            Ban
          </button>
        ) : (
          <button className="unban" onClick={() => onToggleStatus(user.id)}>
            Unban
          </button>
        )}
      </div>
    </motion.div>
  );
};

const SummaryCard = ({ icon, count, label }) => (
  <div className="summary-card">
    {icon}
    <div>
      <h3>{count}</h3>
      <p>{label}</p>
    </div>
  </div>
);

export default UserManagement;
