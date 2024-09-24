import React from 'react';
import '../App.css';
import person1 from '../images/person1.svg'; 


function MentorCard({name}) {
  return (
    <div className="mentor-card">
        <img src={person1} alt="Mentor" className="mentor-avatar" />
        <div className="mentor-details">
        <h3>{name}</h3>
        <p>JavaScript</p>
        </div>
    </div>
  )
}

export default MentorCard;