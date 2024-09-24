import React, { useState } from "react";
import "./MentorDetailsModal.css";

import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const MentorDetailsModal = ({ data }) => {
  console.log(data);
  const whatsappLink = `https://wa.me/+972${data.phone_number}`;
  const callLink = `tel:+972${data.phone_number}`;
  const emailLink = `mailto:${data.email}`;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>View Mentor Modal</button>

      {show && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={handleClose}>
              x
            </button>
            <img
              className="mentor-photo"
              src={data.photo_url}
              alt="Mentor Photo"
            />
            <h2 className="fullName">{data.full_name}</h2>
            <div className="skills-container">
              {data.programming_languages.map((val) => (
                <h4 className="skill">#{val}</h4>
              ))}
            </div>
            <h3 className="about">{data.general_description}</h3>
            <div className="data-container">
              <p>{data.role}</p>
              <p>{data.years_of_experience} Years Of Experience </p>
              <p>Work In {data.company}</p>
              <p>Live In {data.geographical_location}</p>
            </div>
            <div className="icons-container">
              <a href={data.linkedin_profile} target="_blank">
                <SlSocialLinkedin size="21" color="black" />
              </a>
              <a href={emailLink} target="_blank">
                <TfiEmail size="21" color="black" />
              </a>
              <a href={whatsappLink} target="_blank">
                <FaWhatsapp size="21" color="black" />
              </a>
              <a href={callLink} target="_blank">
                <FiPhone size="21" color="black" />
              </a>{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MentorDetailsModal;
