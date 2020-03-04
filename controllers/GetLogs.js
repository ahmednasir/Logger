const getLogService = require('../services/getData');
const errorLogService = require('../services/getData').getErrorLogs
const errorSchema = require('../models/errorLogsModel');
const config = require('../config/config');
let db = require('../services/dbService');

module.exports.getInfoLogs = (logType)=>{
    return new Promise((resolve, reject) => {
        if(logType === 'error'){
            errorLogService(errorSchema).then(data=>{
                console.log(data)
                resolve(true)
            }).catch(err=>{
                console.log(err)
                resolve(true)
            })
        }
    })
};