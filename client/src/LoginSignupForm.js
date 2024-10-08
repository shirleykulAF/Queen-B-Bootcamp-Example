import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from './images/logo2.png';
import './index.css';
import { FiMenu } from "react-icons/fi";




const LoginSignupForm = () => {

  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    // Login logic here 
    console.log('Logging in with username:', username);
  };

  const handleSignup = () => {
    // Signup logic here
   
    console.log('Registering a new mentor');
  };

  return (
    <div className='wrapper'>
      <h1>Mentee Login</h1>
      <input
        type="text"
        placeholder="UserName"
        value={username}
        onChange={handleUsernameChange}
      />
      <Link to='/mentors'>
      <button onClick={handleLogin}>Login</button></Link>

      <nav class="navbar">
  <div class="navbar-container">
  <div className='imageQueen'>
      <img src={myImage} alt="תמונת רקע להתחברות" className="background-image" />
      </div> 
   
    <ul class="navbar-menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
      <div className="lang">
      <li><a href="#">&emsp; &emsp;&emsp; &emsp;Hebrew | Arabic</a>
      &emsp;&emsp;&emsp; <FiMenu size={30} color="white" /></li>
      </div> 
    
    </ul>
  </div>
</nav>    
    </div>
  );
};

export default LoginSignupForm;