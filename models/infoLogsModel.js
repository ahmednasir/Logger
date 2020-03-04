const mongoose = require('mongoose');

let infoSchema = mongoose.Schema({

    timestamp: {
        type: Date,
        default: Date.now
    },

    level: {
        type: String
    },
    message: {
        type: String
    },
    meta: {
        type: "Mixed"
    }
});

module.exports = mongoose.model('infoLogs', infoSchema, "infoLogs");