import React, { useState } from "react";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import Header from "../../components/Header/Header";
import MentorDetailsModal from "../../components/MentorDetailsModal/MentorDetailsModal";

const mentorData = {
  full_name: "Eden Ismah-Moshe",
  email: "eden12012@gmail.com",
  phone_number: "0506396105",
  linkedin_profile: "https://www.linkedin.com/in/edenim/",
  photo_url: require("../../assets/images/myImg.jpeg"),
  general_description:
    "Computer science student specializing in frontend and fullstack development",
  role: "Student",
  years_of_experience: 3,
  company: "QuennB",
  geographical_location: "Tel Aviv, Israel",
  programming_languages: ["JavaScript", "React", "React Native", "Python"],
};

const ViewAllMentors = () => {
  return (
    <div>
      <Header />
      <CardsGrid/>
      <MentorDetailsModal data={mentorData} />
    </div>
  );
};

export default ViewAllMentors;
