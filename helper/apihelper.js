const axios = require('axios');

async function GetApi(endpoint, accessToken) {    
    const options = {
       headers: {           
            Authorization: `Bearer ${accessToken}`,
        }
    };
    try {
        const response = await axios.default.get(endpoint, options);
        console.log("API Etag")
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error)
        return error;
    }
}
async function CreateApi(endpoint, data, accessToken) {  
    console.log("calling create api")  
    const options = {
       headers: {           
            Authorization: `Bearer ${accessToken}`,
        }
    };
    try {
        const response = await axios.default.post(endpoint,data, options);
        if(response.status===200)
        {
            console.log()
        }
        return response.data;
    } catch (error) {
        console.log("calling create api error")  
        console.log(error)
        return error;
    }
}
async function UpdateApi(endpoint, data, accessToken) {  
    console.log("calling update api")  
      console.log("calling update data")  
        console.log(data)  
    const options = {
       headers: {           
            Authorization: `Bearer ${accessToken}`,
            'If-Match':'*'
        }
    };
    try {
        const response = await axios.default.patch(endpoint,data, options);       
        return response.data;
    } catch (error) {
        console.log("calling update api error")  
        console.log(error)          
        return error;
    }
}
async function DeleteApi(endpoint, accessToken) {  
    console.log("calling delete api")  
    const options = {
       headers: {           
            Authorization: `Bearer ${accessToken}`,
        }
    };
    try {
        const response = await axios.default.delete(endpoint, options);
        if(response.status===200)
        {
            console.log()
        }
        return response.data;
    } catch (error) {
        console.log("calling delete api error")  
        console.log(error)
        return error;
    }
}
module.exports = {   
    GetApi: GetApi, 
    CreateApi:CreateApi, 
    UpdateApi:UpdateApi,
    DeleteApi:DeleteApi
};