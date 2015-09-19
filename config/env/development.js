var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://localhost/todos',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '1643283729258335',
        clientSecret: '7163e2fa14d088eec97d842f518098c6',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    twitter: {
        clientID: ' gJ9bY65dmrqgKYjy4SkIiKMJk',
        clientSecret: 'rKpZM6ZBjdBHHf1x8d7dq4lndL1HnQIa3nzX1KcYlyjO0htfOc',
        callbackURL: 'http://localhost:3000/oauth/twitter/callback'
    },
    google: {
        clientID: '180638535112-inkl8h4sp1e52vh5nbopvi14jth4aikv.apps.googleusercontent.com',
        clientSecret: 'eCxh6mfPu0mSmBN6eDXGFROl',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};