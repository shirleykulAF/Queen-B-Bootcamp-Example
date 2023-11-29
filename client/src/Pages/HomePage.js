import React from "react";
import NavbarSearch from "./NavbarSearch";
import "../Style/HomePage.css";

function HomePage() {
    document.body.style.backgroundColor = "#EDEDED";
    return (
        <div>
            <NavbarSearch />

            <div>
                <br></br>
                <h1 style={{textAlign: "center"}}>Welcome to MentorB!</h1>
                <h2 style={{textAlign: "center"}}>Stuck on something? Let us help!</h2>
                {/* Showcase */}
                <header className="showcase2">

                </header>

            </div>

        </div>
    );
}

export default HomePage;
