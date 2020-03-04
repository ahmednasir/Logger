const express = require('express');
let router = express.Router();
const config = require('../config/config');
const model = require('../models/infoLogsModel');

router.get('/', async function (req, res) {
    await model.find({}, function (err, result) {
        let resList = []
        for(let val of result){
            
           let msg = JSON.parse(val.message)
           msg.TimeStamp = val.timestamp
           resList.push({
               "Message": msg
           })
        }
        console.log(resList)
        res.render(config.PAGES.INDEX, {
            data:{
                Result: result,
                Res: JSON.stringify(resList)
            }
        })
    })
});

router.post('/customised', async function (req, res) {
    console.log(req.body);
    await model.find({}, function (err, result) {
        res.send({Result: result})
    })
});


module.exports = router;

