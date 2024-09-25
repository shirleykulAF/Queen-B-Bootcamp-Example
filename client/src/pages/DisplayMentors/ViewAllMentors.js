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
    (
      <div>
        <Header />
        <CardsGrid mentorsList={mentors} />
        {/* <SearchByName data={mentors}/> */}
        {/*<MentorDetailsModal data={edenData} */}
      </div>
    )
  );
};

export default ViewAllMentors;
