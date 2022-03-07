const axios = require('axios');
const url = 'http://ballchasing.com/api/groups/macaroni-league-0p6avqc0gv'
const apiKey = ''
const options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Target-URL': 'https://ballchasing.com/api/',
          'crossorigin': true,
          'Authorization': apiKey,
        }

}

axios.get(url, options)
.then((res) => {
    let deez = JSON.stringify(res.data)
        console.log(deez)
})
.catch((error) => {
        console.log(apiKey)
        console.error(error)
        return error
})