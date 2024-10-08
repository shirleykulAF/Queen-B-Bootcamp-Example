import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import firstPerson from './images/person1.svg';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignupForm from './LoginSignupForm';
import Mentors from './Mentors';

import Home from './Home';

import NewMentor from './NewMentor';
import OneMentor from './OneMentor';




const port = process.env.PORT || 5001;

function App() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   axios.get(`http://localhost:${port}/api/helloworld`)
  //     .then(response => setMessage(response.data))
  //     .catch(error => console.error(`There was an error retrieving the message: ${error}`))
  // }, [])

  return (
  /*  <div className="App">
      <h1>{message}</h1>
      <img src={firstPerson} alt="person1" />
    </div>
  */
    <Router>
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LoginSignupForm" element={<LoginSignupForm />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/new-mentor" element={<NewMentor />} />
        <Route path="/one-mentor/:name" element={<OneMentor />} /> 


      </Routes>
    </div>
  </Router>

  );
}

export default App;