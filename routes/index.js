var express = require('express');
var router = express.Router();
const config = require('../config/config');
const LogController = require('../controllers/GetLogs').getInfoLogs;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req)
   LogController('error').then(data=>{
    console.log(data)
    res.send({
      m:"sdghvjh"
    })
}).catch(err=>{
    console.log(err)
    res.send({
      m:"sdghvjh"
    })
})
});

module.exports = router;
