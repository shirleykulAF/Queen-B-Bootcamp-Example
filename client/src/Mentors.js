import React, { useState,useEffect } from 'react';
import './index.css'; 
import myImage from './images/logo2.png';
import { FiMenu } from "react-icons/fi";






import axios from 'axios';


import { Link } from 'react-router-dom';
import person1 from './images/person1.svg';
import person2 from './images/person2.svg';
import person3 from './images/person3.svg';
import person4 from './images/person4.svg';
// import person5 from './images/person5.svg';
// import person6 from './images/person7.svg';
// import person7 from './images/person7.svg';

// const mentorsData = [
//   { name: 'נועה קירל', skills: ['JAVA SCRIPT'], image: person1 },
//   { name: 'אנה זק', skills: ['CSS'], image: person2 },
//   { name: 'נינט טייב', skills: ['HTML'], image: person3 },
//   { name: 'מירי מסיקה', skills: ['HTML'], image: person4 },
//   { name: 'אגם בוחבוט', skills: ['JAVA SCRIPT'], image: person5 }
// ];
const arr= [person1,person2,person3,person4]
let i=0

const Mentors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data,setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:${5001}/api/mentors`)

      .then(response => {
        setData(response.data)}) // Set the rows in state
      .catch(error => console.error(`There was an error retrieving the message: ${error}`))
  },[])






  const filteredMentors = data.filter(mentor =>
    mentor.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    //  ||
    // mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="mentors-container">
      <div className="search-bar" style={{ backgroundColor: '#f0f0f0', padding: '2px' }}>  
        <input
          type="text"
          placeholder="חפשי מנטורית לפי שם או מקצוע"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mentors-grid">
        {filteredMentors.map(mentor => (
          <Link to={`/one-mentor/${mentor.first_name}`} key={mentor.first_name} className="mentor-card">
            <img src={arr[i++%4]} alt={mentor.first_name} />
            <h3>{mentor.first_name} {mentor.last_name}</h3> 
            <ul>
                <li>{mentor.language} </li>
            </ul>
          </Link>
        ))}
      
      </div> 
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

export default Mentors;




// <ul>
// {mentor.skills.map(skill => (
//   <li key={skill}>{skill}</li>
// ))}
// </ul>