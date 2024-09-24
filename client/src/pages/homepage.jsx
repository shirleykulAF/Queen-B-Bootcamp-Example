import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from '../components/searchBar/SearchBar';
// import Logo from '../components/logo/Logo';
// import Feed from '../components/feed/Feed';
// import Dialog from '../components/Card/Dialog';

const HomePage = ({ message, firstPerson }) => {
  return (
    <div className="HomePage">
      <header>
        {/* Temporarily removing the logo */}
        {/* <Logo /> */}
      </header>
      <main>
        <h1>{message}</h1>
        <img src={firstPerson} alt="person1" />

        {/* Temporarily removing the incomplete components */}
        {/* <SearchBar /> */}
        {/* <Feed /> */}
        {/* <Dialog /> */}

        <Link to="/signup">
          <button>Go to Sign-Up Page</button>
        </Link>
      </main>
    </div>
  );
};

export default HomePage;
