import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function SignInPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('technologies', technologies);
    formData.append('linkedIn', linkedIn);
    formData.append('photo', photo);

    axios.post('http://localhost:5001/api/signin', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(() => {
      navigate('/');  // Navigate back to the Welcome page after successful submission
    })
    .catch(error => console.error('There was an error submitting the form:', error));
  };

  return (
    <div className="sign-in-page">
      <h1>Sign In</h1>
      <form onSubmit={handleFormSubmit} className="sign-in-form">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <textarea
          placeholder="Known Technologies"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="LinkedIn Address"
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
          accept="image/*"
          required
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default SignInPage;
