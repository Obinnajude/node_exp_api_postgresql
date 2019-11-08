const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v2/', adminRoute);
module.exports = app;
