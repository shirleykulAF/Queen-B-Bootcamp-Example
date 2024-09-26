import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from './images/logo1.png';
import './index.css';



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
      <h1>User Login and Mentor Registration</h1>
      <input
        type="text"
        placeholder="UserName"
        value={username}
        onChange={handleUsernameChange}
      />
      <Link to='/mentors'>
      <button onClick={handleLogin}>Login</button></Link>
      <p>Want to register as a new mentor?</p>
      <Link to='/new-mentor'>
      <button onClick={handleSignup}>Register as a New Mentor</button></Link>
      <div className='imageQueen'>
      <img src={myImage} alt="תמונת רקע להתחברות" className="background-image" />
      </div> 
      <nav class="navbar">
  <div class="navbar-container">
    <a href="#" class="navbar-logo">QueenB</a>
    <ul class="navbar-menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>    
    </div>
  );
};

export default LoginSignupForm;