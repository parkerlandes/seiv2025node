module.exports = app => {
  const courses = require("../controllers/course.controller.js");
  var router = require("express").Router();
  
  //filters for the courses

  // Retrieve all courses
  router.get("/", courses.findAll);
  // Retrieve a single course with id
  router.get("/:id", courses.findOne);
  // Retrieve courses by hours
  router.get("/h/:hours", courses.findByHours);
  //retrieve courses by courseId
  router.get("/c/:courseNum", courses.findByCourseNum);
  //retrieve courses by name 
  router.get("/n/:name", courses.findByName);
  //retreive courses by dept
  router.get("/d/:dept", courses.findByDept);
  //retrieve courses by level
  router.get("/l/:courseLevel", courses.findByLevel);
  // Create a new course
  router.post("/", courses.create);
  // Update a course with id
  router.put("/:id", courses.update);
  // Multi-delete route (by IDs)
  router.delete("/multi", courses.deleteMany);
  // Delete a course with id
  router.delete("/:id", courses.delete);
  //delete all courses
  router.delete("/", courses.deleteAll);

  app.use('/course-t9/courses', router);
};