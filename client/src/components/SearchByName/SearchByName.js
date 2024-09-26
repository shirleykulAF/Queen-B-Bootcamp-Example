import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchByName = ({ onSearch }) => {
    const [inputText, setInputText] = useState("");

    const inputHandler = (event) => {
        setInputText(event.target.value.toLowerCase());
    };

    // function to handle when the search button is clicked
    const handleSearchClick = () => {
        onSearch(inputText);
    };

    return (
        <div className="search-mentor-by-name" style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                id="search-mentor-by-name"
                onChange={inputHandler}
                fullWidth
                label="Search by Mentor Name"
            />

            {/* search button with magnifying glass icon */}
            <IconButton onClick={handleSearchClick} aria-label="search">
                <SearchIcon />
            </IconButton>
        </div>
    );
};

export default SearchByName;