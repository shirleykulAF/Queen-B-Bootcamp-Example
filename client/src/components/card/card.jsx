import React from 'react';
import './Card.css';
import BackButton from './subcomponents/BackButton/BackButton';
import Image from './subcomponents/Image/Image';
import Info from './subcomponents/Info/Info';
import Actions from './subcomponents/Actions/Actions';

const Card = ({ mentor, onBackClick }) => {
  return (
    <div className="card">
      <BackButton onClick={onBackClick} />
      <Image src={mentor.image} alt={mentor.name} />
      <Info name={mentor.name} description={mentor.description} />
      <Actions email={mentor.email} phone={mentor.phone} />
    </div>
  );
};

export default Card;
