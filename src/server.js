const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
const routes = require('./routes/userRoutes.js');
const pgConnector = require('./services/postgres');
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

app.use(routes);

// connect to Postgres
pgConnector.init();

app.get('*', (req, res) => {
  // res.send('Anything else');
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});