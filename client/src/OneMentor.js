import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import person1 from './images/person1.svg';
import person2 from './images/person2.svg';
import person3 from './images/person3.svg';
import person4 from './images/person4.svg';
import person5 from './images/person5.svg';
import myImage from './images/logo2.png';
import { FiMenu } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { MdEmail } from "react-icons/md";   

import { DiJavascript1 } from "react-icons/di";
import { HiOutlineDocumentReport } from "react-icons/hi"; // Heroicons


const mentorsData = [
  {
    name: 'Alice',
    image: person1,
    language: 'Python, C#, C, SQL',
    email: 'alice.johnson@example.com',
    phone: '123-456-7890',
    summary: 'A passionate software engineer with 10 years of experience.'
    
  },

  // {
  //   user_id: 1,
  //   name: "Alice",
  //   last_name: "Johnson",
  //   mail: "alice.johnson@example.com",
  //   phone_number: "123-456-7890",
  //   language: "Python, C#, C, SQL",
  //   summary: "A passionate software engineer with 10 years of experience.",
  //   web_url: "https://alicejohnson.dev",
  //   image: "./images/person1.svg"
  // },
  {
    user_id: 2,
    name: "Shira",
    last_name: "Smith",
    email: "bob.smith@example.com",
    phone: "987-654-3210",
    language: "JavaScript, Python, CSS",
    summary: "A data scientist who loves helping others learn.",
    web_url: "https://shirasmith.com",
    image: person2
  },
  {
    user_id: 3,
    name: "Sophia",
    last_name: "Brown",
    email: "sophia.brown@example.com",
    phone: "345-678-9012",
    language: "Java",
    summary: "A software developer specializing in backend systems with a love for algorithms.",
    web_url: "https://linkedin.com/in/sophiabrown",
    image: person3
  },
  {
    user_id: 4,
    name: "Emma",
    last_name: "Taylor",
    email: "emma.taylor@example.com",
    phone: "456-789-0123",
    language: "Ruby",
    summary: "A full-stack developer passionate about web technologies and UI design.",
    web_url: "https://linkedin.com/in/emmataylor",
    image: person4
  }


  
  // Add other mentors...
];

const OneMentor = () => {
  const { name } = useParams();


  

  // Find the mentor that matches the name in the URL
  const mentor = mentorsData.find(mentor => mentor.name === decodeURIComponent(name));
  console.log('------>>>',mentor.name, name , mentor.first_name)

  if (!mentor) {
    return <p>לא נמצא מנטור מתאים</p>; // Message if mentor not found
  }

  return (
    <div className="mentor-container1">
      <img src={mentor.image} alt={mentor.name} className="mentor-image" />
      <h2 className="mentor-name">{mentor.name}</h2>
      <p className="mentor-language"><strong><DiJavascript1 size={40} color="pink" />:</strong> {mentor.language}</p>
      <p className="mentor-email"><strong>  <MdEmail size={24} color="pink" /> :</strong> {mentor.email}</p>
      <p className="mentor-phone"><strong>
      
      <FaWhatsapp size={24} color="pink" />:</strong> {mentor.phone}</p>
      <p className="mentor-summary"><strong><HiOutlineDocumentReport size={40} color="pink" /> {/* Report Icon */}   
      :</strong> {mentor.summary}</p>

      <nav class="navbar">
      <div class="navbar-container">
      <div className='imageQueen'>
          <img src={myImage} alt="תמונת רקע להתחברות" className="background-image" />
          </div> 
       
        <ul class="navbar-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <div className="lang">
          <li><a href="#">&emsp; &emsp;&emsp; &emsp;Hebrew | Arabic</a>
          &emsp;&emsp;&emsp; <FiMenu size={30} color="white" /></li>
          </div> 
        
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default OneMentor;



