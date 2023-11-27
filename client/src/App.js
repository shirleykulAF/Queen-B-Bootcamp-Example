import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StudentProfile from "./StudentProfile";
import AllStudents from "./AllStudents";
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
          <Router>
              <>
                  <Routes>
                      <Route path="/" element={<AllStudents />} />
                      <Route path="/products/*" element={<StudentProfile />} />
                  </Routes>
              </>
          </Router>
      </>
  );
}

export default App;