const axios = require('axios')

describe('Tests with GET and POST for JSONPlaceholder API.', () => {
    beforeAll(() => {
        axios.interceptors.request.use(function (config) {
            console.log('Request:', config);
            return config;
        }, function (error) {
            console.error('Request error:', error);
            return Promise.reject(error);
        });

        axios.interceptors.response.use(function (response) {
            console.log('Response:', response);
            return response;
        }, function (error) {
            console.error('Response error:', error);
            return Promise.reject(error);
        });
    });

    test('Get all posts.', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        expect(response.status).toEqual(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
        response.data.forEach((post) => {
            expect(post).toHaveProperty('userId');
            expect(post).toHaveProperty('id');
            expect(post).toHaveProperty('title');
            expect(post).toHaveProperty('body');

            expect(typeof post.userId).toBe('number');
            expect(typeof post.id).toBe('number');
            expect(typeof post.title).toBe('string');
            expect(typeof post.body).toBe('string');
        })
    })

    test('Get post # 1.', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

        expect(response.status).toEqual(200);
        expect(typeof response.data).toBe('object');
        expect(response.data).toHaveProperty('userId');
        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('title');
        expect(response.data).toHaveProperty('body');

        expect(typeof response.data.userId).toBe('number');
        expect(typeof response.data.id).toBe('number');
        expect(typeof response.data.title).toBe('string');
        expect(typeof response.data.body).toBe('string');
    });

    test('Get comments to the 1st post.', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');

        expect(response.status).toEqual(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
        response.data.forEach((comment) => {
            expect(comment).toHaveProperty('postId');
            expect(comment).toHaveProperty('id');
            expect(comment).toHaveProperty('name');
            expect(comment).toHaveProperty('email');
            expect(comment).toHaveProperty('body');

            expect(typeof comment.postId).toBe('number');
            expect(typeof comment.id).toBe('number');
            expect(typeof comment.name).toBe('string');
            expect(typeof comment.email).toBe('string');
            expect(typeof comment.body).toBe('string');
        })
    });

    test('Get comments to the post by id 1.', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');

        expect(response.status).toEqual(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
        response.data.forEach((comment) => {
            expect(comment).toHaveProperty('postId');
            expect(comment).toHaveProperty('id');
            expect(comment).toHaveProperty('name');
            expect(comment).toHaveProperty('email');
            expect(comment).toHaveProperty('body');

            expect(typeof comment.postId).toBe('number');
            expect(typeof comment.id).toBe('number');
            expect(typeof comment.name).toBe('string');
            expect(typeof comment.email).toBe('string');
            expect(typeof comment.body).toBe('string');
        })
    });

    test('Create a post.', async () => {
        let response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'This is a test title from Inna.',
            body: 'This is a test body from Inna.',
            userId: 1
        },
            {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
        expect(response.status).toEqual(201);
        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('title', 'This is a test title from Inna.');
        expect(response.data).toHaveProperty('body', 'This is a test body from Inna.');
        expect(response.data).toHaveProperty('userId', 1);
    });
});
