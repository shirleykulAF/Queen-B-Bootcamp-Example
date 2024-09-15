const pool = require("./db");
const queires = require("./queries");

// GET all mentors - Route ( /api/mentors)
const getMentors = (req, res) => {
  pool.query(queires.getMentors, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

//////// (below are optional) ////////

// check if already email exists
const checkEmail = async (eamil) => {
  try {
    const result = await pool.query(queires.checkEmail, [email]);
    return result.rows > 0;
  } catch (error) {
    throw error;
  }
};

// ADD new account- Route ( /api/mentors)
const addMentor = async (req, res) => {
  const {
    email,
    first_name,
    last_name,
    phone_number,
    linkedin,
    programming_language,
  } = req.body;
  try {
    const emailChecked = checkEmail(email);
    if (emailChecked) {
      res.status(400).send("Email already exists");
    } else {
      await pool.query(queires.createMentor, [
        email,
        first_name,
        last_name,
        phone_number,
        linkedin,
      ]);
      if (programming_language) {
        pool.query(queires.addMentorLangs, [email, programming_language]);
      }
      res.status(201).send("Account created successfully");
    }
  } catch (error) {
    throw error;
  }
};

// DELETE account - Route ( /api/mentors/:email)
const deleteMentor = async (req, res) => {
  const email = req.params.email;
  try {
    const emailChecked = checkEmail(email);
    if (!emailChecked) {
      res.status(400).send("Email does not exist");
    } else {
      await pool.query(queries.deleteMentor, [email]);
      res.status(200).send("Account deleted successfully");
    }
  } catch (error) {
    throw error;
  }
};

// PUT mentor details- Route (/api/mentors/:email)
const updateMentor = async (req, res) => {
  const {
    email,
    first_name,
    last_name,
    phone_number,
    linkedin,
    programming_language,
  } = req.body;
  try {
    const emailChecked = checkEmail(email);
    if (!emailChecked) {
      res.status(400).send("Email does not exist");
    } else {
      await pool.query(queries.updateMentor, [
        first_name,
        last_name,
        phone_number,
        linkedin,
        email,
      ]);
      if (programming_language) {
        pool.query(queries.addMentorLangs, [email, programming_language]);
      }
      res.status(200).send("Account updated successfully");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { getMentors, addMentor, deleteMentor, updateMentor };
