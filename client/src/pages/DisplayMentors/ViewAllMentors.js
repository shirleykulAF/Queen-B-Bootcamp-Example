import React, { useEffect, useState } from "react";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import Header from "../../components/Header/Header";
import MentorDetailsModal from "../../components/MentorDetailsModal/MentorDetailsModal";
import SearchByName from "../../components/SearchByName/SearchByName";

const port = process.env.PORT || 5001;

const ViewAllMentors = () => {
  const [mentors, setMentors] = useState(null);

  //this is a mock data for SearchByName and MentorDetailsModal
  const modalData = {
    name: "Merissa Mayer",
    email: "MerissaMayer@gmail.com",
    phone_number: "0506396105",
    linkedin_url: "https://www.linkedin.com/in/marissamayer",
    profile_photo: "/static/media/person1.8e74dd75947a3715eeb2bb4bf9f45a9d.svg",
    about:
      "an American business executive and investor who served as president and chief executive officer of Yahoo! from 2012 to 2017.",
    position: "Board of Directors",
    experience: 20,
    company: "AT&T",
    geographical_location: "San Francisco, California, United States",
    programming_languages: ["JavaScript", "React", "React Native", "Python"],
  };
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
    (
      <div>
        <Header />
        <CardsGrid mentorsList={mentors} />
        {/* <SearchByName data={mentors}/> */}
        {/*<MentorDetailsModal data={modalData}> */}
      </div>
    )
  );
};

export default ViewAllMentors;
