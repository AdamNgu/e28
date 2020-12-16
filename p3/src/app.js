export const axios = require('axios').create({
    baseURL: 'http://e28-api.adamnguyen.me',
    // baseURL: 'http://e28-api.adamnguyen.me',
    responseType: 'json',
    withCredentials: true

})