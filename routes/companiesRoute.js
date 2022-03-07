const express = require('express');
const router = express.Router();
const companyController = require('../controller/companiesController');
const customersController=require("../controller/customersController")
//get companies
router.get('/', 
  companyController.getcompanies
);
//get companies by id
router.get('/:id', 
  companyController.getcompany
);
// get company customers
router.get('/:id/customers', 
  customersController.getcustomers
);
//get company customer by id
router.get('/:id/customers/:customerid', 
  customersController.getcustomer
);
//create company customer
router.post('/:id/customers/', 
  customersController.create
);
//update company customer
router.patch('/:id/customers/:customerid', 
  customersController.update
);
//delete company customer
router.delete('/:id/customers/:customerid', 
  customersController.Delete
);
module.exports = router;