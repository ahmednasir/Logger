var express = require('express');
var router = express.Router();
const config = require('../config/config');
const model = require('../models/errorLogsModel');

router.get('/', async function (req, res) {
    await model.find({}, function (err, result) {
        res.json(result)
    })
});

module.exports = router;

