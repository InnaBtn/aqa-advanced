const axios = require('axios');
const headersRequest = require('./task2');

describe('Test request with headers.', () => {
    test('Data is returned.', async () => {
        const response = await headersRequest();
        expect(response.config.headers['Authorization']).toBe('Bearer your-token');
        expect(response.config.headers['Custom-Header']).toBe('CustomValue');
        expect(response.config.headers['X-Request-ID']).toBe('12345');
        expect(response.config.headers['Content-Type']).toBe('application/json');
        expect(response.config.headers['X-Custom-Header']).toBe('AnotherValue');
    });
});

