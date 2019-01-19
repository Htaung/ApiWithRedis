var config = {
    port: 3000,
    secret: 'secret',
    redisOption: {
        //client: redis
        host: 'localhost',
        port: 6379
        //url: 'redis://localhost'
    },
    routes: {
        login: '/login',
        logout: '/logout'
    }
};
module.exports = config;