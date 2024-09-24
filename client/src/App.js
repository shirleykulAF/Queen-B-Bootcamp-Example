import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import { useRef } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import "./App.css";
// import LoginSignup from "./components/LoginSignup.jsx";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import firstPerson from "./images/person1.svg";
// import Header from "./components/Header";
// import "./App.css";
import MentorCard from "./components/MentorCard";
// const port = process.env.PORT || 5001;

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route - redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Signup Route */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
