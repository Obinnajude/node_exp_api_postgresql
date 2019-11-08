const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const signInRoute = require('./routes/signin');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v2/', adminRoute);
app.use('/api/v2/', signInRoute);
module.exports = app;
