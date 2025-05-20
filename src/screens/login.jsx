import { useState, useEffect } from 'react';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import LoginCall from "../api/user/login.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import CheckAuth from '../api/user/checkauth.js'; // Ensure CheckAuth is exported correctly
import React from 'react'
import loginpic from '../assets/homeimg.png'

function Login() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [loginStatus, setLoginStatus] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyAuthentication = async () => {
      try {
        const [ok, err] = await CheckAuth();

        if (ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          setLoginError(err);
        }
      } catch (error) {
        console.error("Error during authentication check:", error);
        setIsAuthenticated(false);
        setLoginError("An error occurred while checking authentication.");
      }
    };

    verifyAuthentication();
  }, []);

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/profile");
    } else if (isAuthenticated === false && loginStatus === 'success') {
      navigate("/");
    } else if (loginStatus === 'failure') {
      alert(`Login failed: ${loginError || 'Unknown error'}`);
    }
  }, [loginStatus, loginError, navigate, isAuthenticated]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    setIsLoggingIn(true);
    setLoginError('');
    setLoginStatus(null);

    try {
      const [ok, message] = await LoginCall(email, password);

      setLoginStatus(ok ? 'success' : 'failure');

      if (!ok) {
        let errorMessage = 'Invalid credentials';

        if (typeof message === 'string') {
          errorMessage = message;
          console.error("Login Error:", message);
        } else if (typeof message === 'object' && message !== null) {
          try {
            if (message.login) {
              switch (message.login) {
                case "success":
                  return;
                case "banned":
                  errorMessage = "You are banned from using our services.";
                  break;
                default:
                  errorMessage = 'Invalid credentials';
                  break;
              }
            } else if (message.Error) {
              let errorDetail = `Error: ${message.Error}`;
              if (message.ErrorInfo) {
                errorDetail += `, Info: ${message.ErrorInfo}`;
              }
              errorMessage = errorDetail;
              console.error("Login Error:", errorMessage);
            } else {
              errorMessage = JSON.stringify(message);
              console.error("Login Error:", errorMessage);
            }
          } catch (jsonError) {
            console.error("Error processing JSON:", jsonError);
            errorMessage = 'Login failed - Invalid JSON response';
          }
        } else {
          console.error("Login Error:", message);
          errorMessage = 'Login failed - Unknown error format';
        }

        setLoginError(errorMessage);
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An unexpected error occurred during login.');
      setLoginStatus('failure');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Conditionally render the login form based on authentication status
  if (isAuthenticated === true) {
    return null; // Or a loading indicator if you prefer
  }

  return (
    <section className='login'>
      <div className='loginForm'>
        <Link className='no-costum' to={'/'}><h1 className='font-Inknut' style={{ padding: '8px 16px', }}>Evedem</h1></Link>
        <div className='flexCenter'>
          <form className='flexCenter login-form' onSubmit={handleSubmit}>
            <div className='psDiv'>
              <p className='font-Inknut'>Every Detail</p>
              <p className=' font-MarckScript '>Matters</p>
            </div>
            <div className='inputsDiv'>
              <input name="email" className='inpt ' placeholder='Email' type="email" />
              <div className=" password-input-container">
                <input
                  className='inpt'
                  placeholder='Password'
                  type={showPass ? "text" : "password"}
                  name="password"
                />
                <span className="password-toggle-icon" onClick={() => setShowPass(!showPass)}>
                  <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
                </span>
              </div>
              <p className='forgetPasswordP'>Forgot Password?</p>
            </div>
            <button disabled={isLoggingIn} className='button'>
              {isLoggingIn ? 'Logging in...' : 'Login'}
            </button>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          </form>
          <p className='text-[#6D7C7C] text-center'>don't have an acount ? <Link className='no-costum' to={'/register'}> <span className='login-span'>Register</span></Link></p>

        </div>
      </div>
      <div className='loginpic'>
        <img className='pic' src={loginpic} alt="ERROR" />
      </div>
    </section>
  );
}

export default Login;
