// a component to handle the display of the pop-up window

// src/components/PopUp.js
import React from 'react';
import './PopUp.css';
import { SlSocialLinkedin } from 'react-icons/sl';
import { TfiEmail } from 'react-icons/tfi';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

const PopUp = ({ show, onClose, data }) => {
  if (!show) {
    return null;
  }

  const whatsappLink = `https://wa.me/+972${data.phone_number}`;
  const callLink = `tel:+972${data.phone_number}`;
  const emailLink = `mailto:${data.email}`;

  return (
    <div className="popupContainer" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>

      <button onClick={onClose} className="modal-close-button">X</button>

        <div className="content">
          <img
            className="mentor-photo"
            src={data.profile_photo}
            alt="Mentor Photo"
          />
          <h2 className="fullName">{data.name}</h2>
          <div className="skills-container">
            {data.programming_languages.map((val) => (
              <h4 key={val} className="skill">#{val}</h4>
            ))}
          </div>

          <p className="about">{data.about}</p>

          <div className="contact-links">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href={callLink}><FiPhone /></a>
            <a href={emailLink}><TfiEmail /></a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer"><SlSocialLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;