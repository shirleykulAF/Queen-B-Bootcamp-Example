const Pool= require ('pg').Pool;

const pool = new Pool({
    user: 'postgres',        // PostgreSQL username
    host: 'localhost',            // Host, typically localhost or your DB host
    database: 'postgres',    // Name of the PostgreSQL database
    password: '1234',    // Your PostgreSQL password
    port: 5432                    // Default PostgreSQL port
  });
  

  module.exports = pool;
  
  
  
  
  
  
  