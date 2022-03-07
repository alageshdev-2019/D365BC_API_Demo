const constants = require('../constants');
const auth = require('../helper/authhelper');
const apihelper=require("../helper/apihelper");
module.exports.getcustomers = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const authResponse = await auth.getToken(auth.tokenRequest);
       const url=auth.apiConfig.uri+'/companies('+req.params.id+')/customers'; 
    const customer=await apihelper.GetApi(url,authResponse.accessToken);

    response.status = 200;
    response.message = "token Created";
    response.body = customer;
  } catch (error) {
    console.log('Something went wrong: AuthController: getToken', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}
module.exports.getcustomer = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const authResponse = await auth.getToken(auth.tokenRequest);
       const url=auth.apiConfig.uri+'/companies('+req.params.id+')/customers('+req.params.customerid+')'; 
    const customer=await apihelper.GetApi(url,authResponse.accessToken);

    response.status = 200;
    response.message = "token Created";
    response.body = customer;
  } catch (error) {
    console.log('Something went wrong: AuthController: getToken', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}
module.exports.create = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const authResponse = await auth.getToken(auth.tokenRequest);
       const url=auth.apiConfig.uri+'/companies('+req.params.id+')/customers'; 
    const customer=await apihelper.CreateApi(url,req.body,authResponse.accessToken);
    response.status = 200;
    response.message = "token Created";
    response.body = customer;
  } catch (error) {
    console.log('Something went wrong: AuthController: getToken', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}
module.exports.update = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const authResponse = await auth.getToken(auth.tokenRequest);
     const url=auth.apiConfig.uri+'/companies('+req.params.id+')/customers('+req.params.customerid+')'; 
    const customer=await apihelper.UpdateApi(url,req.body,authResponse.accessToken);
    response.status = 200;
    response.message = "token Created";
    response.body = customer;
  } catch (error) {
    console.log('Something went wrong: AuthController: getToken', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}
module.exports.Delete = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const authResponse = await auth.getToken(auth.tokenRequest);
     const url=auth.apiConfig.uri+'/companies('+req.params.id+')/customers('+req.params.customerid+')'; 
    const customer=await apihelper.DeleteApi(url,authResponse.accessToken);
    response.status = 200;
    response.message = "token Created";
    response.body = customer;
  } catch (error) {
    console.log('Something went wrong: AuthController: getToken', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}