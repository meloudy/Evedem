import React from 'react'
import '../styles/Footer.css'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'



const footer = () => {
  return (
    <div className='footer footerFlexCol' >
        <div className=''>
            <img src={facebook} alt="Error" />
            <img src={instagram} alt="Error" />
            <img src={twitter} alt="Error" />
        </div>

        <div className='footerFlex' >
            <div>
                <h3 className='footerH3'>Evedem</h3> 
                <p style={{fontFamily : 'Inknut Antiqua' ,}}> Every Details Matters</p>
                <p><span className='footerSpan' >Address :</span> 13 Management 718 Thompson <br />
                Lane Suite 108256. Nashville, États-Unis</p>
                <p><span className='footerSpan' >Phone :</span> (916) 456-089</p> 
                <p><span className='footerSpan' >Email :</span> evedem@gmail.com</p>
            </div>
            <div>

            <p className='footerSpan'>Opening hours</p>
            <p>mon - fri : 7:00AM - 8:00PM</p>
            <p>saturday : 7:00AM - 3:30PM</p>
            <p>sunday :  7:00AM - 3:30OM</p>

            </div>
        </div>
        <p className='footerFlex'> <span style={{fontSize:'25px'}}>&copy;</span>  2024 Evedem </p>
    </div>
  )
}

export default footer