const redis = require('redis');

const client = redis.createClient(process.env.PORT || 6379);

client.on('connect', function () {
    console.log('Database connected');
}).on('error', function (err) {
    console.log('Something went wrong ' + err);
});



module.exports = client;