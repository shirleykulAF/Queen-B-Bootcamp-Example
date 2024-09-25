import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MentorRegistration from "./pages/MentorRegistration/MentorRegistration";
import ViewAllMentors from "./pages/DisplayMentors/ViewAllMentors";
import About from "./pages/About/About";
import LoginPage from "./pages/UserRegistration/LoginPage/LoginPage";
import SignupPage from "./pages/UserRegistration/SignupPage/SignupPage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* maybe add here another div with className="pages" */}
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/login" Component={LoginPage} />
          <Route exact path="/signup" Component={SignupPage} />
          <Route path="/MentorRegistration" Component={MentorRegistration} />
          <Route path="/viewAllMentors" Component={ViewAllMentors} />
          <Route path="/about" Component={About} />
        </Routes>
      </Router>
    </div>
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
