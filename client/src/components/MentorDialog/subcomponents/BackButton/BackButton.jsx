import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ closeDialog }) => {
  const navigate = useNavigate();  // React Router's hook for navigation

  const handleClick = () => {
    closeDialog();  // Close the dialog
    navigate('/');  // Navigate to home page
  };

  return (
    <button onClick={handleClick}>
      Back to Home Page
    </button>
  );
};

export default BackButton;
