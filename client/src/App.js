import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MentorRegistration from "./pages/MentorRegistration/MentorRegistration";
import DisplayMentors from "./pages/DisplayMentors/DisplayMentors";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/addMentor" Component={MentorRegistration} />
        <Route path="/viewAllMentors" Component={DisplayMentors} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
}

export default App;

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firstPerson from './images/person1.svg';
const port = process.env.PORT || 5001;

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:${port}/api/helloworld`)
      .then(response => setMessage(response.data))
      .catch(error => console.error(`There was an error retrieving the message: ${error}`))
  }, [])

  return (
    <div className="App">
      <h1>{message}</h1>
      <img src={firstPerson} alt="person1" />
    </div>
  );
}

export default App;*/
