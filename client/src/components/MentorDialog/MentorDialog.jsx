import React, { useState, useEffect } from 'react';
import './MentorDialog.css';
import Image from './subcomponents/Image/Image';

const MentorDialog = ({ mentor, onBackClick }) => {
  //console.log("MentorDialog component rendered");
  //console.log("MentorDialog mentor data:", mentor);

  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  const togglePhone = () => {
    setShowPhone(!showPhone);
  };

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  const toggleLinkedIn = () => {
    setShowLinkedIn(!showLinkedIn);
  };

  useEffect(() => {
    if (mentor) {
      //console.log("Mentor data available for dialog:", mentor);
    } else {
      //console.log("No mentor data available");
    }
  }, [mentor]);

  return (
    <>
      <div className="modal-backdrop-custom" onClick={onBackClick}></div>
      <div className="mentor-dialog-container">
        <Image src={mentor.image} alt={mentor.name} />
        <h2>{mentor.name}</h2>
        <p><strong>Technologies:</strong> {mentor.technologies.join(', ')}</p>
        <p><strong>About:</strong> {mentor.about}</p>

        <div className="mentor-actions">
          <button onClick={togglePhone}>
            {showPhone ? 'Hide Phone' : 'Show Phone'}
          </button>
          {showPhone && <p>{mentor.phone}</p>}
          
          <button onClick={toggleEmail}>
            {showEmail ? 'Hide Email' : 'Show Email'}
          </button>
          {showEmail && <p>{mentor.email}</p>}
          
          <button onClick={toggleLinkedIn}>
            {showLinkedIn ? 'Hide LinkedIn' : 'Show LinkedIn'}
          </button>
          {showLinkedIn && <p><a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>}
        </div>
      </div>
    </>
  );
};

export default MentorDialog;
