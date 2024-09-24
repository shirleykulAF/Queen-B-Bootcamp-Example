import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firstPerson from '../images/person1.svg';
const port = process.env.PORT || 5001;

function MyComp() {
  const [message, setMessage] = useState('');

  //http://localhost:${port}
  useEffect(() => {
    axios.get(`api/helloworld`)
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

export default MyComp;
