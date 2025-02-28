const axios = require('axios');

async function makeRequest() {
    try {
        const response = await axios.get('https://blog.ithillel.ua/courses');
        return response.data;
    }
    catch (error) {
        throw new Error('Oops, something went wrong.');
    }
}

module.exports = makeRequest;
