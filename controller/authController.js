const constants = require('../constants');
const auth = require('../helper/authhelper');
module.exports.getToken = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const authResponse = await auth.getToken(auth.tokenRequest);
    response.status = 200;
    response.message = "token Created";
    response.body = authResponse;
  } catch (error) {
    console.log('Something went wrong: AuthController: getToken', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}