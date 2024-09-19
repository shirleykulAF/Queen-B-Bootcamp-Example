// display the welcom page to the web
import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import "./WelcomePage.css";

const WelcomePage = () => {
    return (
        <>
            <div className="welcome-container">
                <header className="welcome-header">
                    <h1 className="welcome-title">
                        Where women in tech come to learn and connect
                    </h1>
                    <p className="welcome-subtitle">
                        Join a community of like-minded women in tech, find mentors, and
                        grow your skills together.
                    </p>
                    <Link to="/signup" className="welcome-button">
                        Get Started
                    </Link>
                    
                    <Carousel />
                </header>
            </div>
        </>
    );
};

export default WelcomePage;
