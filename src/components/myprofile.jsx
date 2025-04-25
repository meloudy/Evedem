import React from 'react';
import '../styles/MyProfile.css';
import { MdSettings, MdEmail, MdPhone, MdHome } from 'react-icons/md';
import Picture from '../assets/profilepic.png';
import '../images';
import { motion } from 'framer-motion';;


function myprofile() {
  const name = 'Elizabeth Covey';
  const city = 'Bejaia';
  const country = 'Algeria';
  const email = 'lizecovey@gmail.com';
  const phone = '0774587431';
  const abtme =' Passionate about interior design and modern furniture. Always looking for aesthetic and practical solutions to make every home more cozy ✨'

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
