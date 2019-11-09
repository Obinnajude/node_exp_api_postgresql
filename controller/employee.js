const jwt = require('jsonwebtoken');
const pool = require('../services/dbconfig');
const cloudinary = require('../services/cloudinary_config');

exports.createGifs = (req, res) => {
  const { title, image } = req.body;
  const createdOn = new Date();
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'AM-HAPPY');
  const { userId } = decodedToken;
  cloudinary.uploader.upload(image).then((result) => {
    const imageUrl = result.secure_url;
    pool.query('INSERT INTO gifstb(title, imageUrl, createdOn, authorid)VALUES($1,$2,$3,$4) RETURNING gifId As id', [title, imageUrl, createdOn, userId]).then((results) => {
      res.status(201).json({
        status: "success",
        data: {
          gifId: results.rows[0].id,
          message: "GIF image successfully posted",
          createdOn,
          title,
          imageUrl
        }

      });
    }).catch(() => {
      res.status(400).json({
        status: "error",
        error: "Gif was not saved successfully to the database"
      });
    });
  }).catch(() => {
    res.status(400).json({
      status: "error",
      error: "Please there is a problem connecting to cloudinary "
    });
  });
};

exports.createArticle = (req, res) => {
  const { title, article } = req.body;
  const dateCreated = new Date();
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'AM-HAPPY');
  const { userId } = decodedToken;
  pool.query('INSERT INTO articletb(article_title,article_body, date_created, authorid)VALUES($1,$2,$3,$4)RETURNING article_id As id',
    [title, article, dateCreated, userId]).then((data) => {
    res.status(201).json({
      status: "success",
      data: {
        message: "article successfully posted",
        articleId: data.rows[0].id,
        createdOn: dateCreated,
        title,
        authorId: userId
      }
    });
  }).catch(() => {
    res.status(400).json({
      status: "error",
      error: "there is a problem posting your article"
    });
  });
};
