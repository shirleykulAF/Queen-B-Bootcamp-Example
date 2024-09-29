import React from 'react';
import './Card.css';

const Card = ({ image, name, technologies }) => {
  // Check if technologies is a string, parse it if necessary
  const techArray = typeof technologies === 'string' ? JSON.parse(technologies) : technologies;

  // Convert the technologies array to a string
  const techStr = Array.isArray(techArray) && techArray.length > 0 ? techArray.join(', ') : '';

 // console.log(techStr);
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" style={{ width: '100px', borderRadius: '50%' }} />
      <h3>{name}</h3>
      <p>{techStr}</p>
    </div>
  );
};

export default Card;
