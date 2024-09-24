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

app.post('/mentors', (req, res) => {

  const { fullName, email, phoneNumber, linkedinProfile, aboutMe, technologies } = req.body;
  
  client.query('INSERT INTO mentors (full_name, email, phone_number, linkedin_url, about_me, technologies) VALUES ($1, $2, $3, $4, $5, $6)', [fullName, email, phoneNumber, linkedinProfile, aboutMe, technologies])
  .then(() => {
    res.status(201).send('Mentor added!');
  })
  .catch(err => {
    console.error('Error executing query', err.stack);
    res.status(500).send('Error adding mentor');
  });
});

