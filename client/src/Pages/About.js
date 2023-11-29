import React from "react";
import NavbarSearch from "./NavbarSearch";
import "../Style/About.css";

function About() {
    return (
        <div>
            <NavbarSearch />

            <div>

                <div className="showcase">
                    <div className="overlay-text">
                        <h2 className="white-text">Welcome to a unique learning experience! At our platform, we connect eager students with skilled teachers across various domains. Explore teacher profiles, delving into their expertise and teaching styles. Easily reach out to your selected teacher through provided contact details. We're passionate about making learning personalized and enjoyable. Choose your teacher today and kickstart your educational journey!

                            For any inquiries or suggestions, feel free to reach out through your preferred communication channels.

                            Happy learning!</h2>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default About;
