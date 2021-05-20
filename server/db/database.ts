const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv').config();
const host: string = process.env.host;
const database: string = process.env.database;
const password: string = process.env.password;
const username: string = process.env.username;
const db = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
  logging: false
});

db.authenticate()
  .then(() => console.info('CONNECTED TO DATABASE'))
  .catch((err = 'err') => console.warn('DB ERROR', err));

//first connection
