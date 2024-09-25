// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";

// const SearchByName = ({ onSearch }) => { // No need for data prop
//     const [inputText, setInputText] = useState("");

//     const inputHandler = (event) => {
//         setInputText(event.target.value); // Store input text
//     };

//     // Function to handle when the search button is clicked
//     const handleSearchClick = () => {
//         onSearch(inputText); // Call onSearch with the input text
//     };

//     return (
//         <div className="search-mentor-by-name" style={{ display: 'flex', alignItems: 'center' }}>
//             <TextField
//                 id="search-mentor-by-name"
//                 onChange={inputHandler}
//                 fullWidth
//                 label="Search by Mentor Name"
//             />

//             {/* Search Button with Magnifying Glass Icon */}
//             <IconButton onClick={handleSearchClick} aria-label="search">
//                 <SearchIcon />
//             </IconButton>
//         </div>
//     );
// };

// export default SearchByName;

import React, { useState, useEffect  } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchByName = ({ data }) => {
    const [inputText, setInputText] = useState("");
    const [selectedMentor, setSelectedMentor] = useState(null);

    const inputHandler = (input) => {
        // convert input text to lower case
        setInputText(input.target.value.toLowerCase());
        setSelectedMentor(null); // reset selected mentor when searching
    };

    // Function to handle when the search button is clicked
    const handleSearchClick = () => {
        const matchingMentors = data.filter((mentor) =>
            mentor.full_name.toLowerCase().includes(inputText)
        );

        if (matchingMentors.length > 0) {
            setSelectedMentor(matchingMentors[0]); // Select the first matching mentor
        } else {
            setSelectedMentor(null); // Reset if no match is found
        }
    };


    // filter the mentors based on their name given as input
    const filteredData = data.filter((input) => {
        if (inputText === "") {
            // return all mentors if input is empty
            return input;
        } else {
            return input.full_name.toLowerCase().includes(inputText);
        }
    });

    // when a mentor is clicked, set that mentor as the selected one
    const handleMentorClick = (mentor) => {
        setSelectedMentor(mentor);
    };

    return (
        <div className="main">
            <div className="search-mentor-by-name" style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    id="search-mentor-by-name"
                    onChange={inputHandler}
                    fullWidth
                    label="Search by Mentor Name"
                />

                {/* Search Button with Magnifying Glass Icon */}
                <IconButton onClick={handleSearchClick} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </div>

            {/* Show the selected mentor's details if one is clicked */}
            {selectedMentor ? (
                <div>
                    <p>{selectedMentor.full_name}</p>
                </div>
            ) : (
                <div>
                    <ul>
                        {filteredData.map((item) => (
                            <li key={item.id} onClick={() => handleMentorClick(item)}>
                                {item.full_name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchByName;