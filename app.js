const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// const multer = require('multer');
const adminRoute = require('./routes/admin');
const signInRoute = require('./routes/signin');
const employeeRoutes = require('./routes/employee');

// const upload = multer();

const app = express();
// app.use(upload.array());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/', adminRoute);
app.use('/api/v1/', signInRoute);
app.use('/api/v1/', employeeRoutes);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/index.html'));
});
app.get('/api/v1', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/index.html'));
});

module.exports = app;
