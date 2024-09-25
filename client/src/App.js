import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/signup-page';
import LogInPage from './pages/login-page';
import firstPerson from './images/person1.svg';
import './App.css';

const port = process.env.PORT || 5001;

function App() {
  const [message, setMessage] = useState('');

  // Fetch data from the backend API
  useEffect(() => {
    axios.get(`http://localhost:${port}/api/helloworld`)
      .then(response => setMessage(response.data))
      .catch(error => console.error(`There was an error retrieving the message: ${error}`));
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page Route */}
          <Route 
            path="/" 
            element={<HomePage message={message} firstPerson={firstPerson} />} 
          />
          {/* Sign-Up Page Route */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
