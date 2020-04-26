const express = require('express');
const path = require('path');
const db = require('../database');
const scrappedData = require('../scrapencdc');

const router = express.Router();

router.get('/statistic', (req, res) => {

    const data = scrappedData;

    db.get('statistics', function(err, data) {

        const list = JSON.parse(data);   

         //const listObj = JSON.stringify(data);
         const listObj_length = list.length;
         
        res.render('stats', {
            list : list,
            listObj_length : listObj_length
        });

    });
});


module.exports = router;