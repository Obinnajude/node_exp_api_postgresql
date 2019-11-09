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
