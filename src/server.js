const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5001;
const users = require('./users_data');

app.use(cors());
app.use(express.json());
// enables the server to serve the client app without running it
app.use(express.static(path.join(__dirname, '../client/build')));

//first param is the url adress the client calls/sends massage to
app.get('/mentor', (req, res) => {
  res.send(users);
});


// app.get('/mentor/:id', (req, res) => {
//   const usersById = users.filter(item => item.name === req.params.id);
//   res.send(usersById);
// });

app.get('/*', (req, res) => {
  // res.send('Anything else');
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});