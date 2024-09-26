import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const SearchByProgrammingLanguages = ({ data }) => {
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Fetch programming languages from the backend
  useEffect(() => {
    const fetchProgrammingLanguages = async () => {
      try {
        const response = await axios.get("/api/programming-languages"); // Adjust API endpoint as needed
        setProgrammingLanguages(response.data);
      } catch (error) {
        console.error("Error fetching programming languages:", error);
      }
    };

    fetchProgrammingLanguages();
  }, []);

  // Handle language selection and filtering mentors
  const handleLanguageClick = (language) => {
    setSelectedLanguage(language); // Set the selected language
    const filteredMentors = data.filter((mentor) =>
      mentor.programming_languages.includes(language)
    );
    setFilteredData(filteredMentors); // Filter mentors based on selected language
  };

  return (
    <div>
      <h2>Search by Programming Language</h2>

      {/* Display buttons for each programming language */}
      <div>
        {programmingLanguages.map((language, index) => (
          <Button
            key={index}
            variant={selectedLanguage === language ? "contained" : "outlined"}
            onClick={() => handleLanguageClick(language)}
            style={{ margin: "5px" }}
          >
            {language}
          </Button>
        ))}
      </div>

      {/* Display filtered mentors */}
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((mentor) => (
            <li key={mentor.id}>
              {mentor.full_name} - Technologies: {mentor.programming_languages.join(", ")}
            </li>
          ))
        ) : (
          <p>No mentors found for the selected language</p>
        )}
      </ul>
    </div>
  );
};

export default SearchByProgrammingLanguages;