require("dotenv").config();

const db = {
  port: process.env.DB_PORT || 27017,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  collection: process.env.DB_COLLECTION,
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
};

module.exports = {
  db,
};
