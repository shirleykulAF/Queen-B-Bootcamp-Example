const startUsers = (app, client) => {
    // GET all users
    app.get('/users', (req, res) => {
      client.query('SELECT * FROM users')
        .then((result) => {
          const formattedUsers = result.rows.map(user => ({
            username: user.username,
            // Exclude password for security reasons
          }));
          res.status(200).json(formattedUsers); // Send the formatted data as JSON
        })
        .catch(err => {
          console.error('Error executing query', err.stack);
          res.status(500).send('Error getting users');
        });
    });
  
    // Login check endpoint
    app.get('/login', (req, res) => {
      const { username, password } = req.query; // Get username and password from query params
  
      // Query to find the user
      client.query('SELECT * FROM users WHERE username = $1', [username])
        .then(result => {
          if (result.rows.length === 0) {
            // User not found
            return res.status(401).send('Invalid credentials: User not found');
          }
  
          const user = result.rows[0];
          console.log('user.password :', user.password );
          console.log('password:', password);
  
          // Check if the password matches (hashing not implemented here for simplicity)
          if (user.password !== password) {
            return res.status(401).send('Invalid credentials: Incorrect password');
          }
  
          // Successful login
          res.status(200).send('Login successful');
        })
        .catch(err => {
          console.error('Error executing query', err.stack);
          res.status(500).send('Error logging in');
        });
    });
  };
  
  module.exports = startUsers;

  