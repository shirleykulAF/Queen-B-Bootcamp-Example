import React from 'react';
import logoImage from 'client/src/images/logo.png';
import './Logo.css'; 


function Logo() {
    return <img src={logoImage} alt="Company Logo" className="logo" />;
}
