var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var feedbackSchema = new Schema({
    message :{
        type: String,
        unique : false,
        required : true
    },
}, {
    timestamps: true
});

module.exports = feedbackSchema;
