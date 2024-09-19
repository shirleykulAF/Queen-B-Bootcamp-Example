// display the welcom page to the web
import React from 'react';
import { Link } from 'react-router-dom';
import '../WelcomePage.css'; // Your custom CSS file for styling
const Welcome = () => {
    
    return (
        <div className="welcome-container">
            <header className="welcome-header">
                <h1 className="welcome-title">Where women in tech come to learn and connect</h1>
                <p className="welcome-subtitle">Join a community of like-minded women in tech, find mentors, and grow your skills together.</p>

                {/* Get Started button - navigates to sign up */}
                <a herf="/signup" className="welcome-button">Get Started</a>
            </header>
        </div>
    )
}

export default Welcome