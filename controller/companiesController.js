const constants = require('../constants');
const auth = require('../helper/authhelper');
const apihelper=require("../helper/apihelper");
const { regexpToText } = require('nodemon/lib/utils');
module.exports.getcompanies = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const authResponse = await auth.getToken(auth.tokenRequest);
    const token=authResponse.accessToken;
    const url=auth.apiConfig.uri+"/companies";   
    const company=await apihelper.GetApi(url,token);
    response.status = 200;
    response.message = "token Created";
    response.body = company;
  } catch (error) {
    console.log('Something went wrong: CompanyController: getCompany', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}
module.exports.getcompany = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const authResponse = await auth.getToken(auth.tokenRequest);
    const token=authResponse.accessToken;
    const url=auth.apiConfig.uri+"/companies/"+req.params.id;   
    const company=await apihelper.GetApi(url,token);
    response.status = 200;
    response.message = "token Created";
    response.body = company;
  } catch (error) {
    console.log('Something went wrong: CompanyController: getCompany', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}