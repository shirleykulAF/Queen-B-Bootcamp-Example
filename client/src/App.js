import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import StudentProfile from "./StudentProfile";
import AllStudents from "./AllStudents";

function App() {

  return (
          <Router>
                  <Routes>
                         <Route path="/" element={<AllStudents />} />
                         <Route path="/students/:id" element={<StudentProfile />} />
                  </Routes>
          </Router>
  );
}

export default App;