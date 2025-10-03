module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    dept: {
      type: Sequelize.STRING
    },
    courseNum: {
      type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    courseLevel: {
        type: Sequelize.INTEGER
    },
    hours: {
        type: Sequelize.INTEGER
    },
  });
  return Course;
};