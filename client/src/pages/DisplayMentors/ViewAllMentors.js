import React, { useEffect, useState } from "react";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import Header from "../../components/Header/Header";
import SearchByName from "../../components/SearchByName/SearchByName";

const port = process.env.PORT || 5001;

const ViewAllMentors = () => {
  const [mentors, setMentors] = useState([]); // holds all mentors
  const [filteredMentors, setFilteredMentors] = useState([]); // holds filtered mentors
  
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch(`http://localhost:${port}/api/mentor`);
        const json = await response.json();

        if (response.ok) {
          setMentors(json);
          setFilteredMentors(json);
        } else {
          console.error("Failed to fetch mentors:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching mentors:", error);  
      }
    };

    fetchMentors();
  }, []); 

  // search function to filter mentors based on name
  const handleSearch = (inputText) => {
    if (inputText.trim() === "") {
      // if search input is empty, display all mentors
      setFilteredMentors(mentors);
    } else {
      // filter mentors based on the search text
      const filtered = mentors.filter((mentor) =>
        mentor.name.toLowerCase().includes(inputText.toLowerCase())
      );
      setFilteredMentors(filtered);
    }
  };

  return (
    <div>
      <Header />
      <SearchByName onSearch={handleSearch} />
      <CardsGrid mentorsList={filteredMentors} />
    </div>
  );
};

export default ViewAllMentors;
