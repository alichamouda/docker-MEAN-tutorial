var mongoose = require('mongoose');
var feedbackSchema = require('./feedback.model');

feedbackSchema.statics = {
    create : function(data, cb) {
        var hero = new this(data);
        hero.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var feedbackModel = mongoose.model('Feedbacks', feedbackSchema);
module.exports = feedbackModel;