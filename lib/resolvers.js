"use strict";

const courses = [
  {
    _id: "anyid1",
    title: "Mi titulo 1",
    teacher: "Mi profesor",
    description: "una descripcion",
    topic: "programacion",
  },
  {
    _id: "anyid2",
    title: "Mi titulo 2",
    teacher: "Mi profesor",
    description: "una descripcion",
    topic: "programacion",
  },
  {
    _id: "anyid3",
    title: "Mi titulo 3",
    teacher: "Mi profesor",
    description: "una descripcion",
    topic: "programacion",
  },
];

module.exports = {
  Query: {
    getCourses: () => courses,
    getCourse: (root, args) => {
      const course = courses.filter((course) => course._id === args.id);
      return course.pop();
    },
  },
};
