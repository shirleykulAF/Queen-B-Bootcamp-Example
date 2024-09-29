const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5001;
const startMentors = require('./mentors');
const startUsers = require('./users');

const { Client } = require('pg');

const startServer = async () => {
  app.use(cors());
  app.use(express.json());
  // enables the server to serve the client app without running it
  app.use(express.static(path.join(__dirname, '../client/build')));

    const DB = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'postgres',
      password: 'Op1234',
      port: 5432,
  });

  DB.connect()
      .then(() => console.log('Connected to the database'))
      .catch(err => console.error('Connection error', err.stack));
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

  startMentors(app, DB);
  startUsers(app, DB);

};

startServer();
