import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import MentorPage from "./components/MentorPage";
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
          <Router>
              <Routes>
                  <Route exact path="/" element={<HomePage port={port}/>} />
                  <Route path="/teachers" element={<MentorPage port={port}/> }/>
                  {/*<Route path="/mentor" element={<About />} />*/}
              </Routes>
          </Router>
      </div>


  );
}

export default App;