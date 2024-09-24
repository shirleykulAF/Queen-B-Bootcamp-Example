import React from 'react';

const Info = ({ name, technology, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{technology}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Info;
