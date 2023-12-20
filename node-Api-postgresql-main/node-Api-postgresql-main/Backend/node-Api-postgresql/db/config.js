const { Pool } = require('pg');

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// module.exports = pool;
const connectionString = 'postgres://postgres:1122@localhost:5432/tester';

const pool = new Pool({
  connectionString: connectionString
});
module.exports = pool;