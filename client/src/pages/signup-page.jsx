import { useEffect, useState } from "react";
import Select from 'react-select';
import './CreateNewMentor.css';

const options = [
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'Python', label: 'Python' },
  { value: 'Java', label: 'Java' },
  { value: 'C#', label: 'C#' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'Go', label: 'Go' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'C++', label: 'C++' },
  { value: 'C', label: 'C' },
  { value: 'Swift', label: 'Swift' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'Rust', label: 'Rust' },
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'SQL', label: 'SQL' },
  { value: 'React', label: 'React' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'linkedin', label: 'linkedin' },
  { value: 'CV', label: 'CV' },
];



const CreateNewMentor = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [technologies, setTechnologies] = useState([]);
  const full_name = 'Omer Penso';

 /* useEffect(() => {
    //fetch(`http://localhost:5001/mentors?name=${encodeURIComponent(full_name)}`)
    fetch(`http://localhost:5001/mentors`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch mentors');
        }
        return response.json();
      })
      .then((data) => {
        alert(JSON.stringify(data, null, 2));  // Alert the fetched mentors
      })
      .catch((error) => console.error('Error fetching mentors:', error));
  }, []);
  */

  const handleTechnologyChange = (selectedOptions) => {
    setTechnologies(selectedOptions || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mentor = {
      fullName,
      email,
      phoneNumber,
      linkedinProfile,
      aboutMe,
      technologies: technologies.map(option => option.value), 
    };
    
    //the post request is working good and add successfully the mentor to the database.
    fetch('http://localhost:5001/mentors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mentor),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('There was an error adding the mentor');
      }
     return response.text();
    }) 
    .then((data) => {
      alert(data);
      })
    .catch(error => console.error('There was an error adding the mentor', error));
   };
  

  return (
    <div className="create">
      <h2>Sign Up as a Mentor</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone Number:</label>
        <input
          type="tel"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label>LinkedIn Profile:</label>
        <input
          type="url"
          value={linkedinProfile}
          onChange={(e) => setLinkedinProfile(e.target.value)}
        />
        <label>About Me:</label>
        <textarea
          type="text"
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
        />
        <label>Technologies:</label>
        <Select
          options={options}
          isMulti = {true}
          value={technologies}
          onChange={handleTechnologyChange}
          isSearchable={true}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default CreateNewMentor;
