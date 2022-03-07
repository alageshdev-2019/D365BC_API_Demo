const express = require('express');
const router = express.Router();
const customerController = require('../controller/customersController');


router.get(':companyid/customers', 
  customerController.getCuteomers
);


module.exports = router;