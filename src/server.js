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
  try{
    res.send(users);
  }
  catch(err){
    res.status(500).send({message: err.message});
  }
});


app.get('/mentor/:id', (req, res) => {
  try{
    let found
    const userId = Number(req.params.id);
    console.log(userId);
    found = users.find(user =>
      user.id === userId
    )
    console.log(found);
    res.send(found);
  } catch(err){
    res.status(500).send({message: err.message});
  }
});


app.get('/mentorFilter', (req, res) => {
  try{
    let filtered = users
    const searchFilter = req.query.searchFilter.toLowerCase();
    if (searchFilter){
      filtered = users.filter(user =>
        Object.values(user).some(value =>
          typeof value === 'string' && value.toLocaleLowerCase().includes(searchFilter)
          )
        )
    }
    res.send(filtered);
  } catch(err){
    res.status(500).send({message: err.message});
  }
});


app.get('/', (req, res) => {
  // res.send('Anything else');
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});