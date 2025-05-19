import React, { useState } from 'react';
import '../styles/ManageAcount.css';
import { MdEmail, MdPhone, MdHome, MdPerson, MdInfo } from 'react-icons/md';
import NavBar from '../components/navbar'

function ManageAccount() {
  const [formData, setFormData] = useState({
    name: 'Elizabeth Covey',
    email: 'lizecovey@gmail.com',
    phone: '0774587431',
    city: 'Bejaia',
    country: 'Algeria',
    about: 'Passionate about interior design and modern furniture. Always looking for aesthetic and practical solutions to make every home more cozy ✨'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved data:', formData);
    alert('Changes saved successfully!');
  };

  return (
    <div className="manage-container">
      <NavBar></NavBar>
      
      <form className="manage-form" onSubmit={handleSubmit}>
        <label>
          <MdPerson className="icon" /> Full Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label>
          <MdEmail className="icon" /> Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label>
          <MdPhone className="icon" /> Phone
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>

        <label>
          <MdHome className="icon" /> City
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </label>

        <label>
          <MdHome className="icon" /> Country
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </label>

        <label>
          <MdInfo className="icon" /> About Me
          <textarea name="about" rows="4" value={formData.about} onChange={handleChange}></textarea>
        </label>

        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
}

export default ManageAccount;
