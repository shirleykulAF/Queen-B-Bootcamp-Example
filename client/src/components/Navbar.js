import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './Navbar.css'; // Assuming you'll have CSS to style the navbar
import ReinaImage from '../assets/Reina.png'; // Make sure to import your image correctly

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Left side - Home button */}
            <div className="navbar-left">
                <Link to="/" className="navbar-link">Home</Link> {/* Links to welcome page */}
            </div>

            {/* Center logo (clickable to go to the welcome page) */}
            <div className="navbar-logo">
                <Link to="/">
                    <img src={ReinaImage} alt="Logo" className="logo-image" />
                </Link>
            </div>

            {/* Right side - Search, Login, and Sign Up buttons */}
            <div className="navbar-right">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-bar"
                />
                <Link to="/login" className="navbar-link">Login</Link>
                <Link to="/signup" className="navbar-button">Sign Up</Link> {/* Links to signup page */}
            </div>
        </nav>
    );
}

export default Navbar;
