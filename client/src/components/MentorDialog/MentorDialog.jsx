import React, { useState, useEffect } from 'react';
import './MentorDialog.css';
import BackButton from './subcomponents/BackButton/BackButton';
import Image from './subcomponents/Image/Image';

const MentorDialog = ({ mentor, onBackClick }) => {
  // Debugging log to see when the component renders
  console.log("MentorDialog component rendered");

  // Log the mentor data to ensure it's being passed correctly
  console.log("MentorDialog mentor data:", mentor);

  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  const togglePhone = () => {
    console.log("Toggled phone visibility"); // Log when the phone toggle is clicked
    setShowPhone(!showPhone);
  };

  const toggleEmail = () => {
    console.log("Toggled email visibility"); // Log when the email toggle is clicked
    setShowEmail(!showEmail);
  };

  const toggleLinkedIn = () => {
    console.log("Toggled LinkedIn visibility"); // Log when the LinkedIn toggle is clicked
    setShowLinkedIn(!showLinkedIn);
  };

  // Log to check whether mentor data is available before rendering the dialog
  useEffect(() => {
    if (mentor) {
      console.log("Mentor data available for dialog:", mentor);
    } else {
      console.log("No mentor data available");
    }
  }, [mentor]);

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={onBackClick}>
        {/* Logging when the backdrop is rendered */}
        {console.log("Backdrop rendered")}
      </div>

      {/* Mentor Dialog */}
      <div className="mentor-dialog-container">
        {/* Log when the BackButton is rendered */}
        {console.log("BackButton rendered")}
        <BackButton onClick={onBackClick} />
        
        {/* Render and log Image */}
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
