const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({
  client: process.env.DB_CONNECTION || 'pg',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'plataforma_matematicas',
    user: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres'
  }
});

db.raw('SELECT 1')
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    db.destroy();
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    db.destroy();
  });
