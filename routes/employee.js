const express = require('express');
const employeeCtrl = require('../controller/employee');
const auth = require('../middleware/auth');

const router = express.Router();
router.post('/gifs', auth, employeeCtrl.createGifs);
router.post('/articles', auth, employeeCtrl.createArticle);
router.patch('/articles/:articleId', auth, employeeCtrl.editArticle);

module.exports = router;
