import React, { useEffect, useState } from "react";
import MentorCard from "./MentorCard";
import './MentorsDetails.css'; // Import custom styles for the grid

const MentorsDetails = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/mentors");
        const data = await response.json();
        setMentors(data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className="mentors-container">
      <h2 className="mentors-title">Take a look at our amazing mentors</h2>
      <div className="card-container">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.email} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default MentorsDetails;
