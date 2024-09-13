import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firstPerson from './images/person1.svg';

// components
import Home from './pages/Home'

const port = process.env.PORT || 5001;

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:${port}/api/helloworld`)
      .then(response => setMessage(response.data))
      .catch(error => console.error(`There was an error retrieving the message: ${error}`))
  }, [])

  return (
    <>
      {/* we can delete this section */}
      <div className="App">
        <h1>{message}</h1>
        <img src={firstPerson} alt="person1" />
      </div>
      {/* ************************** */}

      
      <Home/>
    </>
  );
}

export default App;