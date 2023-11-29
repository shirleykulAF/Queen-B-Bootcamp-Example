import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import MentorProfile from "./MentorProfile";
import AllMentors from "./AllMentors";

function App() {

  return (
          <Router>
                  <Routes>
                         <Route path="/" element={<AllMentors />} />
                         <Route path="/students/:id" element={<MentorProfile />} />
                  </Routes>
          </Router>
  );
}

export default App;