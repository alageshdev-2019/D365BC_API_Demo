const msal = require('@azure/msal-node');
const msalConfig = {
	auth: {
		clientId: process.env.CLIENT_ID,
		authority: process.env.AAD_ENDPOINT + process.env.TENANT_ID,
		clientSecret: process.env.CLIENT_SECRET,
	}
};
const tokenRequest = {
	scopes: [process.env.GRAPH_ENDPOINT + '.default'],
};
const apiConfig = {
	uri: process.env.GRAPH_ENDPOINT + 'v2.0/'+process.env.TENANT_ID+'/production/api/v2.0/',
};


async function getToken(tokenRequest) {
 
    try {
        const cca = new msal.ConfidentialClientApplication(msalConfig);

	return await cca.acquireTokenByClientCredential(tokenRequest);
    } catch (error) {
        console.log("Token Error");
        console.log(error);
    }
   
}

module.exports = {
	apiConfig: apiConfig,
	tokenRequest: tokenRequest,
	getToken: getToken
};
