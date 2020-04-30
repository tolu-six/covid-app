const path = require('path');
const redisDB = require('../databases/redis_database');
const scrappedData = require('../scrapencdc');


exports.getStatistics = (req, res, next) => {

    const data = scrappedData;

    redisDB.get('statistics', function(err, data) {

        const list = JSON.parse(data);   
        const listObj_length = list.length;
         
        res.render('stats', {
            list : list,
            listObj_length : listObj_length
        });

    });
};