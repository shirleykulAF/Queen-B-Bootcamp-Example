import React from "react";
import MentorsDetails from "../components/MentorsDetails";
import './Auth.css'; // Assuming you're using the same styles for consistency

const Home = () => {
  return (
    <section className="home-subtitle">
      <MentorsDetails />
    </section>
  );
};

export default Home;
