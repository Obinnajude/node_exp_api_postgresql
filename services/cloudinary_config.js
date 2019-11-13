const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'hiq2ruku6',
  api_key: '256464275878118',
  api_secret: '***************************'
});

module.exports = cloudinary;
