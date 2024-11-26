// src/screens/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import bannerLogin from '../images/login-img.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you should handle authentication logic (e.g., check credentials)
    // if (username === 'user' && password === 'password') {
      // On successful login, navigate to the home page
      navigate('/dashboard');
    // } else {
    //   alert('Invalid username or password');
    // }
  };

  return (
    <div className="home-container d-flex align-items-center justify-content-center">
      <div className="main-container d-flex">
        
        
        <div className="left-container d-flex align-items-center justify-content-center">
          <img src={bannerLogin} alt="Example" className="img-fluid" />
        </div>


        <div className="right-container d-flex align-items-center justify-content-center">
          <form className="form-container text-center" onSubmit={handleSubmit}>
            <h2 className="heading">Log In</h2>
            
            <div className="mb-3 field-container">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="Username"
                className="form-control"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            
            <div className="mb-3 field-container">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="Password"
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button type="submit" className="btn btn-primary w-100">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
