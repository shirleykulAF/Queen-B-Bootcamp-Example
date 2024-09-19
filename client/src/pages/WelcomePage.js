import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firstPerson from '../images/person1.svg';
import '../App.css';

function WelcomePage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:${port}/api/helloworld`)
      .then(response => setMessage(response.data))
      .catch(error => console.error(`There was an error retrieving the message: ${error}`))
  }, [])

  return (
    <div className="welcome-page">
    <h1>{message}</h1>
      <h1 className="welcome-text">Welcome</h1>
      <img src={firstPerson} alt="person1" className="person-image" />
      <button className="welcome-button">Button 1</button>
      <button className="welcome-button" onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  );
}

export default WelcomePage;
