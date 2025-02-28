const axios = require('axios');
const makeRequest = require('./task3');

jest.mock('axios');

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Test requests.', () => {
    test('Test successful requests.', async () => {
        axios.get.mockResolvedValue({
            data: [{ message: 'Welcome to Hillel!' }]
        });
        let response = await makeRequest();
        expect(response[0].message).toContain('Welcome to Hillel!');
    })

    test('Test number of calls.', async () => {
        axios.get.mockResolvedValue({});

        await makeRequest();

        expect(axios.get).toHaveBeenCalledTimes(1);
    })

    test('Test failed requests', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'));
        await expect(makeRequest()).rejects.toThrow('Oops, something went wrong: Network Error');
    })

    test('tests error with async/await and rejects', async () => {
        expect.assertions(1);

        axios.get.mockRejectedValue(new Error('Request failed with status code 500'));

        await expect(makeRequest()).rejects.toEqual(new Error('Oops, something went wrong: Request failed with status code 500'));
    });
});