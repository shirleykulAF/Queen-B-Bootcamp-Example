import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import MentorProfile from "./MentorProfile";

import HomePage from "./HomePage";
import AllMentors from "./AllMentors";
import About from "./About";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mentors" element={<AllMentors />} />
                <Route path="/mentors/:id" element={<MentorProfile />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;