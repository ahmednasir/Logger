var mongoose = require('mongoose');

var errorSchema = mongoose.Schema({

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

module.exports = mongoose.model('errorLogs', errorSchema, "errorLogs");