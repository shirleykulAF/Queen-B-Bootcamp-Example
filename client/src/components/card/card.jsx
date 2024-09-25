import React from 'react';
import './Card.css';

const Card = ({ image, name, technologies }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" style={{ width: '100px', borderRadius: '50%' }} />
      <h3>{name}</h3>
      <p>{technologies.join(', ')}</p>
    </div>
  );
};

export default Card;

