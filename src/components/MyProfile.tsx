import React from 'react';
import '../styles/MyProfile.css'
function MyProfile() {
  const firstName = 'Userone';
  const lastName= 'one';
  const city ='Bejaia';
  const country='Algeria'

  return <div className='panel'>
    <div className="panel1">
    <img className="profile-avatar" src="https://i.pravatar.cc/30?img=2" alt="user" />
    <div className='infos'>
       <p className='name'>{firstName} {lastName} </p>
       <p className='address'> {city}, {country}</p>
    </div>
        
       
    </div>

  </div>;
}

export default MyProfile;