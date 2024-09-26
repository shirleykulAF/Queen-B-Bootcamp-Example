import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/searchBar/searchBar';  // Import the SearchBar component
import Feed from '../components/feed/feed';  // The feed with the cards
import Logo from '../components/logo/logo';  // Assuming you have a Logo component
import './HomePage.css';  // Add your HomePage layout CSS

const HomePage = ({ message }) => {
  const [searchTerm, setSearchTerm] = useState('');  // State to hold the search term

  const handleSearch = (term) => {
    setSearchTerm(term);  // Update the search term in the state
  };

  return (
    <div className="HomePage">
      <header>
        {/* SearchBar at the top */}
        <SearchBar onSearch={handleSearch} />
        
        {/* Sign-Up button on the top-right */}
        <div className="signup-button-container">
          <Link to="/signup">
            <button className="signup-button">Mentor Sign-Up</button>
          </Link>
          <Link to="/login">
            <button className="signup-button">Mentee Log-In</button>
          </Link>
        </div>
      </header>
      
      <main>
        <h1>{message}</h1>
        {/* Feed with the mentor cards */}
        <Feed searchTerm={searchTerm} />  {/* Pass the search term to the Feed component */}

      </main>

      {/* Logo at the bottom */}
      <footer>
        <Logo />
      </footer>
    </div>
  );
};

export default HomePage;
