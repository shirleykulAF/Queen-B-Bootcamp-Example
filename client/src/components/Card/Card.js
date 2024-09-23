import React from "react";
import './Card.css'
// this is the most simple version. 

const Card = ({mentorName, mentorBrief, mentorPhotoPath}) => {
    return (
	<div className="Card">

        <div className="cardContainer">


        <h2 className="title">{mentorName}</h2>
        <div className="image">
        <img src={mentorPhotoPath} alt="Mentor's Image" />
        </div>
        <p className="about">
            {mentorBrief}
        </p>
        </div>
	</div>
  );
};

export default Card;





