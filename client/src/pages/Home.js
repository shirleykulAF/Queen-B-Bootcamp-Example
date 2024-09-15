// display all mentors
import React from "react";
import MentorCard from "../components/MentorCard";

// components
import MentorsDetails from "../components/MentorsDetails";

const Home = () => {
  return (
    <div className="container">
      <h1>Mentors</h1>
      <MentorsDetails />
    </div>
  );
};

export default Home;
