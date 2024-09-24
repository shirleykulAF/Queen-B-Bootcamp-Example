import React from 'react';

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ width: '100%', borderRadius: '10px' }} />;
};

export default Image;
