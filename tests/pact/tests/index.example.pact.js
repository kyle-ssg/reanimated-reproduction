const allTests = {
    users: {
        path: '/users',
        get: {
            description: 'Get users in the system',
            body: require('../responses/users.example.response'),
        },
        post: {
            description: 'Create a user',
            body: require('../responses/user-create.example.response'),
            requestBody: require('../requests/user-create.example.request'),
        },
        put: {
            path: '/users/1',
            state: 'User 1 exists',
            description: 'Update a user',
            body: require('../responses/user-create.example.response'),
            requestBody: require('../requests/user-update.example.request'),
        },
        delete: {
            path: '/users/1',
            description: 'Delete a user',
            state: 'User 1 exists',
            body: {},
        },
    },
};

export default allTests;
