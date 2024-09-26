import React, { useState } from "react";
import "./Card.css"; // Assuming the relevant CSS styles are in here
import PopUp from "../PopUp/PopUp"; // Import the PopUp component
import MentorDetailsModal from "../../components/MentorDetailsModal/MentorDetailsModal";

const Card = ({ singleMentor }) => {
  const [showPopUp, setShowPopUp] = useState(false); // State to control pop-up visibility

  const handleShowPopUp = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="Card">
      <div className="cardContainer">
        <h2 className="title">{singleMentor.name}</h2>
        <div className="image">
          <img src={singleMentor.profile_photo} alt="Mentor's Image" />
        </div>
        <p className="about">{singleMentor.about}</p>

        {/* Button to trigger the pop-up */}
        <button onClick={handleShowPopUp} className="popup-button">
          Show Details
        </button>
      </div>

      {/* PopUp component */}
      <MentorDetailsModal
        show={showPopUp}
        onClose={handleClosePopUp}
        data={singleMentor}
      />
    </div>
  );
};

export default Card;
