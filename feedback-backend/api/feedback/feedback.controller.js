var Feedbacks = require('./feedback.dao');

exports.createFeedback = function (req, res, next) {
    var feedback = {
        message: req.body.message
    };

    Feedbacks.create(feedback, function(err, feedback) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Feedback created successfully"
        })
    })
}

exports.getFeedbacks = function(req, res, next) {
    Feedbacks.get({}, function(err, feedbacks) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            feedbacks: feedbacks
        })
    })
}

exports.getFeedback = function(req, res, next) {
    Feedbacks.get({message: req.params.message}, 
        function(err, feedbacks) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            feedbacks: feedbacks
        })
    })
}

exports.updateFeedback = function(req, res, next) {
    var feedback = {
        message: req.body.message,
    }
    Feedbacks.update({_id: req.params.id}, 
        feedback, function(err, feedback) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Feedback updated successfully"
        })
    })
}

exports.removeFeedback = function(req, res, next) {
    Feedbacks.delete({_id: req.params.id}, 
        function(err, feedback) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Feedback deleted successfully"
        })
    })
}

