import React, { useState } from 'react';
import './index.css'; 
import { Link } from 'react-router-dom';
import myImage from './images/logo2.png';
import { FiMenu } from "react-icons/fi";




const Home = () => {
  return (
    <div className="homepage">
      
      <div className="card">
        <h2>Mentor Area</h2>
        <p>Register as Mentor and become influential and meaningful</p>
        <Link to="/new-mentor">
          <button>Register</button>
        </Link>
      </div>
      <div className="card">
        <h2>Mentee Area</h2>
        <p>Login to access mentorship resources and connect with mentors.</p>
        <Link to="/LoginSignupForm">
          <button>User Login</button>
        </Link>
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
    </div>
  );
};

export default Home;