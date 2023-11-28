import React from "react";
import searchIcon from '../../images/searchIcon.svg';
import './SearchBar.css';
import {useState} from "react";

function SearchBar(){
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };


    return(
        <header className="header-SearchBar">
             <input
                type="text"
                placeholder="Search by a name or a profession..."
                value={searchQuery}
                onChange={handleInputChange}
            />
        </header>
    )
}

export default SearchBar;



