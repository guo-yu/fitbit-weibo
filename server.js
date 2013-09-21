var Server = require('./app').server;

new Server({
    name: 'Fitbit-Weibo', // 站点名称
    url: 'http://fitbit.com', // 站点url
    desc: 'some desc', // 站点描述
    database: {
        name: 'fitbitweibo'
    }
}).run();