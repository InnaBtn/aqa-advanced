const axios = require('axios');

async function makeRequest() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
        return response.data;
    }
    catch (error) {
        throw new Error(`Oops, something went wrong: ${error.message}`);
    }
}

module.exports = makeRequest;
