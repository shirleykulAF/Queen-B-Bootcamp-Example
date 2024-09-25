const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5001;

/*
CORS (Cross-Origin Resource Sharing) is a browser security feature that restricts
cross-origin HTTP requests with other servers and specifies which domains access your resources.
We will use this Node.js package to allow cross-origin requests.
 */
app.use(cors());
app.use(express.json());
// enables the server to serve the client app without running it
app.use(express.static(path.join(__dirname, '../client/build')));

const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Op1234',
    port: 5432,
});


client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

//this post is working good and add successfully the mentor to the database.
app.post('/mentors', (req, res) => {

  const { fullName, email, phoneNumber, linkedinProfile, aboutMe, technologies } = req.body;
  // להוסיף פה בדיקה של אם אימייל כב קיים במערכת אז להחזיר שגיאה
  client.query('INSERT INTO mentors (full_name, email, phone_number, linkedin_url, about_me, technologies) VALUES ($1, $2, $3, $4, $5, $6)', [fullName, email, phoneNumber, linkedinProfile, aboutMe, technologies])
  .then(() => {
    res.status(201).send('Mentor added!');
  })
  .catch(err => {
    console.error('Error executing query', err.stack);
    res.status(500).send('Error adding mentor');
  });
  
});

//this get is working good - returns all the entries in the mentors table.
app.get('/mentors', (req, res) => {
  client.query('SELECT * FROM mentors')
    .then((result) => {
      const formattedMentors = result.rows.map(mentor => {
        // Log the raw technologies for debugging
        //console.log('Raw technologies:', mentor.technologies); 
        
        // Replace curly braces with square brackets and then parse
        const techString = mentor.technologies
          .replace(/{/g, '[') // Replace opening brace with opening bracket
          .replace(/}/g, ']'); // Replace closing brace with closing bracket

        let technologiesArray = [];
        try {
          technologiesArray = JSON.parse(techString); // Parse to array
        } catch (error) {
          console.error('Error parsing technologies:', error);
        }

        return {
          ...mentor,
          technologies: technologiesArray // Set the parsed array
        };
      });
      res.status(200).json(formattedMentors); // Send the formatted data as JSON
    })
    .catch(err => {
      console.error('Error executing query', err.stack);
      res.status(500).send('Error getting mentors');
    });
});


/*
//this get is to return a mentors by name - still not working
//and also need to change the name to email.
app.get('/mentors', (req, res) => {
  const { name } = req.query;
  console.log(name);
  client.query('SELECT * FROM mentors WHERE full_name = $1', [name])
  .then((result) => {
    res.status(200).send(result.rows);
  })
  .catch(err => {
    console.error('Error executing query', err.stack);
    res.status(500).send('Error getting mentors');
  });
});
*/


  

