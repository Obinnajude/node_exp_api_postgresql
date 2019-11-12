const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const signInRoute = require('./routes/signin');
const employeeRoutes = require('./routes/employee');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v2/', adminRoute);
app.use('/api/v2/', signInRoute);
app.use('/api/v2/', employeeRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: `# node-exp-api-postgresql
    Capstone Project Api


    # Below are the endpoints for the api

    # POST / api / v2 / auth / create - user
    # POST / api / v2 / auth / signin
    # POST / api / v2 / gifs
    # POST / api / v2 / articles
    # PATCH / api / v2 / articles /<: articleId >
    # DELETE / api / v2 / articles /<: articleId >
    # DELETE / api / v2 / gifs /<: gifId >
    # POST / api / v2 / articles /<: articleId > /comment
    # POST / api / v2 / gifs /<: gifId > /comment
    # GET / api / v2 / feed
    # GET / api / v2 / articles /<: articleId >
    # GET / api / v2 / gifs /<: gifId >
   # To post gif and article or make comments login with the details below.remeber only admin can create user.
    email: test@gmail.com
  password: 12345
  `
  });
});
module.exports = app;
