import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import firstPerson from './images/person1.svg';
import MentorCard from "./components/MentorCard";
import teachers from './mentors';
const port = process.env.PORT || 5001;


function App() {
  // const [message, setMessage] = useState('');
  // console.log(teachers);
    // const [mentors, setMentors] = useState([]);

  //   useEffect(() => {
  //   axios.get(`http://localhost:${port}/teachers`)
  //     .then(response => setMentors(response.data))
  //     .catch(error => console.error(`There was an error retrieving the message: ${error}`))
  //       console.log("11app mentors: " + mentors);
  // }, [])
  //   console.log("app mentors: " + mentors);
  return (
    <div className="App">
      {/*<h1>{mentors}</h1>*/}
        <MentorCard mentorsList={teachers} port={port}/>
      <img src={firstPerson} alt="person1" />
    </div>
  );
}

export default App;