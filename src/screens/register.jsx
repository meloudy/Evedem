import React from 'react'
import loginpic from '../assets/login.png'
import '../styles/Register.css'
import { Link } from 'react-router-dom';

const register = () => {

    return (
        <section className='register'>
            <div className='registerForm'>
          <Link className='no-costum' to={'/'}><h1 className='font-Inknut' style={{ padding: '8px 16px', }}>Evedem</h1></Link>
                <div className='flexCenter'>
                    <form className='flexCenter login-form' >
                        <div className='psDiv'>
                           <p className='font-Inknut'>Every Detail</p>
                            <p className=' font-MarckScript '>Matters</p>
                        </div>
                        <div className='inputsDiv'>
                            <div style={{display :'flex', justifyContent :'space-between', gap:'1rem'}}>
                            <input className='inpt ' placeholder='First Name' type="text" />
                            <input className='inpt ' placeholder='Last Name' type="text" />
                            </div>
                            <div style={{display :'flex', justifyContent :'space-between', gap:'1rem'}}>
                            <input className='inpt ' placeholder='city' type="text" />
                            <input className='inpt ' placeholder='Municipality' type="text" />
                            </div>
                            <div style={{display :'flex', justifyContent :'space-between', gap:'1rem'}}>
                            <input className='inpt ' placeholder='Postal Code' type="number" />
                            <input className='inpt ' placeholder='Phone Number' type="tel" />
                            </div>
                            <input className='inpt ' placeholder='Email' type="email" />
                            <input className='inpt' placeholder='Password' type="password" />
                            <input className='inpt' placeholder='Confirm Password' type="password" />
                        </div>
                        <button className='button'>Register</button>
                    </form>
                    <p className='text-[#6D7C7C] text-center'>you already have an acount ? <Link className='no-costum' to={'/login'}> <span className='login-span'>Login</span></Link></p>

                </div>
            </div>
            <div className='loginpic'>
                <img className='pic' src={loginpic} alt="ERROR" />
            </div>
        </section>

    )
}

export default register