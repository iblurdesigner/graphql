"use strict";
// ======= TEST 01

const connectDB = require("./db");
const { ObjectId } = require("mongodb");

module.exports = {
  Query: {
    getCourses: async () => {
      let db;
      let courses = [];
      try {
        db = await connectDB();
        courses = await db.collection("courses").find().toArray();
      } catch (error) {
        console.error(error);
      }

      return courses;
    },
    getCourse: async (root, { id }) => {
      let db;
      let course;
      try {
        db = await connectDB();
        course = await db.collection("courses").findOne({ _id: ObjectId(id) });
      } catch (error) {
        console.error(error);
      }
      return course;
    },
  },
};

// ======= TEST 02
// const DBconnect = require("./db");
// const { ObjectID } = require("mongodb");

// module.exports = {
//   Query: {
//     //Return all courses
//     getCourses: async () => {
//       try {
//         let db = await new DBconnect().connect();
//         let courses = await db.collection("courses").find().toArray();
//         //Return the data courses
//         return await courses;
//       } catch (error) {
//         console.log(error.message);
//       }
//     },
//     // Return a course
//     getCourse: async (root, { id }) => {
//       try {
//         let db = await new DBconnect().connect();
//         let course = await db
//           .collection("courses")
//           .findOne({ _id: ObjectID(id) });
//         //Return the data course
//         return await course;
//       } catch (error) {
//         console.log(error.message);
//       }
//     },
//   },
// };

// ======= TEST 03
// const connectDB = require("./db");

// let db;

// module.exports = {
//   Query: {
//     getCourses: async () => {
//       let courses = [];
//       try {
//         db = await connectDB();
//         courses = await db.connection.collection("courses").find().toArray();
//         return courses;
//       } catch (error) {
//         console.log(error);
//       }
//     },
//     getCourse: async (root, { id }) => {
//       let course;
//       db = await connectDB();
//       course = await db.connection
//         .collection("courses")
//         .findOne({ _id: db.Types.ObjectId(id) });
//       return course;
//     },
//   },
// };

// ======= TEST 04
// const connectDb = require("./db");
// // const { ObjectId } = require("mongodb");
// let db;
// module.exports = {
//   Query: {
//     getCourses: async () => {
//       let courses = [];
//       try {
//         db = await connectDb();
//         courses = await db.connection.collection("courses").find().toArray();
//         return courses;
//       } catch (error) {
//         console.log(error);
//       }
//     },
//     getCourse: async (root, { id }) => {
//       let course;
//       db = await connectDb();
//       course = await db.connection
//         .collection("courses")
//         .findOne({ _id: db.Types.ObjectId(id) });
//       return course;
//     },
//   },
// };
