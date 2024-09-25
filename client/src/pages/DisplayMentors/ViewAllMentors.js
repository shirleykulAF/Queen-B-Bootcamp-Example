// import React, { useState } from "react";
// import CardsGrid from "../../components/CardsGrid/CardsGrid";
// import Header from "../../components/Header/Header";
// import MentorDetailsModal from "../../components/MentorDetailsModal/MentorDetailsModal";
// import SearchByName from "../../components/SearchByName/SearchByName";
// import SearchByProgrammingLanguages from "../../components/SearchByProgrammingLanguages/SearchByProgrammingLanguages";

// const mentorData = [{
//   full_name: "Eden Ismah-Moshe",
//   email: "eden12012@gmail.com",
//   phone_number: "0506396105",
//   linkedin_profile: "https://www.linkedin.com/in/edenim/",
//   photo_url: require("../../assets/images/myImg.jpeg"),
//   general_description:
//     "Computer science student specializing in frontend and fullstack development",
//   role: "Student",
//   years_of_experience: 3,
//   company: "QuennB",
//   geographical_location: "Tel Aviv, Israel",
//   programming_languages: ["JavaScript", "React", "React Native", "Python"],
//   // Add more mentor objects as needed
// }];

// const ViewAllMentors = ({ selectedName, setSelectedName }) => {
//   const [filteredMentors, setFilteredMentors] = useState(mentorData); // Initially display all mentors

//   const handleSearch = (inputText) => {
//     setSelectedName(inputText); // Update the selected name in App state

//     if (inputText.trim() === "") {
//       // If search input is empty, display all mentors
//       setFilteredMentors(mentorData);
//     } else {
//       // Filter mentors based on the search text
//       const filtered = mentorData.filter((mentor) =>
//         mentor.full_name.toLowerCase().includes(inputText.toLowerCase())
//       );
//       setFilteredMentors(filtered); // Update the filtered mentors state
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <SearchByName onSearch={handleSearch} /> {/* Pass search handler */}
//       <SearchByProgrammingLanguages data={mentorData} />
//       <CardsGrid mentorsList={filteredMentors} /> {/* Pass filtered mentors to CardsGrid */}
//       <MentorDetailsModal data={filteredMentors} />
//     </div>
//   );
// };

// export default ViewAllMentors;


import React, { useEffect, useState } from "react";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import Header from "../../components/Header/Header";
import MentorDetailsModal from "../../components/MentorDetailsModal/MentorDetailsModal";
import SearchByName from "../../components/SearchByName/SearchByName";

const port = process.env.PORT || 5001;

const ViewAllMentors = () => {
  const [mentors, setMentors] = useState(null);
  
  //this is a mock data for SearchByName and MentorDetailsModal 
  const mentorData = [
    {
      full_name: "John Doe",
      brief: "I am a full-stack developer with 5 years of experience.",
      photo_path: "https://via.placeholder.com/150",
    },
    {
      full_name: "Jane Doe",
      brief: "I am a data scientist with 3 years of experience.",
      photo_path: "https://via.placeholder.com/150",
    },
  ];


  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch(`http://localhost:${port}/api/mentor`);
        console.log(response);
        const json = await response.json();
        console.log(json);
  
        if (response.ok) {
          setMentors(json);  
        } else {
          console.error("Failed to fetch mentors:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching mentors:", error);  
      }
    };
  
    fetchMentors();
  }, []); 
  
// after this function, all the data in the database is stored in mentors state variable.


  return (
    console.log(mentors),
    <div>
      <Header />
      <CardsGrid mentorsList={mentors}/>
      {/* <SearchByName data={mentors}/> */}
      {/*<MentorDetailsModal data={mentorData} /> */}
    </div>
  );
};

export default ViewAllMentors;