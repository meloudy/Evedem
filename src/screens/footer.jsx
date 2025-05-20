import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer footerFlexCol'>
      <div className=''>
        <a href="#" aria-label="Facebook" className="social-link"><FontAwesomeIcon icon={faFacebook} size="2x" className="social-icon" /></a>
        <a href="#" aria-label="Instagram" className="social-link"><FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon" /></a>
        <a href="#" aria-label="Twitter" className="social-link"><FontAwesomeIcon icon={faTwitter} size="2x" className="social-icon" /></a>
      </div>

      <div className='footerFlex'>
        <div>
          <h3 className='footerH3'>Evedem</h3>
          <p style={{ fontFamily: 'Inknut Antiqua' }}>Every Detail Matters</p>
          <p>
            <span className='footerSpan'>Address:</span> 13 Management 718 Thompson
            <br />
            Lane Suite 108256. Nashville, États-Unis
          </p>
          <p><span className='footerSpan'>Phone:</span> (916) 456-089</p>
          <p><span className='footerSpan'>Email:</span> evedem@gmail.com</p>
        </div>
        <div>
          <p className='footerSpan'>Opening hours</p>
          <p>mon - fri: 7:00AM - 8:00PM</p>
          <p>saturday: 7:00AM - 3:30PM</p>
          <p>sunday: 7:00AM - 3:30OM</p>
        </div>
      </div>
      <p className='footerFlex'><span style={{ fontSize: '25px' }}>©</span> 2024 Evedem</p>
    </div>
  );
};

export default Footer;
