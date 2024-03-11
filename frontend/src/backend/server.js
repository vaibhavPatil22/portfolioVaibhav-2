// const express = require ('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');

// const app = express();
// const port = 3000;

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'vsp1338',
//   database: 'portfolio',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// app.use(bodyParser.json());

// app.post('/submit-form', (req, res) => {
//   const { user_name, user_email, message } = req.body;

//   pool.execute(
//     'INSERT INTO contacts (user_name, user_email, message) VALUES (?, ?, ?)',
//     [user_name, user_email, message],
//     (error, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('Form submitted successfully!');
//       }
//     }
//   );
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });








// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');

// const app = express();
// const port = 3001;

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'vsp1338',
//   database: 'portfolio',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// app.use(bodyParser.json());

// // Endpoint for submitting the form
// app.post('/submit-form', (req, res) => {
//   const { user_name, user_email, message } = req.body;

//   pool.execute(
//     'INSERT INTO contacts (user_name, user_email, message) VALUES (?, ?, ?)',
//     [user_name, user_email, message],
//     (error, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('Form submitted successfully!');
//       }
//     }
//   );
// });

// // Endpoint for retrieving all form submissions
// app.get('/get-form-submissions', (req, res) => {
//   pool.query('SELECT * FROM contacts', (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });









// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// Example of using MongoDB with Mongoose
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
// const Submission = mongoose.model('Submission', {
//   user_name: String,
//   user_email: String,
//   message: String
// });

// app.use(bodyParser.json());

// // Endpoint to handle form submissions
// app.post('/submit-form', (req, res) => {
//   const { user_name, user_email, message } = req.body;

//   const submission = new Submission({
//     user_name,
//     user_email,
//     message
//   });

//   submission.save()
//     .then(() => {
//       res.status(200).send({ message: 'Form submitted successfully!' });
//     })
//     .catch(error => {
//       console.error('Error saving form submission:', error);
//       res.status(500).send({ error: 'Internal server error' });
//     });
// });

// // Endpoint to fetch form submissions
// app.get('/get-form-submissions', (req, res) => {
//   Submission.find()
//     .then(submissions => {
//       res.status(200).send(submissions);
//     })
//     .catch(error => {
//       console.error('Error fetching form submissions:', error);
//       res.status(500).send({ error: 'Internal server error' });
//     });
// });

// app.listen(3001, () => {
//   console.log('Backend server is running on port 3001');
// });
