import React, { useState } from "react";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import Header from "../../components/Header/Header";
import MentorDetailsModal from "../../components/MentorDetailsModal/MentorDetailsModal";
import SearchByName from "../../components/SearchByName/SearchByName";

const mentorData = [
  {
    full_name: "Eden Ismah-Moshe",
    email: "eden12012@gmail.com",
    phone_number: "0506396105",
    linkedin_profile: "https://www.linkedin.com/in/edenim/",
    photo_url: "/static/media/person1.8e74dd75947a3715eeb2bb4bf9f45a9d.svg",
    general_description:
      "Computer science student specializing in frontend and fullstack development",
    role: "Student",
    years_of_experience: 3,
    company: "QuennB",
    geographical_location: "Tel Aviv, Israel",
    programming_languages: ["JavaScript", "React", "React Native", "Python"],
  },
];

const tempModalData = {
  full_name: "Eden Ismah-Moshe",
  email: "eden12012@gmail.com",
  phone_number: "0506396105",
  linkedin_profile: "https://www.linkedin.com/in/edenim/",
  photo_url: "/static/media/person1.8e74dd75947a3715eeb2bb4bf9f45a9d.svg",
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
      <SearchByName data={mentorData} />
      <CardsGrid />
      <MentorDetailsModal data={tempModalData} />
    </div>
  );
};

export default ViewAllMentors;
