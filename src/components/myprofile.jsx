import React, { useEffect, useState } from 'react';
import '../styles/MyProfile.css';
import { MdSettings, MdEmail, MdPhone, MdHome } from 'react-icons/md';
import Picture from '../assets/profilepic.png';
import '../images.d.ts';
import { motion } from 'framer-motion';
import FetchInfo from '../api/user/fetchinfo.js'
import { Navigate } from 'react-router-dom';
import Logout from '../api/user/logout.js'


function myprofile() {
  useEffect(() => {
    const fetchinformation = async () => {
      const [data, error] = await FetchInfo(null)

      if (typeof error !== "undefined" || data.length <= 0) {
        Logout()
        localStorage.clear()
        console.error(error)
        return <Navigate to="/" />
      }
      let user
      console.log(data.users)
      for(const key in data.users) {
        user = data.users[key];
        break;
      }
      
      if (user.found == false) {
        Logout()
        localStorage.clear()
        console.error(error)
        return <Navigate to="/" />

      }

      setName(user.name)
      setCountry("Algeria")
      setCity(user.city + ',' + user.municipality + ' ( ' + user.postalCode + " )")
      setEmail(user.email)
      
    }

    fetchinformation()
  }, [])

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [abtme, setAbtMe] = useState('');

  return (
    <div className='panel'>
      <div className="banner"></div>

      <div className='btn-img'>
        <img className="profile-avatar" src={Picture} alt="user" />
        <p className='name'>{name}</p>
        <button className='edit'>
          <MdSettings className='icon' />
          Manage Account
        </button>
      </div><div className='info-sections'>
        {[
          {
            title: 'Personal Information',
            content: (
              <>
                <p className='title'><MdEmail className='icon' /> {email}</p>
                <p className='title'><MdPhone className='icon' /> {phone}</p>
                <p className='title'><MdHome className='icon' /> {city}, {country}</p>
              </>
            )
          },
          {
            title: 'About Me',
            content: (
              <p>{abtme}
              </p>
            )
          },
          {
            title: 'Delivery Preferences',
            content: (
              <>
                <p>Preferred delivery time: <strong>Afternoons (12:00 - 16:00)</strong></p>
                <p>Default address: <strong>32, Rue de l’Indépendance, Bejaia</strong></p>
              </>
            )
          }
        ].map((section, index) => (
          <motion.div
            className='info-box'
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <h3>{section.title}</h3>
            {section.content}
          </motion.div>
        ))}
      </div>

    </div>
  );
}

export default myprofile;
