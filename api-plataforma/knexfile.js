const dotenv = require('dotenv');

dotenv.config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: process.env.DB_CONNECTION || 'pg',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'plataforma_matematicas',
    user: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres'
  },
  migrations: {
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
};
