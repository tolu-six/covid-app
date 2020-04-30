const express = require('express');
const router = express.Router();

const statisticController = require('../controllers/statistics');

router.get('/statistic', statisticController.getStatistics);

module.exports = router;