import React, { useState, useEffect } from 'react';
import MiniMentor from '../components/MiniMentor/MiniMentor';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const port = process.env.PORT || 5001;

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
    }, []);

    
    return(
        <div>
            <h1>Hello {message.name} </h1>
            <Footer/>
        </div>
    )

}


export default FocusMentor;