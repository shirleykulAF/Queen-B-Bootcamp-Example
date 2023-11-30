import React, { useState, useEffect } from 'react';

// import MiniMentor from '../components/MiniMentor/MiniMentor';

import Footer from '../components/Footer/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import person1 from '../images/person1.svg';
import person2 from '../images/person2.svg';
import person3 from '../images/person3.svg';
import person4 from '../images/person4.svg';
import person5 from '../images/person5.svg';
import person6 from '../images/person6.svg';
import person7 from '../images/person7.svg';
import './FocusMentor.css';
import ContactLinks from '../components/ContactLinks/ContactLinks';
import backButton from './backButton.svg'

const port = process.env.PORT || 5001;

const imageMapper={
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
}

function FocusMentor(props){
    const [message, setMessage] = useState('');
    let {id} = useParams();
    console.log(id);
     useEffect(() => {
       // Initialliztion :
      axios.get(`http://localhost:${port}/mentor/${id}`)
      .then(response => {
        console.log(response.data);
        setMessage(response.data);
      })
      .catch(error => {
        console.error(`There was an error retrieving the message: ${error}`)
      })
    }, [id]);

    
    return(
      <>
      <br/>
        <a className="link-back" href="/">
              <img className="backButtom"src={backButton} alt="back"/>
        </a>
        <div className="back">
          
            <img className="focusedImg" src={imageMapper[message.image]} alt= {message.image}/>
            <h1 className="focusedName"> {message.name} </h1>
            <h3 className="focusedSkill"> {message.skill} </h3>
            <h3 className="focusedBold"> About {message.name} </h3>
            <p className="focusedPara">Graduated in {message.educationField} in {message.graduationYear}<br/>
             Works as a {message.jobTitle} at {message.jobCompany}<br/>
             Loves to {message.hobbyFirst} and {message.hobbySecond} in her free time </p>
             <h3 className="focusedBold"> Contact {message.name} </h3>
            <ContactLinks mentor = {message}/>
        </div>
        <Footer/>
        </>
    )

}


export default FocusMentor;