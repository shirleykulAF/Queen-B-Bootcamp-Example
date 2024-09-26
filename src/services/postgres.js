require("dotenv").config();
const pg = require("pg");

const PG_NOT_INITIALIZED = "Postgres not initialized";

const state = {};

async function connCheck() {
  if (!state.pool) {
    return { ok: false, err: new Error("Connection pool is null") };
  }

  try {
    await state.pool.query("SELECT NOW()");
    return { ok: true };
  } catch (err) {
    return { ok: false, err };
  }
}

async function init() {
  const pgParams = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
  };
  state.pool = new pg.Pool(pgParams);

  const connCheckResult = await connCheck();
  if (connCheckResult.ok) {
    console.log("Successfully connected to postgres");
  } else {
    console.log("Failed to connect to postgres", {
      ...pgParams,
      password: pgParams.password ? "*****" : false,
    });
  }

  return connCheckResult;
}

async function runSingleQuery(query, params) {
  if (!state.pool) {
    return { ok: false, msg: PG_NOT_INITIALIZED };
  }

  try {
    const { rows } = await state.pool.query(query, params);
    return { ok: true, rows };
  } catch (err) {
    return { ok: false, err };
  }
}

async function getClient() {
  try {
    return state.pool.connect();
  } catch (err) {
    return { ok: false };
  }
}

async function getAllMentors(userId, accountId) {
  const result = await runSingleQuery(`SELECT * from mentors`);

  if (!result.ok) {
    return result;
  }

  return { ok: true, data: result.rows };
}

async function getAllMentors(userId, accountId) {
  const result = await runSingleQuery(`SELECT * from mentors`);

  if (!result.ok) {
    return result;
  }

  return { ok: true, data: result.rows };
}

async function createUser(userId, accountId) {
  const result = await runSingleQuery(
    `INSERT INTO users (id, name) VALUES ($1, $2)`
  );

  if (!result.ok) {
    return result;
  }

  return { ok: true, data: result.rows };
}

async function createMentor(data) {
  const query = `
    INSERT INTO mentors 
      (name, email, phone_number, linkedin_url, profile_photo, about, position, experience, company, geographical_location, programming_languages)
    VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *;
  `;

  const values = [
    data.fullName,
    data.email,
    data.phoneNumber,
    data.linkedinURL,
    data.photo,
    data.about,
    data.role,
    data.yearsOfExperience,
    data.company,
    data.location,
    `{${data.expertise.split(",").join(",")}}`,
  ];

  try {
    const result = await runSingleQuery(query, values);

    if (result && result.rows && result.rows.length) {
      return { ok: true, data: result.rows[0] };
    }
    return { ok: false, error: "No rows returned" };
  } catch (error) {
    console.error("Error creating mentor:", error);
    return { ok: false, error };
  }
}

async function createUser(email, password, type) {
  const query = `
    INSERT INTO users 
      (email, password, type)
    VALUES 
      ($1, $2, $3)
    RETURNING *;
  `;

  const values = [email, password, type];

  console.log("values: ", values);
  try {
    const result = await runSingleQuery(query, values);

    if (result && result.rows && result.rows.length) {
      return { ok: true, data: result.rows[0] };
    }
    return { ok: false, error: "No rows returned" };
  } catch (error) {
    console.error("Error creating user:", error);
    return { ok: false, error };
  }
}

async function findUserByEmail(email) {
  const query = `
  SELECT * FROM users WHERE LOWER(email) = LOWER($1)
`;

  const values = [email];

  try {
    const result = await runSingleQuery(query, values);

    if (result.rows.length > 0) {
      return result.rows[0]; // first user found
    }
    return null;
  } catch (error) {
    console.error("Error in find User By Email:", error);
    throw error;
  }
}

async function getPasswordOfUser(email) {
  const query = `
  SELECT password FROM users WHERE email = $1
`;
  const values = [email];

  try {
    const result = await runSingleQuery(query, values);

    if (result.rows.length > 0) {
      return result.rows[0].password;
    }
    return { ok: false, error: "No rows returned" };
  } catch (error) {
    console.error("Error in get Password Of User:", error);
    throw error;
  }
}

module.exports = {
  init,
  createMentor,
  connCheck,
  getAllMentors,
  createUser,
  getAllMentors,
  createUser,
  findUserByEmail,
  getPasswordOfUser,
};
