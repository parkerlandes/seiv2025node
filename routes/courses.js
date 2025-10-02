const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const dbConfig = require('../db.config.js');

// Create MySQL connection
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

// GET /courses - return all courses as JSON
router.get('/', (req, res) => {
  const query = 'SELECT * FROM courses'; // make sure your table is named 'courses'
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching courses:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);
  });
});

module.exports = router;


