import { useState } from "react";
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
    alert((JSON.stringify(mentor)));
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
