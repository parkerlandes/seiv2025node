const db = require("../models");
const course = db.course;
const Op = db.Sequelize.Op;
// Create and Save a new course
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a course match exactly to the database attributes
  const courseData = {
    name: req.body.name,
    courseNum: req.body.courseNum,
    hours: req.body.hours,
    courseLevel: req.body.courseLevel,
    dept: req.body.dept,
    description: req.body.description,
  };
  // Save course in the database
  course.create(courseData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the course."
      });
    });
};

// Retrieve all courses from the database.
exports.findAll = (req, res) => {
  const courseId = req.query.courseId;
  var condition = courseId ? {
    courseId: {
      [Op.like]: `%${courseId}%`
    }
  } : null;

  course.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving courses."
      });
    });
};

// Find a single course with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  course.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find course with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving course with id=" + id
      });
    });
};

// Find courses by hours
exports.findByHours = (req, res) => {
  const hours = req.params.hours;
  course.findAll({ where: { hours: hours } })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find courses with hours=${hours}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving courses with hours=" + hours
      });
    });
};

// Find courses by courseNum
exports.findByCourseNum = (req, res) => {
  const courseNum = req.params.courseNum;
  course.findAll({ where: { courseNum: courseNum } })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find courses with courseNum=${courseNum}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving courses with courseNum=" + courseNum
      });
    });
};

// Find courses by name
exports.findByName = (req, res) => {
  const name = req.params.name;
  course.findAll({ where: { title: name } })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find courses with name=${name}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving courses with name=" + name
      });
    });
};

// Find courses by dept
exports.findByDept = (req, res) => {
  const dept = req.params.dept;
  course.findAll({ where: { dept: dept } })
    .then(data => {
      if (data.length > 0) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No courses found with dept=${dept}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving courses with dept=" + dept
      });
    });
};

// Find courses by level
exports.findByLevel = (req, res) => {
  const courseLevel = req.params.courseLevel;
  course.findAll({ where: { courseLevel: courseLevel } })
    .then(data => {
      if (data.length > 0) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No courses found with level=${courseLevel}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving courses with level=" + courseLevel
      });
    });
};
// Update a course by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  course.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "course was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update course with id=${id}. Maybe course was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating course with id=" + id
      });
    });
};

// Delete a course with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  course.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "course was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete course with id=${id}. Maybe course was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete course with id=" + id
      });
    });
};

// Delete multiple courses by their IDs
exports.deleteMany = (req, res) => {
  const ids = req.body.ids;

  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).send({ message: "No course IDs provided for deletion." });
  }

  course.destroy({
    where: { id: ids }
  })
    .then((numDeleted) => {
      res.send({ message: `${numDeleted} courses deleted successfully.` });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        message: err.message || "Error deleting courses."
      });
    });
};


// Delete all courses from the database.
exports.deleteAll = (req, res) => {
  course.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} courses were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all courses."
      });
    });
};