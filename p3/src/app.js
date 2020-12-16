export const axios = require('axios').create({
    baseURL: 'http://e28-api.adamnguyen.loc',
    // baseURL: 'http://e28-api.adamnguyen.loc',
    responseType: 'json',
    withCredentials: true

})