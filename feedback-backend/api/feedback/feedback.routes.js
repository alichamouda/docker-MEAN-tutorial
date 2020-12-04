var Feedbacks = require('./feedback.controller');

module.exports = function(router) {
    router.post('/create', Feedbacks.createFeedback);
    router.get('/get', Feedbacks.getFeedbacks);
    router.get('/get/:message', Feedbacks.getFeedback);
    router.put('/update/:id', Feedbacks.updateFeedback);
    router.delete('/remove/:id', Feedbacks.removeFeedback);
}