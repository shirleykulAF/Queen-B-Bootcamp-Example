import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ReinaImage from '../assets/Reina.png';
import ReinaDarkImage from "../assets/ReinaBlack.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Left side - Home button */}
            <div className="navbar-left">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/MentorsBrowse" className="navbar-link">Browse</Link>
            </div>

            {/* Center logo (clickable to go to the welcome page) */}
            <div className="navbar-logo">
                <Link to="/">
                    <img src={ReinaDarkImage} alt="Logo" className="logo-image" />
                </Link>
            </div>

            {/* Right side - Search, Mentor Profile, Login, and Sign Up buttons */}
            <div className="navbar-right">
                <div className="navbar-search-container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="search-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.35-6.65a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-bar"
                    />
                </div>
                <Link to="/MentorProfile" className="navbar-link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="22px" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </Link>
                <Link to="/login" className="navbar-link">Login</Link>
                <Link to="/signup" className="navbar-button">Sign Up</Link>
            </div>
        </nav>
    );
}

export default Navbar;
