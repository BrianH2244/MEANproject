var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://localhost/todos',
    facebook: {
        clientID: '168643720142372',
        clientSecret: '96495948f5f64c4cf855bf6e26d37bfe',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
    },
    twitter: {
        clientID: '6CHHC3ARPmmsDNxhUW8cb6sp3',
        clientSecret: 'K8vBevcDnFaMzuoNXTcUqWArjj8l0Jg7ROQxc5Qn4JnwWt5ZL9',
        callbackURL: 'http://localhost:1337/oauth/twitter/callback'
    }
};