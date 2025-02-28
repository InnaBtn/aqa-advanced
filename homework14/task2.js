const axios = require('axios');

async function headersRequest() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
            headers: {
                'Authorization': 'Bearer your-token',
                'Custom-Header': 'CustomValue',
                'X-Request-ID': '12345',
                'Content-Type': 'application/json',
                'X-Custom-Header': 'AnotherValue'
            },
            params: {
                'postId': 2,
            }
        });
        return response;
    } catch (error) {
        console.error('Error: ', error);
    }
}
module.exports = headersRequest;
