import React, { useState, useEffect } from 'react';
import axios from 'axios';


function FetchData() {
 
//   const [data, setData] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:${port}/api/mentors`)
      .then(response => console.log(response))
      .catch(error => console.error(`There was an error retrieving the message: ${error}`))
  }, [])

  return (
    <div >FetchDAta</div>
  
  )
}

export default FetchData;