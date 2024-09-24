import React, { useState } from 'react';
import './MentorDialog.css';
import BackButton from './subcomponents/BackButton/BackButton';
import Image from './subcomponents/Image/Image';

const MentorDialog = ({ mentor, onBackClick }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  const togglePhone = () => setShowPhone(!showPhone);
  const toggleEmail = () => setShowEmail(!showEmail);
  const toggleLinkedIn = () => setShowLinkedIn(!showLinkedIn);

  return (
    <div className="mentor-dialog">
      {/* Back Button to go back */}
      <BackButton onClick={onBackClick} />
      
      {/* Mentor Image and Basic Info */}
      <Image src={mentor.image} alt={mentor.name} />
      <h2>{mentor.name}</h2>
      <p><strong>Technologies:</strong> {mentor.technologies.join(', ')}</p>
      <p><strong>About:</strong> {mentor.about}</p>

      {/* Buttons to Toggle Contact Info */}
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
  );
};

export default MentorDialog;

