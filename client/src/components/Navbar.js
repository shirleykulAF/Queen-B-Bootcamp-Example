import React from 'react';
import '../Navbar.css'; // Assuming you'll have CSS to style the navbar
import ReinaImage from '../assets/Reina.png'; // Make sure to import your image correctly

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Left side empty for now */}
            <div className="navbar-left">
                <a href="/" className="navbar-home-button">Home</a> {/* This will route to the welcome page */}
            </div>

            {/* Center logo */}
            <div className="navbar-logo">
            <a href="/">
                    <img src={ReinaImage} alt="Logo" className="logo-image" />
                </a>            </div>

            {/* Right side with search, login, and sign-up buttons */}
            <div className="navbar-right">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="search-bar" 
                />
                <a href="/login" className="navbar-link">Login</a>
                <a href="/signup" className="navbar-button">Sign Up</a>
            </div>
        </nav>
    );
};

export default Navbar;
