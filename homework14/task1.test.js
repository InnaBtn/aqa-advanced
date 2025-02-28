const makeRequest = require('./task1');
const axios = require('axios')

describe('Test request', () => {
    test('Check the page.', async () => {
        await expect(makeRequest()).rejects.toThrow('Oops, something went wrong.');
    });
});
