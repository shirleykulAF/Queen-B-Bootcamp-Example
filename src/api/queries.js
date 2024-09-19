// get all users
const getAllUsers = "SELECT * FROM users";

// get all mentors
const getMentors = `
      SELECT
        m.email,
        m.first_name,
        m.last_name,
        m.phone_number,
        m.linkedin,
        STRING_AGG(l.programming_language, ', ') AS programming_languages
      FROM
          mentors m
      LEFT JOIN
          languages l
      ON
          m.email = l.email
      GROUP BY
          m.email
      ORDER BY
          m.email;
    `;

// check if already email exists
const checkEmail = "SELECT * FROM users WHERE email = $1";

// create new mentor account
const createMentor =
  "INSERT INTO mentors (email, first_name, last_name, phone_number, linkedin) VALUES ($1, $2, $3, $4, $5);";

// add mentor languages
const addMentorLangs =
  "INSERT INTO languages (email, programming_language) VALUES ($1, $2);";

// delete account from mentors table
const deleteMentor = "DELETE FROM mentors WHERE email = $1";

// delete account from users table
const deleteMentorsFromUsers = "DELETE FROM users WHERE email = $1";

// update mentor details
const updateMentor =
  "UPDATE mentors SET first_name = $1, last_name = $2, phone_number = $3, linkedin = $4 WHERE email = $5;";

const signup =
  "INSERT INTO users (email, password, userType) VALUES ($1, $2, $3);";

const login = "SELECT * FROM users WHERE email = $1";

const getMentorDetailsByEmail = "SELECT * FROM mentors WHERE email = $1";

module.exports = {
  getAllUsers,
  getMentors,
  checkEmail,
  createMentor,
  deleteMentor,
  addMentorLangs,
  updateMentor,
  signup,
  login,
  getMentorDetailsByEmail,
  deleteMentorsFromUsers,
};
