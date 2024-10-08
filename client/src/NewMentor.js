import React, { useState, useRef } from 'react';
import myImage from './images/logo2.png';
import { FiMenu } from "react-icons/fi";




const NewMentor = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    programmingLanguage: '',
    linkedinUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('נתוני המנטורית החדשה:', formData);
    alert("Welcome! Thank you for joining the mentorship group🥳");
    formRef.current.reset();
    setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            programmingLanguage: '',
            linkedinUrl: ''
    });
    
  };

  return (
    <div className="new-mentor-form">
      <h2>Register New Mentor   </h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">firstName :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Enter first name" 
          />
        </div>
        <div>
          <label htmlFor="lastName">lastName :</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
             placeholder="Enter last name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone - Number :</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="XXX-XXX-XXXX"
          />
        </div>
        <div>
          <label htmlFor="programmingLanguage">Programming Language :</label>
          <select
            id="programmingLanguage"
            name="programmingLanguage"
            value={formData.programmingLanguage}
            onChange={handleChange}
            required
          >
            <option value="">Choose Programming Language </option>
            <option value="javascript">JavaScript</option>
            <option value="Html">Html</option>
            <option value="Css">Css</option>
          </select>
        </div>
        <div>
          <label htmlFor="linkedinUrl"> LinkedIn Url:</label>
          <input
            type="url"
            id="linkedinUrl"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleChange}
            required
           placeholder="Linkedin Url"
          />
        </div>
        <button onClick={handleSubmit}>Subbmit</button>
      </form>
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

export default NewMentor;