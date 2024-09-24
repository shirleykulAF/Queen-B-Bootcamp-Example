import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import firstPerson from '../images/person1.svg';
const port = process.env.PORT || 5001;

function MyComp() {
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState({});

  //http://localhost:${port}
  useEffect(() => {
    axios.get(`api/helloworld`)
      .then(response => setMessage(response.data))
      .catch(error => console.error(`There was an error retrieving the message: ${error}`))

  }, [])

  const getUser = () => {
    const response = axios.get(`users/1`);


  }

  return (
    <div className="App">
      <h1>{message}</h1>
      <img src={'../images/person1.svg'} alt="person1" onClick={} />
      <button onClick={getUser}>User</button>
    </div>
  );
}

export default MyComp;
