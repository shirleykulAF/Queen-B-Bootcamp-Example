import React from "react";

export default function Card({ teacherObj }) {
  return (
    //add border to the card
    <li className={`teacher ${teacherObj.soldOut ? "unavalible" : ""}`}>
      <img src={teacherObj.photoName} alt={teacherObj.name} />
      <div>
        <h3>{teacherObj.name}</h3>
        <h4>{teacherObj.ingredients}</h4>
        <p>📍{teacherObj.location}</p>
        <span>
          {teacherObj.soldOut ? "Currently Unavalible" : teacherObj.price}
        </span>
      </div>
    </li>
  );
}
