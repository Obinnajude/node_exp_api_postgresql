require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dk3oqlnyi',
  api_key: '363323351623495',
  api_secret: 'RseSIfWS5ynfOlb_JKW5TVGZoic'
});

module.exports = cloudinary;
