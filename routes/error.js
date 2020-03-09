var express = require('express');
var router = express.Router();
const config = require('../config/config');
const model = require('../models/errorLogsModel');

router.get('/', async function (req, res) {
    await model.find({},null, {sort: {date: 1}}, function (err, result) {
        let resList = []
        for (let val of result) {
            if (val.message && val.message !== 'undefined') {
                let msg = JSON.parse(val.message)
                msg.TimeStamp = val.timestamp
                resList.push({
                    "Message": msg
                })
            }
        }
        res.render(config.PAGES.ERROR, {
            data: {
                Result: result,
                Res: JSON.stringify(resList)
            }
        })
    })
});
router.post('/customised', async function (req, res) {
    await model.find({}, function (err, result) {
        let resList = []
        for (let val of result) {
            if (val.message && val.message !== 'undefined') {
                let msg = JSON.parse(val.message)
                msg.TimeStamp = val.timestamp
                resList.push({
                    "Message": msg
                })
            }
        }
        res.send(resList)
    })
});

module.exports = router;

