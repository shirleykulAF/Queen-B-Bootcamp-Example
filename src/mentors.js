//this post is working good and add successfully the mentor to the database.
const startMentors = (app, client) => {
app.post('/mentors', (req, res) => {
    console.log('Incoming request:', req.body);  // Log the request


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
};

module.exports = startMentors;

  