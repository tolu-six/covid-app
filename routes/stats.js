const express = require('express');
const path = require('path');
const db = require('../database');
const scrappedData = require('../scrapencdc');

const router = express.Router();

router.get('/statistic', (req, res) => {

    const data = scrappedData;

    db.get('statistics', function(err, data) {
         const listObj = JSON.parse(data);
        res.render('stats', {listObj : listObj});

    });
});


module.exports = router;