const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.get('/gettoken', 
  authController.getToken
);

module.exports = router;