"use strict";

const MongoClient = require("mongodb").MongoClient;
const { db } = require("./config");

const { DB_USER, DB_PASSWD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const mongoUrl = `mongodb+srv://db_user_platzidir:${DB_PASSWD}@cluster0.qbylt.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

// ======= TEST 01

// let connection;

// async function connectDB() {
//   if (connection) return connection;
//   const client = new MongoClient(mongoUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   try {
//     client.connect((err) => {
//       const collection = client.db("db_user_platzidir").collection("courses");
//       // perform actions on the collection object
//       client.close();
//     });

//     await client.connect();
//     connection = client.db(DB_NAME);
//   } catch (error) {
//     // perform actions on the collection object
//     client.close();
//     console.error("Couln't connect to db", mongoUrl, error);
//     process.exit(1);
//   }

//   return connection;
// }

// module.exports = connectDB;

// ======= TEST 02

// const MongoClient = require("mongodb").MongoClient;
// const { db } = require("./config");

// //ENV variable from config
// const USER = encodeURIComponent(db.username);
// const PASSWORD = encodeURIComponent(db.password);
// const DB_NAME = db.name;
// const DB_HOST = db.host;

// const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// class MongoLib {
//   constructor() {
//     this.client = new MongoClient(mongoUrl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     this.dbName = DB_NAME;
//   }

//   connect() {
//     if (!MongoLib.connection) {
//       MongoLib.connection = new Promise((resolve, reject) => {
//         this.client.connect((err) => {
//           if (err) {
//             reject(err);
//           } else {
//             console.log("Connecte succesfully to mongo");
//             resolve(this.client.db(this.dbName));
//           }
//         });
//       });
//     }
//     return MongoLib.connection;
//   }
// }

// module.exports = MongoLib;

// ======= TEST 03

// const db = require("mongoose");
// // const { DB_USER, DB_PASSWD, DB_HOST, DB_PORT, DB_NAME } = process.env;

// db.Promise = global.Promise;
// // const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}`;

// async function connectDB() {
//   try {
//     await db.connect(mongoUrl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   } catch (error) {
//     console.error(error);
//     const collection = client.db("platzidir_db").collection("courses");
//   }
//   console.log("[db] Conectada con éxito");
// }

// module.exports = connectDB;

// ======= TEST 04

let connection;

async function connectDB() {
  if (connection) return connection;
  const client = new MongoClient(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect((err) => {
    const collection = client.db("db_user_platzidir").collections("courses");
    // perform actions on the collection object
    client.close();
  });

  return connection;
}

module.exports = connectDB;

// ======= TEST 05
