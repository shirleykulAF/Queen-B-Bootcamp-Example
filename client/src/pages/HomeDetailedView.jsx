import React, { useState, useEffect } from 'react';
import MiniMentor from '../components/MiniMentor/MiniMentor';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import './HomeDetailedView.css';

const port = process.env.PORT || 5001;

function HomeDetailedView(){
    const [message, setMessage] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
  
     useEffect(() => {
       // Initialliztion :
      axios.get(`http://localhost:${port}/mentor`)
      .then(response => {
        setMessage(response.data)
      })
      .catch(error => {
        console.error(`There was an error retrieving the message: ${error}`)
      })
    }, []);
  
    useEffect(() => {
      // Applying search filter
      const fetchUsers = (searchFilter) => {
        axios.get(`http://localhost:${port}/mentorFilter?searchFilter=${searchFilter}`)
        .then(response => {
          setMessage(response.data)
        })
        .catch(error => {
          console.error(`There was an error retrieving the message: ${error}`)
        })
      };
      fetchUsers(searchFilter);
    }, [searchFilter])
  
  
    const handleSearch = (input) => {
      setSearchFilter(input.target.value);
    }
  
      // the first web page
      return (
        <div className="App">
        <br/>
            <header className='head'>
                <div className="boxCover"> 
                    <input
                        type = 'text'
                        placeholder='Search for your mentor :)'
                        value={searchFilter}
                        onChange={handleSearch}
                        required
                    />
                </div>
            </header>

          {/* <input
            type = 'text'
            placeholder='Search...'
            value={searchFilter}
            onChange={handleSearch}
          /> */}
          <br/>
          <br/>
          
          <MiniMentor users={message} />
          <Footer/>


          
        </div>



    );
  }

export default HomeDetailedView;