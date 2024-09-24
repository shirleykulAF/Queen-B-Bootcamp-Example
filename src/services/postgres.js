const pg = require('pg');

const PG_NOT_INITIALIZED = 'Postgres not initialized';

const state = {};

async function connCheck() {
  if (!state.pool) {
    return { ok: false, err: new Error('Connection pool is null') };
  }

  try {
    await state.pool.query('SELECT NOW()');
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
    database: process.env.POSTGRES_DB
  };
  state.pool = new pg.Pool(pgParams);

  const connCheckResult = await connCheck();
  if (connCheckResult.ok) {
    console.log('Successfully connected to postgres' );
  } else {
    console.log("Failed to connect to postgres",
      { ...pgParams, password: pgParams.password ? '*****' : false }
    );
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


async function getAllUsers(userId, accountId) {
  const result = await runSingleQuery(
    `SELECT * from users`
  );

  if (!result.ok) {
    return result;
  }

  return { ok: true, data: result.rows };
}

async function createUser(userId, accountId) {
  const result = await runSingleQuery(
    `INSERT INTO users (id, name) VALUES ($1, $2)`,
  );

  if (!result.ok) {
    return result;
  }

  return { ok: true, data: result.rows };
}



module.exports = {
  init,
  connCheck,
  getAllUsers,
  createUser
};
